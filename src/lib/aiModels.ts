
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
}

export const AI_MODELS: AIModel[] = [
  {
    id: 'hf-gpt2',
    name: 'GPT-2',
    provider: 'Hugging Face',
    description: 'Базовая языковая модель для генерации текста',
    maxTokens: 1024,
    available: true,
    icon: '🤗',
    isRealtime: true,
    limitations: 'Бесплатно: 1000 запросов/месяц'
  },
  {
    id: 'hf-distilbert',
    name: 'DistilBERT',
    provider: 'Hugging Face',
    description: 'Быстрая модель для анализа текста и классификации',
    maxTokens: 512,
    available: true,
    icon: '⚡',
    isRealtime: true,
    limitations: 'Бесплатно: 1000 запросов/месяц'
  },
  {
    id: 'hf-t5-small',
    name: 'T5-Small',
    provider: 'Hugging Face',
    description: 'Модель для задач text-to-text преобразования',
    maxTokens: 512,
    available: true,
    icon: '🔄',
    isRealtime: true,
    limitations: 'Бесплатно: 1000 запросов/месяц'
  },
  {
    id: 'g4f-gpt-3.5',
    name: 'GPT-3.5 Turbo (Free)',
    provider: 'G4F',
    description: 'Бесплатный доступ к GPT-3.5 через G4F',
    maxTokens: 4096,
    available: true,
    icon: '🆓',
    isRealtime: false,
    limitations: 'Нестабильный, зависит от доступности'
  },
  {
    id: 'g4f-claude',
    name: 'Claude (Free)',
    provider: 'G4F',
    description: 'Бесплатный доступ к Claude через G4F',
    maxTokens: 4096,
    available: true,
    icon: '🧠',
    isRealtime: false,
    limitations: 'Нестабильный, зависит от доступности'
  }
];

export const getModelById = (id: string): AIModel | undefined => {
  return AI_MODELS.find(model => model.id === id);
};

export const getAvailableModels = (): AIModel[] => {
  return AI_MODELS.filter(model => model.available);
};
