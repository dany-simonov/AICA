
import { AIModel } from '@/lib/aiModels';
import { HfInference } from '@huggingface/inference';
import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';
import Groq from 'groq-sdk';
import { CohereClient } from 'cohere-ai';
import Replicate from 'replicate';

export interface AIResponse {
  success: boolean;
  content: string;
  model: string;
  tokens?: number;
  error?: string;
  provider: string;
  responseTime: number;
}

export interface ProviderStatus {
  provider: string;
  status: 'working' | 'error' | 'limited' | 'auth_required';
  message: string;
  limitations?: string;
  isFree: boolean;
}

export interface APIKeys {
  openai?: string;
  anthropic?: string;
  groq?: string;
  cohere?: string;
  replicate?: string;
  huggingface?: string;
}

export class AIService {
  private static instance: AIService;
  private providerStatuses: Map<string, ProviderStatus> = new Map();
  private apiKeys: APIKeys = {};

  // Клиенты для разных провайдеров
  private hf: HfInference;
  private openai?: OpenAI;
  private anthropic?: Anthropic;
  private groq?: Groq;
  private cohere?: CohereClient;
  private replicate?: Replicate;

  private constructor() {
    // Загружаем API ключи из localStorage
    this.loadApiKeys();
    this.initializeClients();
  }

  static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  private loadApiKeys(): void {
    try {
      const saved = localStorage.getItem('aica_api_keys');
      if (saved) {
        this.apiKeys = JSON.parse(saved);
      }
    } catch (error) {
      console.warn('Failed to load API keys:', error);
    }
  }

  private saveApiKeys(): void {
    try {
      localStorage.setItem('aica_api_keys', JSON.stringify(this.apiKeys));
    } catch (error) {
      console.warn('Failed to save API keys:', error);
    }
  }

  private initializeClients(): void {
    // Hugging Face (бесплатный)
    this.hf = new HfInference(this.apiKeys.huggingface);

    // OpenAI
    if (this.apiKeys.openai) {
      this.openai = new OpenAI({ 
        apiKey: this.apiKeys.openai,
        dangerouslyAllowBrowser: true 
      });
    }

    // Anthropic
    if (this.apiKeys.anthropic) {
      this.anthropic = new Anthropic({ 
        apiKey: this.apiKeys.anthropic,
        dangerouslyAllowBrowser: true 
      });
    }

    // Groq
    if (this.apiKeys.groq) {
      this.groq = new Groq({ 
        apiKey: this.apiKeys.groq,
        dangerouslyAllowBrowser: true 
      });
    }

    // Cohere
    if (this.apiKeys.cohere) {
      this.cohere = new CohereClient({ 
        token: this.apiKeys.cohere 
      });
    }

    // Replicate
    if (this.apiKeys.replicate) {
      this.replicate = new Replicate({ 
        auth: this.apiKeys.replicate 
      });
    }
  }

  setApiKey(provider: string, key: string): void {
    this.apiKeys[provider as keyof APIKeys] = key;
    this.saveApiKeys();
    this.initializeClients();
  }

  getApiKeys(): APIKeys {
    return { ...this.apiKeys };
  }

  async testProviders(): Promise<ProviderStatus[]> {
    const results: ProviderStatus[] = [];
    
    // Тестируем Hugging Face
    await this.testHuggingFace(results);
    
    // Тестируем OpenAI
    await this.testOpenAI(results);
    
    // Тестируем Anthropic
    await this.testAnthropic(results);
    
    // Тестируем Groq
    await this.testGroq(results);
    
    // Тестируем Cohere
    await this.testCohere(results);
    
    // Тестируем Replicate
    await this.testReplicate(results);
    
    // Тестируем Ollama
    await this.testOllama(results);

    // Сохраняем статусы
    results.forEach(status => {
      this.providerStatuses.set(status.provider.toLowerCase(), status);
    });

    return results;
  }

  private async testHuggingFace(results: ProviderStatus[]): Promise<void> {
    try {
      const response = await fetch('https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(this.apiKeys.huggingface && { 'Authorization': `Bearer ${this.apiKeys.huggingface}` })
        },
        body: JSON.stringify({
          inputs: 'Hello',
          parameters: { max_new_tokens: 10, temperature: 0.1 }
        })
      });

      if (response.ok || response.status === 503) {
        results.push({
          provider: 'Hugging Face',
          status: 'working',
          message: 'Успешно подключен',
          limitations: 'Бесплатно без API ключа, возможны ограничения по скорости',
          isFree: true
        });
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (error) {
      results.push({
        provider: 'Hugging Face',
        status: 'limited',
        message: 'Ограниченный доступ, модели могут загружаться',
        limitations: 'Некоторые модели недоступны без API ключа',
        isFree: true
      });
    }
  }

  private async testOpenAI(results: ProviderStatus[]): Promise<void> {
    if (!this.openai) {
      results.push({
        provider: 'OpenAI',
        status: 'auth_required',
        message: 'Требуется API ключ',
        limitations: 'Введите API ключ в настройках',
        isFree: false
      });
      return;
    }

    try {
      await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Hi' }],
        max_tokens: 5
      });

      results.push({
        provider: 'OpenAI',
        status: 'working',
        message: 'API ключ действителен',
        limitations: 'Платный сервис, списание по использованию',
        isFree: false
      });
    } catch (error) {
      results.push({
        provider: 'OpenAI',
        status: 'error',
        message: 'Неверный API ключ или ошибка доступа',
        limitations: 'Проверьте API ключ',
        isFree: false
      });
    }
  }

  private async testAnthropic(results: ProviderStatus[]): Promise<void> {
    if (!this.anthropic) {
      results.push({
        provider: 'Anthropic',
        status: 'auth_required',
        message: 'Требуется API ключ',
        limitations: 'Введите API ключ в настройках',
        isFree: false
      });
      return;
    }

    try {
      await this.anthropic.messages.create({
        model: 'claude-3-haiku-20240307',
        max_tokens: 5,
        messages: [{ role: 'user', content: 'Hi' }]
      });

      results.push({
        provider: 'Anthropic',
        status: 'working',
        message: 'API ключ действителен',
        limitations: 'Платный сервис, есть бесплатные кредиты',
        isFree: false
      });
    } catch (error) {
      results.push({
        provider: 'Anthropic',
        status: 'error',
        message: 'Неверный API ключ или ошибка доступа',
        limitations: 'Проверьте API ключ',
        isFree: false
      });
    }
  }

  private async testGroq(results: ProviderStatus[]): Promise<void> {
    if (!this.groq) {
      results.push({
        provider: 'Groq',
        status: 'auth_required',
        message: 'Требуется API ключ',
        limitations: 'Есть бесплатный план',
        isFree: true
      });
      return;
    }

    try {
      await this.groq.chat.completions.create({
        model: 'llama3-8b-8192',
        messages: [{ role: 'user', content: 'Hi' }],
        max_tokens: 5
      });

      results.push({
        provider: 'Groq',
        status: 'working',
        message: 'API ключ действителен',
        limitations: 'Бесплатный план с ограничениями',
        isFree: true
      });
    } catch (error) {
      results.push({
        provider: 'Groq',
        status: 'error',
        message: 'Неверный API ключ или превышен лимит',
        limitations: 'Проверьте API ключ и лимиты',
        isFree: true
      });
    }
  }

  private async testCohere(results: ProviderStatus[]): Promise<void> {
    if (!this.cohere) {
      results.push({
        provider: 'Cohere',
        status: 'auth_required',
        message: 'Требуется API ключ',
        limitations: 'Есть бесплатный план',
        isFree: true
      });
      return;
    }

    try {
      await this.cohere.chat({
        model: 'command-r',
        message: 'Hi',
        maxTokens: 5
      });

      results.push({
        provider: 'Cohere',
        status: 'working',
        message: 'API ключ действителен',
        limitations: 'Бесплатный план с ограничениями',
        isFree: true
      });
    } catch (error) {
      results.push({
        provider: 'Cohere',
        status: 'error',
        message: 'Неверный API ключ или ошибка доступа',
        limitations: 'Проверьте API ключ',
        isFree: true
      });
    }
  }

  private async testReplicate(results: ProviderStatus[]): Promise<void> {
    if (!this.replicate) {
      results.push({
        provider: 'Replicate',
        status: 'auth_required',
        message: 'Требуется API ключ',
        limitations: 'Платный сервис',
        isFree: false
      });
      return;
    }

    try {
      // Простой тест подключения к Replicate
      const response = await fetch('https://api.replicate.com/v1/models', {
        headers: {
          'Authorization': `Token ${this.apiKeys.replicate}`
        }
      });

      if (response.ok) {
        results.push({
          provider: 'Replicate',
          status: 'working',
          message: 'API ключ действителен',
          limitations: 'Платный сервис, списание по использованию',
          isFree: false
        });
      } else {
        throw new Error('Invalid API key');
      }
    } catch (error) {
      results.push({
        provider: 'Replicate',
        status: 'error',
        message: 'Неверный API ключ',
        limitations: 'Проверьте API ключ',
        isFree: false
      });
    }
  }

  private async testOllama(results: ProviderStatus[]): Promise<void> {
    try {
      const response = await fetch('http://localhost:11434/api/tags');
      
      if (response.ok) {
        results.push({
          provider: 'Ollama',
          status: 'working',
          message: 'Ollama запущен локально',
          limitations: 'Требует установки Ollama',
          isFree: true
        });
      } else {
        throw new Error('Ollama not responding');
      }
    } catch (error) {
      results.push({
        provider: 'Ollama',
        status: 'error',
        message: 'Ollama не установлен или не запущен',
        limitations: 'Установите Ollama для локальной работы',
        isFree: true
      });
    }
  }

  async generateResponse(model: AIModel, prompt: string): Promise<AIResponse> {
    const startTime = Date.now();
    
    try {
      console.log(`Generating response with ${model.name}...`);
      
      switch (model.provider) {
        case 'Hugging Face':
          return await this.generateHuggingFaceResponse(model, prompt, startTime);
        case 'OpenAI':
          return await this.generateOpenAIResponse(model, prompt, startTime);
        case 'Anthropic':
          return await this.generateAnthropicResponse(model, prompt, startTime);
        case 'Groq':
          return await this.generateGroqResponse(model, prompt, startTime);
        case 'Cohere':
          return await this.generateCohereResponse(model, prompt, startTime);
        case 'Replicate':
          return await this.generateReplicateResponse(model, prompt, startTime);
        case 'Ollama':
          return await this.generateOllamaResponse(model, prompt, startTime);
        default:
          return await this.generateFallbackResponse(model, prompt, startTime);
      }
    } catch (error) {
      console.error(`Error with ${model.name}:`, error);
      return {
        success: false,
        content: `Извините, произошла ошибка с ${model.name}. Попробуйте другую модель.`,
        model: model.name,
        provider: model.provider,
        error: error instanceof Error ? error.message : 'Unknown error',
        responseTime: Date.now() - startTime
      };
    }
  }

  private async generateHuggingFaceResponse(model: AIModel, prompt: string, startTime: number): Promise<AIResponse> {
    if (!model.apiUrl) throw new Error('API URL not specified');
    
    const response = await fetch(model.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(this.apiKeys.huggingface && { 'Authorization': `Bearer ${this.apiKeys.huggingface}` })
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: Math.min(256, model.maxTokens),
          temperature: 0.7,
          return_full_text: false,
          do_sample: true
        }
      })
    });

    if (!response.ok) {
      if (response.status === 503) {
        // Модель загружается
        await new Promise(resolve => setTimeout(resolve, 10000));
        return await this.generateHuggingFaceResponse(model, prompt, startTime);
      }
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    let content = '';
    
    if (Array.isArray(data) && data[0]?.generated_text) {
      content = data[0].generated_text;
    } else if (data.generated_text) {
      content = data.generated_text;
    } else {
      content = 'Ответ получен успешно!';
    }
    
    return {
      success: true,
      content: content || 'Успешный ответ от модели',
      model: model.name,
      provider: model.provider,
      tokens: content.split(' ').length,
      responseTime: Date.now() - startTime
    };
  }

  private async generateOpenAIResponse(model: AIModel, prompt: string, startTime: number): Promise<AIResponse> {
    if (!this.openai) throw new Error('OpenAI client not initialized');

    const completion = await this.openai.chat.completions.create({
      model: model.id.replace('openai-', ''),
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 256,
      temperature: 0.7
    });

    const content = completion.choices[0]?.message?.content || 'Пустой ответ';
    
    return {
      success: true,
      content,
      model: model.name,
      provider: model.provider,
      tokens: completion.usage?.total_tokens,
      responseTime: Date.now() - startTime
    };
  }

  private async generateAnthropicResponse(model: AIModel, prompt: string, startTime: number): Promise<AIResponse> {
    if (!this.anthropic) throw new Error('Anthropic client not initialized');

    const response = await this.anthropic.messages.create({
      model: model.id.replace('claude-', 'claude-'),
      max_tokens: 256,
      messages: [{ role: 'user', content: prompt }]
    });

    const content = response.content[0]?.type === 'text' ? response.content[0].text : 'Пустой ответ';
    
    return {
      success: true,
      content,
      model: model.name,
      provider: model.provider,
      tokens: response.usage.input_tokens + response.usage.output_tokens,
      responseTime: Date.now() - startTime
    };
  }

  private async generateGroqResponse(model: AIModel, prompt: string, startTime: number): Promise<AIResponse> {
    if (!this.groq) throw new Error('Groq client not initialized');

    const completion = await this.groq.chat.completions.create({
      model: model.id.replace('groq-', '').replace('-', '_'),
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 256,
      temperature: 0.7
    });

    const content = completion.choices[0]?.message?.content || 'Пустой ответ';
    
    return {
      success: true,
      content,
      model: model.name,
      provider: model.provider,
      tokens: completion.usage?.total_tokens,
      responseTime: Date.now() - startTime
    };
  }

  private async generateCohereResponse(model: AIModel, prompt: string, startTime: number): Promise<AIResponse> {
    if (!this.cohere) throw new Error('Cohere client not initialized');

    const response = await this.cohere.chat({
      model: 'command-r',
      message: prompt,
      maxTokens: 256
    });

    return {
      success: true,
      content: response.text,
      model: model.name,
      provider: model.provider,
      tokens: response.meta?.tokens?.inputTokens + response.meta?.tokens?.outputTokens,
      responseTime: Date.now() - startTime
    };
  }

  private async generateReplicateResponse(model: AIModel, prompt: string, startTime: number): Promise<AIResponse> {
    if (!this.replicate) throw new Error('Replicate client not initialized');

    const output = await this.replicate.run(
      "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
      {
        input: {
          prompt,
          max_new_tokens: 256,
          temperature: 0.7
        }
      }
    );

    const content = Array.isArray(output) ? output.join('') : String(output);
    
    return {
      success: true,
      content,
      model: model.name,
      provider: model.provider,
      tokens: content.split(' ').length,
      responseTime: Date.now() - startTime
    };
  }

  private async generateOllamaResponse(model: AIModel, prompt: string, startTime: number): Promise<AIResponse> {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama2',
        prompt,
        stream: false
      })
    });

    if (!response.ok) {
      throw new Error(`Ollama не отвечает: ${response.status}`);
    }

    const data = await response.json();
    
    return {
      success: true,
      content: data.response || 'Ответ от Ollama получен',
      model: model.name,
      provider: model.provider,
      tokens: data.eval_count || 50,
      responseTime: Date.now() - startTime
    };
  }

  private async generateFallbackResponse(model: AIModel, prompt: string, startTime: number): Promise<AIResponse> {
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const responses = [
      `Это демо-ответ от ${model.name}. Для реальных ответов настройте API ключи.`,
      `${model.name} временно недоступна. Попробуйте другую модель.`,
      `Тестовая симуляция ответа от ${model.name}.`
    ];
    
    return {
      success: true,
      content: responses[Math.floor(Math.random() * responses.length)],
      model: model.name,
      provider: model.provider,
      tokens: Math.floor(Math.random() * 50) + 30,
      responseTime: Date.now() - startTime
    };
  }

  getProviderStatuses(): ProviderStatus[] {
    return Array.from(this.providerStatuses.values());
  }

  async testAllModels(): Promise<Map<string, AIResponse>> {
    const testPrompt = "Привет! Как дела?";
    const results = new Map<string, AIResponse>();
    
    const { getAvailableModels } = await import('@/lib/aiModels');
    const models = getAvailableModels();
    
    for (const model of models.slice(0, 5)) { // Тестируем первые 5 моделей
      try {
        const response = await this.generateResponse(model, testPrompt);
        results.set(model.id, response);
      } catch (error) {
        results.set(model.id, {
          success: false,
          content: 'Ошибка тестирования',
          model: model.name,
          provider: model.provider,
          error: error instanceof Error ? error.message : 'Unknown error',
          responseTime: 0
        });
      }
    }
    
    return results;
  }
}

export const aiService = AIService.getInstance();
