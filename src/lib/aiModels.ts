
export interface AIModel {
  id: string;
  name: string;
  provider: string;
  description: string;
  maxTokens: number;
  available: boolean;
  icon: string;
}

export const AI_MODELS: AIModel[] = [
  {
    id: 'gpt-4o',
    name: 'GPT-4 Omni',
    provider: 'OpenAI',
    description: 'Самая продвинутая модель OpenAI для сложных задач',
    maxTokens: 8192,
    available: true,
    icon: '🤖'
  },
  {
    id: 'claude-3-sonnet',
    name: 'Claude 3 Sonnet',
    provider: 'Anthropic',
    description: 'Сбалансированная модель для анализа и рассуждений',
    maxTokens: 4096,
    available: true,
    icon: '🧠'
  },
  {
    id: 'llama-3.1-8b',
    name: 'Llama 3.1 8B',
    provider: 'Meta',
    description: 'Открытая модель с высоким качеством ответов',
    maxTokens: 2048,
    available: true,
    icon: '🦙'
  },
  {
    id: 'gemini-pro',
    name: 'Gemini Pro',
    provider: 'Google',
    description: 'Мультимодальная модель от Google',
    maxTokens: 2048,
    available: true,
    icon: '💎'
  },
  {
    id: 'mistral-large',
    name: 'Mistral Large',
    provider: 'Mistral AI',
    description: 'Европейская модель с фокусом на безопасность',
    maxTokens: 4096,
    available: true,
    icon: '🌟'
  }
];

export const getModelById = (id: string): AIModel | undefined => {
  return AI_MODELS.find(model => model.id === id);
};

export const getAvailableModels = (): AIModel[] => {
  return AI_MODELS.filter(model => model.available);
};
