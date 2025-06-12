
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
  requiresAuth: boolean;
  isFree: boolean;
}

export const AI_MODELS: AIModel[] = [
  // Hugging Face - бесплатные модели
  {
    id: 'hf-mistral-7b',
    name: 'Mistral 7B Instruct',
    provider: 'Hugging Face',
    description: 'Быстрая и умная модель Mistral для диалогов',
    maxTokens: 4096,
    available: true,
    icon: '🚀',
    isRealtime: true,
    limitations: 'Бесплатно без API ключа, 1000 запросов/день',
    apiUrl: 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1',
    requiresAuth: false,
    isFree: true
  },
  {
    id: 'hf-zephyr-7b',
    name: 'Zephyr 7B Beta',
    provider: 'Hugging Face',
    description: 'Обученная модель для помощи и диалогов',
    maxTokens: 4096,
    available: true,
    icon: '💨',
    isRealtime: true,
    limitations: 'Бесплатно без API ключа',
    apiUrl: 'https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta',
    requiresAuth: false,
    isFree: true
  },
  {
    id: 'hf-openchat',
    name: 'OpenChat 3.5',
    provider: 'Hugging Face',
    description: 'Продвинутая модель для открытых диалогов',
    maxTokens: 8192,
    available: true,
    icon: '💬',
    isRealtime: true,
    limitations: 'Бесплатно без API ключа',
    apiUrl: 'https://api-inference.huggingface.co/models/openchat/openchat-3.5-0106',
    requiresAuth: false,
    isFree: true
  },
  {
    id: 'hf-code-llama',
    name: 'Code Llama 7B Instruct',
    provider: 'Hugging Face',
    description: 'Специализированная модель для программирования',
    maxTokens: 4096,
    available: true,
    icon: '💻',
    isRealtime: true,
    limitations: 'Бесплатно без API ключа',
    apiUrl: 'https://api-inference.huggingface.co/models/codellama/CodeLlama-7b-Instruct-hf',
    requiresAuth: false,
    isFree: true
  },
  {
    id: 'hf-phi-3-mini',
    name: 'Phi-3 Mini 4K Instruct',
    provider: 'Hugging Face',
    description: 'Компактная но мощная модель Microsoft',
    maxTokens: 4096,
    available: true,
    icon: '🔮',
    isRealtime: true,
    limitations: 'Бесплатно без API ключа',
    apiUrl: 'https://api-inference.huggingface.co/models/microsoft/Phi-3-mini-4k-instruct',
    requiresAuth: false,
    isFree: true
  },
  
  // OpenAI модели (требуют API ключ)
  {
    id: 'openai-gpt-4-turbo',
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    description: 'Самая продвинутая модель OpenAI',
    maxTokens: 128000,
    available: true,
    icon: '🧠',
    isRealtime: true,
    limitations: 'Требует API ключ OpenAI',
    requiresAuth: true,
    isFree: false
  },
  {
    id: 'openai-gpt-3.5-turbo',
    name: 'GPT-3.5 Turbo',
    provider: 'OpenAI',
    description: 'Быстрая и эффективная модель OpenAI',
    maxTokens: 16385,
    available: true,
    icon: '⚡',
    isRealtime: true,
    limitations: 'Требует API ключ OpenAI',
    requiresAuth: true,
    isFree: false
  },

  // Anthropic Claude (требует API ключ)
  {
    id: 'claude-3-sonnet',
    name: 'Claude 3 Sonnet',
    provider: 'Anthropic',
    description: 'Балансированная модель Claude для общих задач',
    maxTokens: 200000,
    available: true,
    icon: '🎭',
    isRealtime: true,
    limitations: 'Требует API ключ Anthropic',
    requiresAuth: true,
    isFree: false
  },
  {
    id: 'claude-3-haiku',
    name: 'Claude 3 Haiku',
    provider: 'Anthropic',
    description: 'Быстрая и экономичная модель Claude',
    maxTokens: 200000,
    available: true,
    icon: '🌸',
    isRealtime: true,
    limitations: 'Требует API ключ Anthropic',
    requiresAuth: true,
    isFree: false
  },

  // Groq (быстрые модели)
  {
    id: 'groq-llama3-8b',
    name: 'Llama 3 8B (Groq)',
    provider: 'Groq',
    description: 'Сверхбыстрая Llama 3 на чипах Groq',
    maxTokens: 8192,
    available: true,
    icon: '⚡',
    isRealtime: true,
    limitations: 'Требует API ключ Groq, бесплатный план доступен',
    requiresAuth: true,
    isFree: true
  },
  {
    id: 'groq-mixtral-8x7b',
    name: 'Mixtral 8x7B (Groq)',
    provider: 'Groq',
    description: 'Мощная модель Mixtral на Groq',
    maxTokens: 32768,
    available: true,
    icon: '🚀',
    isRealtime: true,
    limitations: 'Требует API ключ Groq',
    requiresAuth: true,
    isFree: true
  },

  // Cohere
  {
    id: 'cohere-command-r',
    name: 'Command R',
    provider: 'Cohere',
    description: 'Продвинутая модель Cohere для диалогов',
    maxTokens: 4096,
    available: true,
    icon: '🎯',
    isRealtime: true,
    limitations: 'Требует API ключ Cohere, есть бесплатный план',
    requiresAuth: true,
    isFree: true
  },

  // Replicate
  {
    id: 'replicate-llama2-70b',
    name: 'Llama 2 70B Chat',
    provider: 'Replicate',
    description: 'Мощная модель Llama 2 через Replicate',
    maxTokens: 4096,
    available: true,
    icon: '🦙',
    isRealtime: true,
    limitations: 'Требует API ключ Replicate',
    requiresAuth: true,
    isFree: false
  },

  // Локальные модели
  {
    id: 'ollama-local',
    name: 'Ollama (Локально)',
    provider: 'Ollama',
    description: 'Локальные модели через Ollama',
    maxTokens: 4096,
    available: true,
    icon: '🏠',
    isRealtime: false,
    limitations: 'Требует установки Ollama',
    requiresAuth: false,
    isFree: true
  }
];

export const getModelById = (id: string): AIModel | undefined => {
  return AI_MODELS.find(model => model.id === id);
};

export const getAvailableModels = (): AIModel[] => {
  return AI_MODELS.filter(model => model.available);
};

export const getFreeModels = (): AIModel[] => {
  return AI_MODELS.filter(model => model.isFree);
};

export const getProviders = (): string[] => {
  return [...new Set(AI_MODELS.map(model => model.provider))];
};
