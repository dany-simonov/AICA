
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Send, User, Lightbulb, Settings, TestTube, Zap, AlertCircle, CheckCircle, XCircle, Key, Filter } from "lucide-react";
import { AI_MODELS, getModelById, getFreeModels, type AIModel } from '@/lib/aiModels';
import { aiService, type AIResponse, type ProviderStatus } from '@/services/aiService';
import { APIKeysManager } from './APIKeysManager';
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  model?: string;
  tokens?: number;
  provider?: string;
  responseTime?: number;
}

export const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Привет! Я ваш AI-помощник AICA с доступом к реальным нейросетям. Выберите модель и задайте вопрос. Доступны бесплатные модели Hugging Face, Groq, Cohere и платные OpenAI, Anthropic, Replicate.',
      sender: 'ai',
      timestamp: new Date(),
      model: 'AICA System'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string>(AI_MODELS[0].id);
  const [isTestingModels, setIsTestingModels] = useState(false);
  const [isTestingProviders, setIsTestingProviders] = useState(false);
  const [providerStatuses, setProviderStatuses] = useState<ProviderStatus[]>([]);
  const [modelFilter, setModelFilter] = useState<'all' | 'free' | 'working'>('all');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const quickQuestions = [
    "Привет! Как дела?",
    "Расскажи о себе",
    "Что ты умеешь?",
    "Объясни квантовую физику простыми словами",
    "Напиши код для сортировки массива на Python",
    "Какие тренды в AI сейчас популярны?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Автоматически тестируем провайдеры при загрузке
    handleTestProviders();
  }, []);

  const getFilteredModels = () => {
    let models = AI_MODELS;
    
    switch (modelFilter) {
      case 'free':
        models = getFreeModels();
        break;
      case 'working':
        models = AI_MODELS.filter(model => {
          const status = providerStatuses.find(s => s.provider === model.provider);
          return status?.status === 'working';
        });
        break;
      default:
        models = AI_MODELS;
    }
    
    return models;
  };

  const handleTestProviders = async () => {
    setIsTestingProviders(true);
    
    try {
      const statuses = await aiService.testProviders();
      setProviderStatuses(statuses);
      
      const workingCount = statuses.filter(s => s.status === 'working').length;
      
      toast({
        title: "Тест провайдеров завершен",
        description: `${workingCount} из ${statuses.length} провайдеров работают`,
      });
      
      // Добавляем сообщение о результатах теста
      const testMessage: Message = {
        id: Date.now().toString(),
        content: `🔍 **Результаты тестирования AI провайдеров:**\n\n${statuses.map(status => {
          const icon = status.status === 'working' ? '✅' : 
                      status.status === 'auth_required' ? '🔑' :
                      status.status === 'limited' ? '⚠️' : '❌';
          return `${icon} **${status.provider}**: ${status.message}${status.limitations ? `\n   └ ${status.limitations}` : ''}`;
        }).join('\n\n')}\n\n📊 **Рекомендации:** Используйте рабочие модели или настройте API ключи в разделе "Настройки".`,
        sender: 'ai',
        timestamp: new Date(),
        model: 'AICA Test System'
      };
      
      setMessages(prev => [...prev, testMessage]);
    } catch (error) {
      toast({
        title: "Ошибка тестирования",
        description: "Не удалось протестировать провайдеры",
        variant: "destructive",
      });
    } finally {
      setIsTestingProviders(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const model = getModelById(selectedModel);
    if (!model) {
      toast({
        title: "Ошибка",
        description: "Выбранная модель недоступна",
        variant: "destructive",
      });
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response: AIResponse = await aiService.generateResponse(model, inputValue);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.content,
        sender: 'ai',
        timestamp: new Date(),
        model: response.model,
        tokens: response.tokens,
        provider: response.provider,
        responseTime: response.responseTime
      };

      setMessages(prev => [...prev, aiMessage]);
      
      if (!response.success) {
        toast({
          title: "Предупреждение",
          description: response.error || "Возможны проблемы с ответом модели",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Ответ получен",
          description: `${response.model} ответил за ${response.responseTime}мс`,
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось получить ответ от AI модели",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleTestAllModels = async () => {
    setIsTestingModels(true);
    
    try {
      const results = await aiService.testAllModels();
      let successCount = 0;
      let totalCount = 0;
      
      results.forEach((result, modelId) => {
        totalCount++;
        if (result.success) successCount++;
      });
      
      toast({
        title: "Тест моделей завершен",
        description: `${successCount} из ${totalCount} моделей работают корректно`,
      });
      
      // Добавляем сообщение о результатах теста
      const testMessage: Message = {
        id: Date.now().toString(),
        content: `🧪 **Результаты тестирования AI моделей:**\n\n${Array.from(results.entries()).map(([modelId, result]) => {
          const model = getModelById(modelId);
          const icon = result.success ? '✅' : '❌';
          const time = result.responseTime ? ` (${result.responseTime}мс)` : '';
          return `${icon} **${model?.name}** (${model?.provider})${time}`;
        }).join('\n')}\n\n✨ Используйте рабочие модели для получения реальных ответов!`,
        sender: 'ai',
        timestamp: new Date(),
        model: 'AICA Test System'
      };
      
      setMessages(prev => [...prev, testMessage]);
    } catch (error) {
      toast({
        title: "Ошибка тестирования",
        description: "Не удалось протестировать модели",
        variant: "destructive",
      });
    } finally {
      setIsTestingModels(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const currentModel = getModelById(selectedModel);

  const getProviderStatusIcon = (provider: string) => {
    const status = providerStatuses.find(s => s.provider === provider);
    if (!status) return null;
    
    switch (status.status) {
      case 'working': return <CheckCircle className="h-3 w-3 text-green-600" />;
      case 'auth_required': return <Key className="h-3 w-3 text-blue-600" />;
      case 'limited': return <AlertCircle className="h-3 w-3 text-yellow-600" />;
      case 'error': return <XCircle className="h-3 w-3 text-red-600" />;
      default: return null;
    }
  };

  const filteredModels = getFilteredModels();

  return (
    <div className="h-[700px] flex flex-col">
      <Tabs defaultValue="chat" className="flex-1 flex flex-col">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="chat">AI Чат</TabsTrigger>
          <TabsTrigger value="settings">Настройки API</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="flex-1 flex flex-col min-h-0">
          <Card className="flex-1 flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-blue-600" />
                  <span>AI Помощник AICA</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Реальные AI
                  </Badge>
                </CardTitle>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleTestProviders}
                    disabled={isTestingProviders}
                    className="text-xs"
                  >
                    {isTestingProviders ? (
                      <>
                        <div className="w-3 h-3 border border-gray-300 border-t-blue-600 rounded-full animate-spin mr-1"></div>
                        Тест...
                      </>
                    ) : (
                      <>
                        <Settings className="h-3 w-3 mr-1" />
                        Тест провайдеров
                      </>
                    )}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleTestAllModels}
                    disabled={isTestingModels}
                    className="text-xs"
                  >
                    {isTestingModels ? (
                      <>
                        <div className="w-3 h-3 border border-gray-300 border-t-blue-600 rounded-full animate-spin mr-1"></div>
                        Тест...
                      </>
                    ) : (
                      <>
                        <TestTube className="h-3 w-3 mr-1" />
                        Тест моделей
                      </>
                    )}
                  </Button>
                </div>
              </div>
              
              {/* Model Selector */}
              <div className="flex items-center space-x-3 mt-3">
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4" />
                  <Select value={modelFilter} onValueChange={(value: any) => setModelFilter(value)}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все модели</SelectItem>
                      <SelectItem value="free">Бесплатные</SelectItem>
                      <SelectItem value="working">Рабочие</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Select value={selectedModel} onValueChange={setSelectedModel}>
                  <SelectTrigger className="flex-1 min-w-64">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredModels.map((model) => (
                      <SelectItem key={model.id} value={model.id}>
                        <div className="flex items-center space-x-2">
                          <span>{model.icon}</span>
                          <div className="flex-1">
                            <div className="font-medium">{model.name}</div>
                            <div className="text-xs text-gray-500 flex items-center space-x-1">
                              <span>{model.provider}</span>
                              {getProviderStatusIcon(model.provider)}
                              {model.isFree && (
                                <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                                  Бесплатно
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                {currentModel && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Zap className="h-4 w-4" />
                    <span>{currentModel.maxTokens} tokens</span>
                  </div>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col space-y-4 min-h-0">
              {/* Messages with fixed height scrollable area */}
              <div className="flex-1 min-h-0">
                <ScrollArea className="h-full pr-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-lg px-4 py-3 ${
                            message.sender === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <div className="flex items-start space-x-2">
                            {message.sender === 'ai' && (
                              <Bot className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                            )}
                            {message.sender === 'user' && (
                              <User className="h-4 w-4 mt-1 flex-shrink-0" />
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="whitespace-pre-wrap text-sm break-words">{message.content}</div>
                              <div className={`flex items-center justify-between mt-2 text-xs ${
                                message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                              }`}>
                                <span>
                                  {message.timestamp.toLocaleTimeString('ru-RU', { 
                                    hour: '2-digit', 
                                    minute: '2-digit' 
                                  })}
                                </span>
                                {message.model && (
                                  <div className="flex items-center space-x-1">
                                    <span>•</span>
                                    <span>{message.model}</span>
                                    {message.provider && (
                                      <>
                                        <span>•</span>
                                        <span>{message.provider}</span>
                                      </>
                                    )}
                                    {message.tokens && (
                                      <>
                                        <span>•</span>
                                        <span>{message.tokens} tokens</span>
                                      </>
                                    )}
                                    {message.responseTime && (
                                      <>
                                        <span>•</span>
                                        <span>{message.responseTime}мс</span>
                                      </>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg px-4 py-3 max-w-[85%]">
                          <div className="flex items-center space-x-2">
                            <Bot className="h-4 w-4 text-blue-600" />
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                            <span className="text-xs text-gray-500">
                              {currentModel?.name} думает...
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div ref={messagesEndRef} />
                </ScrollArea>
              </div>

              {/* Model Description */}
              {currentModel && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex-shrink-0">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-lg">{currentModel.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <div className="font-medium text-blue-900">{currentModel.name}</div>
                        {getProviderStatusIcon(currentModel.provider)}
                        {currentModel.isFree && (
                          <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                            Бесплатно
                          </Badge>
                        )}
                      </div>
                      <div className="text-blue-700">{currentModel.description}</div>
                      <div className="text-xs text-blue-600 mt-1">{currentModel.limitations}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Questions */}
              <div className="border-t pt-3 flex-shrink-0">
                <div className="text-sm text-gray-600 mb-2">Быстрые вопросы:</div>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs hover:bg-blue-50 hover:border-blue-300"
                    >
                      <Lightbulb className="h-3 w-3 mr-1" />
                      {question}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="flex space-x-2 flex-shrink-0">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={`Спросите ${currentModel?.name}...`}
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button 
                  onClick={handleSendMessage} 
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="flex-1">
          <APIKeysManager />
        </TabsContent>
      </Tabs>
    </div>
  );
};
