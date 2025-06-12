
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Key, Eye, EyeOff, Save, TestTube, ExternalLink } from "lucide-react";
import { aiService, type APIKeys } from '@/services/aiService';
import { useToast } from "@/hooks/use-toast";

interface APIKeyConfig {
  name: string;
  key: keyof APIKeys;
  description: string;
  website: string;
  isFree: boolean;
  instructions: string;
}

const API_CONFIGS: APIKeyConfig[] = [
  {
    name: 'Hugging Face',
    key: 'huggingface',
    description: 'Доступ к моделям Hugging Face с повышенными лимитами',
    website: 'https://huggingface.co/settings/tokens',
    isFree: true,
    instructions: 'Создайте Read токен в настройках Hugging Face'
  },
  {
    name: 'OpenAI',
    key: 'openai',
    description: 'Доступ к GPT-4, GPT-3.5 и другим моделям OpenAI',
    website: 'https://platform.openai.com/api-keys',
    isFree: false,
    instructions: 'Создайте API ключ в панели OpenAI'
  },
  {
    name: 'Anthropic',
    key: 'anthropic',
    description: 'Доступ к моделям Claude от Anthropic',
    website: 'https://console.anthropic.com/',
    isFree: false,
    instructions: 'Получите API ключ в консоли Anthropic'
  },
  {
    name: 'Groq',
    key: 'groq',
    description: 'Сверхбыстрые модели на чипах Groq',
    website: 'https://console.groq.com/keys',
    isFree: true,
    instructions: 'Бесплатный API ключ в консоли Groq'
  },
  {
    name: 'Cohere',
    key: 'cohere',
    description: 'Модели Cohere для диалогов и анализа',
    website: 'https://dashboard.cohere.ai/api-keys',
    isFree: true,
    instructions: 'Бесплатный план в дашборде Cohere'
  },
  {
    name: 'Replicate',
    key: 'replicate',
    description: 'Доступ к различным open-source моделям',
    website: 'https://replicate.com/account/api-tokens',
    isFree: false,
    instructions: 'Создайте токен в аккаунте Replicate'
  }
];

export const APIKeysManager = () => {
  const [apiKeys, setApiKeys] = useState<APIKeys>({});
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});
  const [isTesting, setIsTesting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setApiKeys(aiService.getApiKeys());
  }, []);

  const handleKeyChange = (key: keyof APIKeys, value: string) => {
    setApiKeys(prev => ({ ...prev, [key]: value }));
  };

  const saveKey = (key: keyof APIKeys) => {
    const value = apiKeys[key];
    if (value) {
      aiService.setApiKey(key, value);
      toast({
        title: "API ключ сохранен",
        description: `Ключ для ${key} успешно сохранен`,
      });
    }
  };

  const toggleShowKey = (key: string) => {
    setShowKeys(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const testProviders = async () => {
    setIsTesting(true);
    try {
      const results = await aiService.testProviders();
      const workingCount = results.filter(r => r.status === 'working').length;
      
      toast({
        title: "Тест провайдеров завершен",
        description: `${workingCount} из ${results.length} провайдеров работают`,
      });
    } catch (error) {
      toast({
        title: "Ошибка тестирования",
        description: "Не удалось протестировать провайдеры",
        variant: "destructive",
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Key className="h-5 w-5" />
            <span>Управление API ключами</span>
          </CardTitle>
          <CardDescription>
            Настройте API ключи для доступа к различным AI провайдерам
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-600">
              Храните ключи безопасно в браузере. Они не передаются на сторонние серверы.
            </div>
            <Button onClick={testProviders} disabled={isTesting}>
              {isTesting ? (
                <>
                  <div className="w-4 h-4 border border-gray-300 border-t-blue-600 rounded-full animate-spin mr-2"></div>
                  Тестирование...
                </>
              ) : (
                <>
                  <TestTube className="h-4 w-4 mr-2" />
                  Тест провайдеров
                </>
              )}
            </Button>
          </div>

          <Tabs defaultValue="free" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="free">Бесплатные</TabsTrigger>
              <TabsTrigger value="paid">Платные</TabsTrigger>
            </TabsList>
            
            <TabsContent value="free" className="space-y-4">
              {API_CONFIGS.filter(config => config.isFree).map((config) => (
                <Card key={config.key}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{config.name}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          Бесплатно
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(config.website, '_blank')}
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Получить ключ
                        </Button>
                      </div>
                    </div>
                    <CardDescription>{config.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Label htmlFor={config.key}>API Ключ</Label>
                      <div className="flex space-x-2">
                        <div className="relative flex-1">
                          <Input
                            id={config.key}
                            type={showKeys[config.key] ? "text" : "password"}
                            value={apiKeys[config.key] || ''}
                            onChange={(e) => handleKeyChange(config.key, e.target.value)}
                            placeholder={`Введите ${config.name} API ключ`}
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute right-1 top-1 h-7 w-7 p-0"
                            onClick={() => toggleShowKey(config.key)}
                          >
                            {showKeys[config.key] ? (
                              <EyeOff className="h-3 w-3" />
                            ) : (
                              <Eye className="h-3 w-3" />
                            )}
                          </Button>
                        </div>
                        <Button
                          onClick={() => saveKey(config.key)}
                          disabled={!apiKeys[config.key]}
                        >
                          <Save className="h-4 w-4 mr-2" />
                          Сохранить
                        </Button>
                      </div>
                      <div className="text-sm text-gray-500">
                        {config.instructions}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="paid" className="space-y-4">
              {API_CONFIGS.filter(config => !config.isFree).map((config) => (
                <Card key={config.key}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{config.name}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="bg-orange-50 text-orange-700">
                          Платно
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(config.website, '_blank')}
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Получить ключ
                        </Button>
                      </div>
                    </div>
                    <CardDescription>{config.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Label htmlFor={config.key}>API Ключ</Label>
                      <div className="flex space-x-2">
                        <div className="relative flex-1">
                          <Input
                            id={config.key}
                            type={showKeys[config.key] ? "text" : "password"}
                            value={apiKeys[config.key] || ''}
                            onChange={(e) => handleKeyChange(config.key, e.target.value)}
                            placeholder={`Введите ${config.name} API ключ`}
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute right-1 top-1 h-7 w-7 p-0"
                            onClick={() => toggleShowKey(config.key)}
                          >
                            {showKeys[config.key] ? (
                              <EyeOff className="h-3 w-3" />
                            ) : (
                              <Eye className="h-3 w-3" />
                            )}
                          </Button>
                        </div>
                        <Button
                          onClick={() => saveKey(config.key)}
                          disabled={!apiKeys[config.key]}
                        >
                          <Save className="h-4 w-4 mr-2" />
                          Сохранить
                        </Button>
                      </div>
                      <div className="text-sm text-gray-500">
                        {config.instructions}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
