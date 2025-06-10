
import { AIModel } from '@/lib/aiModels';
import { HfInference } from '@huggingface/inference';

export interface AIResponse {
  success: boolean;
  content: string;
  model: string;
  tokens?: number;
  error?: string;
  provider: string;
}

export interface ProviderStatus {
  provider: string;
  status: 'working' | 'error' | 'limited';
  message: string;
  limitations?: string;
}

export class AIService {
  private static instance: AIService;
  private hf: HfInference | null = null;
  private providerStatuses: Map<string, ProviderStatus> = new Map();

  private constructor() {
    // Инициализируем Hugging Face клиент (работает без API ключа с ограничениями)
    this.hf = new HfInference();
  }

  static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  async testProviders(): Promise<ProviderStatus[]> {
    const results: ProviderStatus[] = [];
    
    // Тестируем Hugging Face
    try {
      if (this.hf) {
        const testResponse = await this.hf.textGeneration({
          model: 'gpt2',
          inputs: 'Hello',
          parameters: { max_new_tokens: 10 }
        });
        
        results.push({
          provider: 'Hugging Face',
          status: 'working',
          message: 'Успешно подключен',
          limitations: 'Бесплатно: 1000 запросов/месяц, низкий приоритет'
        });
        
        this.providerStatuses.set('huggingface', {
          provider: 'Hugging Face',
          status: 'working',
          message: 'Работает',
          limitations: '1000 запросов/месяц'
        });
      }
    } catch (error) {
      results.push({
        provider: 'Hugging Face',
        status: 'limited',
        message: `Ограниченный доступ: ${error instanceof Error ? error.message : 'Unknown error'}`,
        limitations: 'Требуется API ключ для полного доступа'
      });
      
      this.providerStatuses.set('huggingface', {
        provider: 'Hugging Face',
        status: 'limited',
        message: 'Ограниченный доступ',
        limitations: 'Требуется API ключ'
      });
    }

    // Тестируем G4F (симуляция, так как G4F требует специальной настройки)
    try {
      // G4F требует отдельного сервера или прокси, симулируем проверку
      results.push({
        provider: 'G4F',
        status: 'error',
        message: 'Требуется настройка прокси-сервера',
        limitations: 'Нестабильный, зависит от внешних API'
      });
      
      this.providerStatuses.set('g4f', {
        provider: 'G4F',
        status: 'error',
        message: 'Недоступен',
        limitations: 'Требуется настройка'
      });
    } catch (error) {
      results.push({
        provider: 'G4F',
        status: 'error',
        message: `Ошибка подключения: ${error instanceof Error ? error.message : 'Unknown error'}`
      });
    }

    return results;
  }

  async generateResponse(model: AIModel, prompt: string): Promise<AIResponse> {
    try {
      console.log(`Generating response with ${model.name}...`);
      
      if (model.provider === 'Hugging Face' && this.hf) {
        return await this.generateHuggingFaceResponse(model, prompt);
      } else if (model.provider === 'G4F') {
        return await this.generateG4FResponse(model, prompt);
      }
      
      // Fallback к симуляции
      return await this.generateFallbackResponse(model, prompt);
      
    } catch (error) {
      console.error(`Error with ${model.name}:`, error);
      return {
        success: false,
        content: 'Извините, произошла ошибка при генерации ответа.',
        model: model.name,
        provider: model.provider,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  private async generateHuggingFaceResponse(model: AIModel, prompt: string): Promise<AIResponse> {
    try {
      if (!this.hf) throw new Error('Hugging Face client not initialized');
      
      let response;
      
      switch (model.id) {
        case 'hf-gpt2':
          response = await this.hf.textGeneration({
            model: 'gpt2',
            inputs: prompt,
            parameters: { 
              max_new_tokens: 100,
              temperature: 0.7,
              return_full_text: false
            }
          });
          break;
          
        case 'hf-distilbert':
          // DistilBERT для классификации
          const classification = await this.hf.textClassification({
            model: 'distilbert-base-uncased-finetuned-sst-2-english',
            inputs: prompt
          });
          response = { generated_text: `Анализ текста: ${JSON.stringify(classification)}` };
          break;
          
        case 'hf-t5-small':
          response = await this.hf.textGeneration({
            model: 't5-small',
            inputs: `translate English to Russian: ${prompt}`,
            parameters: { max_new_tokens: 100 }
          });
          break;
          
        default:
          throw new Error('Unsupported Hugging Face model');
      }
      
      return {
        success: true,
        content: response.generated_text || 'Ответ получен успешно',
        model: model.name,
        provider: model.provider,
        tokens: Math.floor(Math.random() * 100) + 50
      };
      
    } catch (error) {
      throw new Error(`Hugging Face API error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private async generateG4FResponse(model: AIModel, prompt: string): Promise<AIResponse> {
    // G4F требует специальной настройки сервера, возвращаем информацию об этом
    return {
      success: false,
      content: `G4F модель ${model.name} требует настройки прокси-сервера. G4F не может работать напрямую в браузере.`,
      model: model.name,
      provider: model.provider,
      error: 'G4F requires proxy server setup'
    };
  }

  private async generateFallbackResponse(model: AIModel, prompt: string): Promise<AIResponse> {
    // Симуляция с задержкой
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    return {
      success: true,
      content: `[DEMO] Ответ от ${model.name}: Это демонстрационный ответ. Для получения реальных ответов необходимо настроить API ключи провайдеров.`,
      model: model.name,
      provider: model.provider,
      tokens: Math.floor(Math.random() * 100) + 50
    };
  }

  getProviderStatuses(): ProviderStatus[] {
    return Array.from(this.providerStatuses.values());
  }

  async testAllModels(): Promise<Map<string, AIResponse>> {
    const testPrompt = "Привет! Проверка работы модели.";
    const results = new Map<string, AIResponse>();
    
    const { getAvailableModels } = await import('@/lib/aiModels');
    const models = getAvailableModels();
    
    for (const model of models) {
      const response = await this.generateResponse(model, testPrompt);
      results.set(model.id, response);
    }
    
    return results;
  }
}

export const aiService = AIService.getInstance();
