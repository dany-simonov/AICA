
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, Star, Mail, Phone } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      description: "Для знакомства с платформой",
      color: "border-gray-200",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      features: [
        "1 модель",
        "Базовый анализ SHAP",
        "3 отчета в месяц",
        "Основная документация",
        "Поддержка через чат-бот"
      ],
      limitations: [
        "Без мониторинга в реальном времени",
        "Без экспорта в PDF",
        "Без API доступа"
      ]
    },
    {
      name: "Solo",
      price: { monthly: 2990, yearly: 29900 },
      description: "Для индивидуальных специалистов",
      color: "border-blue-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      features: [
        "До 10 моделей",
        "Полный Explainable AI (SHAP + LIME)",
        "Неограниченные отчеты",
        "PDF экспорт",
        "Базовый мониторинг",
        "Email поддержка",
        "AI чат-бот с расширенными возможностями"
      ],
      limitations: [
        "Без командной работы",
        "Без API доступа"
      ]
    },
    {
      name: "Team",
      price: { monthly: 9990, yearly: 99900 },
      description: "Для команд и малого бизнеса",
      color: "border-orange-300",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      recommended: true,
      features: [
        "До 50 моделей",
        "Все функции Solo",
        "Командная работа (до 5 пользователей)",
        "Расширенный мониторинг",
        "API доступ",
        "Приоритетная поддержка",
        "Интеграция с BI системами",
        "Кастомные алерты"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      price: { monthly: "По запросу", yearly: "По запросу" },
      description: "Для крупных организаций",
      color: "border-purple-300",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      features: [
        "Неограниченное количество моделей",
        "Все функции Team",
        "Неограниченное количество пользователей",
        "On-premise развертывание",
        "Персональный менеджер",
        "SLA 99.9%",
        "Кастомная интеграция",
        "Обучение команды",
        "Белая маркировка"
      ],
      limitations: []
    }
  ];

  const faqs = [
    {
      question: "Можно ли сменить тариф в любое время?",
      answer: "Да, вы можете повысить или понизить тариф в любое время. При повышении доплачиваете разницу, при понижении остаток переносится на следующий период."
    },
    {
      question: "Есть ли пробный период?",
      answer: "Да, для всех платных тарифов предоставляется 14-дневный бесплатный пробный период с полным доступом к функциям."
    },
    {
      question: "Какие способы оплаты поддерживаются?",
      answer: "Принимаем банковские карты (Visa, MasterCard, МИР), банковские переводы, PayPal и криптовалюты."
    },
    {
      question: "Возможен ли возврат средств?",
      answer: "Да, мы предоставляем 30-дневную гарантию возврата средств без лишних вопросов."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Тарифы и подписки
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Выберите подходящий план для вашего проекта
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${!isYearly ? 'text-white' : 'text-blue-200'}`}>
                Помесячно
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-orange-500"
              />
              <span className={`text-lg ${isYearly ? 'text-white' : 'text-blue-200'}`}>
                Ежегодно
              </span>
              {isYearly && (
                <Badge className="bg-orange-500 hover:bg-orange-600">
                  Скидка 17%
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.color} ${plan.recommended ? 'ring-2 ring-orange-400 shadow-lg' : ''}`}>
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1">
                    <Star className="h-4 w-4 mr-1" />
                    Рекомендуем
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">
                  {plan.description}
                </CardDescription>
                <div className="pt-4">
                  {typeof plan.price.monthly === 'number' ? (
                    <>
                      <div className="text-4xl font-bold text-gray-900">
                        {isYearly ? 
                          (plan.price.yearly === 0 ? '₽0' : `₽${(plan.price.yearly / 12).toLocaleString('ru-RU', {maximumFractionDigits: 0})}`) :
                          (plan.price.monthly === 0 ? '₽0' : `₽${plan.price.monthly.toLocaleString('ru-RU')}`)
                        }
                      </div>
                      <div className="text-gray-600 text-sm">
                        {plan.price.monthly === 0 ? 'навсегда' : (isYearly ? 'в месяц при годовой оплате' : 'в месяц')}
                      </div>
                      {isYearly && plan.price.monthly > 0 && (
                        <div className="text-xs text-gray-500 mt-1">
                          ₽{plan.price.yearly.toLocaleString('ru-RU')} в год
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-2xl font-bold text-gray-900">
                      {plan.price.monthly}
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <Button className={`w-full ${plan.buttonColor} text-white`}>
                  {plan.name === 'Free' ? 'Начать бесплатно' : 
                   plan.name === 'Enterprise' ? 'Связаться с отделом продаж' : 
                   'Выбрать план'}
                </Button>
                
                <div className="space-y-2">
                  <div className="font-medium text-gray-900 text-sm">Включено:</div>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {plan.limitations.length > 0 && (
                  <div className="space-y-2 pt-2 border-t">
                    <div className="font-medium text-gray-600 text-sm">Ограничения:</div>
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="text-sm text-gray-500">
                        • {limitation}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Часто задаваемые вопросы
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Нужна помощь с выбором?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нашим отделом продаж для персональной консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="h-4 w-4 mr-2" />
              aica.teams@gmail.com
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="h-4 w-4 mr-2" />
              Заказать звонок
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>💳 Принимаем карты, банковские переводы, PayPal</p>
            <p>🔒 30-дневная гарантия возврата средств</p>
            <p>📞 Поддержка 24/7 для Enterprise клиентов</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
