
export interface AIModel {
  id: string;
  name: string;
  provider: string;
  description: string;
  maxTokens: number;
  available: boolean;
  icon: string;
  isRealtime: boolean;
  limitations: string;
  apiUrl?: string;
}

export const AI_MODELS: AIModel[] = [
  {
    id: 'hf-microsoft-dialoGPT-medium',
    name: 'DialoGPT Medium',
    provider: 'Hugging Face',
    description: 'Диалоговая модель Microsoft для разговоров',
    maxTokens: 1024,
    available: true,
    icon: '💬',
    isRealtime: true,
    limitations: 'Бесплатно без ключа API',
    apiUrl: 'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium'
  },
  {
    id: 'hf-gpt2-medium',
    name: 'GPT-2 Medium',
    provider: 'Hugging Face',
    description: 'Средняя версия GPT-2 для генерации текста',
    maxTokens: 1024,
    available: true,
    icon: '🤖',
    isRealtime: true,
    limitations: 'Бесплатно без ключа API',
    apiUrl: 'https://api-inference.huggingface.co/models/gpt2-medium'
  },
  {
    id: 'hf-distilbert-sentiment',
    name: 'DistilBERT Sentiment',
    provider: 'Hugging Face',
    description: 'Анализ тональности текста',
    maxTokens: 512,
    available: true,
    icon: '😊',
    isRealtime: true,
    limitations: 'Бесплатно без ключа API',
    apiUrl: 'https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english'
  },
  {
    id: 'hf-facebook-blenderbot',
    name: 'BlenderBot',
    provider: 'Hugging Face',
    description: 'Разговорная модель Facebook',
    maxTokens: 512,
    available: true,
    icon: '🗣️',
    isRealtime: true,
    limitations: 'Бесплатно без ключа API',
    apiUrl: 'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill'
  },
  {
    id: 'ollama-local',
    name: 'Ollama Local (если установлен)',
    provider: 'Ollama',
    description: 'Локальная модель через Ollama',
    maxTokens: 4096,
    available: true,
    icon: '🏠',
    isRealtime: false,
    limitations: 'Требует установки Ollama',
    apiUrl: 'http://localhost:11434'
  }
];

export const getModelById = (id: string): AIModel | undefined => {
  return AI_MODELS.find(model => model.id === id);
};

export const getAvailableModels = (): AIModel[] => {
  return AI_MODELS.filter(model => model.available);
};
