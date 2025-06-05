
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User, Lightbulb, FileText, TrendingUp } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'text' | 'suggestion' | 'analysis';
}

export const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Привет! Я ваш AI-помощник AICA. Могу помочь с анализом моделей, объяснением результатов и рекомендациями по улучшению. О чём хотите поговорить?',
      sender: 'ai',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "Объясни результаты последнего анализа",
    "Как улучшить точность модели?",
    "Что означает SHAP анализ?",
    "Покажи рекомендации по данным"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = (userMessage: string): string => {
    // Симуляция ответов AI на основе ключевых слов
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('shap') || lowerMessage.includes('объясни')) {
      return `SHAP (SHapley Additive exPlanations) - это метод объяснения предсказаний моделей машинного обучения. Он показывает, насколько каждый признак влияет на конкретное предсказание.

Основные преимущества:
• Математически обоснованный подход
• Работает с любыми моделями
• Позволяет понять важность признаков

Для вашей модели Customer_Churn_v2 наиболее важными признаками оказались:
1. Время использования сервиса (влияние: +0.3)
2. Количество обращений в поддержку (влияние: +0.25)
3. Средний чек (влияние: -0.2)`;
    }
    
    if (lowerMessage.includes('точность') || lowerMessage.includes('улучшить')) {
      return `Для улучшения точности модели рекомендую:

🔍 **Анализ данных:**
• Проверьте качество данных - удалите выбросы и дубликаты
• Добавьте новые релевантные признаки
• Увеличьте объем обучающей выборки

⚙️ **Настройка модели:**
• Попробуйте другие алгоритмы (Random Forest, XGBoost)
• Оптимизируйте гиперпараметры
• Используйте кросс-валидацию

📊 **Мониторинг:**
• Настройте отслеживание drift
• Регулярно переобучайте модель
• Следите за метриками в реальном времени`;
    }
    
    if (lowerMessage.includes('данны') || lowerMessage.includes('рекомендаци')) {
      return `На основе анализа ваших данных даю следующие рекомендации:

📈 **Качество данных:**
• В наборе Sales_Q4 обнаружено 3% пропусков - рекомендую заполнить медианными значениями
• Найдены 15 дубликатов в Customer_Data - удалите их

🎯 **Новые признаки:**
• Добавьте сезонные признаки для модели Price_Prediction
• Создайте агрегированные признаки по времени
• Рассмотрите внешние данные (праздники, погода)

⚠️ **Предупреждения:**
• Модель Fraud_Detection показывает признаки переобучения
• Рекомендую увеличить regularization`;
    }
    
    return `Понял ваш вопрос! Могу помочь с:

🤖 **Анализом моделей** - объяснение результатов, интерпретация метрик
📊 **Работой с данными** - очистка, подготовка, визуализация  
📋 **Генерацией отчетов** - автоматические выводы и рекомендации
🔍 **Мониторингом** - настройка алертов, отслеживание performance

Уточните, что именно вас интересует, и я дам подробный ответ!`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Симуляция задержки API
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: simulateAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date(),
        type: 'text'
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
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

  return (
    <div className="h-[600px] flex flex-col">
      <Card className="flex-1 flex flex-col">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-blue-600" />
            <span>AI Помощник AICA</span>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              Онлайн
            </Badge>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col space-y-4">
          {/* Messages */}
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === 'ai' && (
                        <Bot className="h-4 w-4 mt-1 text-blue-600" />
                      )}
                      {message.sender === 'user' && (
                        <User className="h-4 w-4 mt-1" />
                      )}
                      <div className="flex-1">
                        <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                        <div className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString('ru-RU', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4 text-blue-600" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>

          {/* Quick Questions */}
          <div className="border-t pt-3">
            <div className="text-sm text-gray-600 mb-2">Быстрые вопросы:</div>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickQuestion(question)}
                  className="text-xs"
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Задайте вопрос AI помощнику..."
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
    </div>
  );
};
