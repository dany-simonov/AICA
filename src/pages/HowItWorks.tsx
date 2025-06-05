import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Upload, Bot, FileText, BarChart3, ArrowRight, Clock, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Header from '@/components/Header';

const HowItWorks = () => {
  const detailedSteps = [
    {
      id: 1,
      title: "Регистрация и настройка",
      description: "Создайте аккаунт и настройте рабочее пространство",
      icon: Users,
      duration: "2 минуты",
      details: [
        "Быстрая регистрация через email",
        "Выбор подходящего тарифного плана",
        "Настройка профиля компании",
        "Приглашение участников команды"
      ],
      tips: "Совет: Начните с бесплатного плана для ознакомления с возможностями платформы"
    },
    {
      id: 2,
      title: "Загрузка модели и данных",
      description: "Загрузите ML модель и тестовые данные для анализа",
      icon: Upload,
      duration: "5 минут",
      details: [
        "Поддержка форматов: pickle, ONNX, h5, joblib",
        "Загрузка тестовых данных в CSV/Excel",
        "Автоматическая валидация совместимости",
        "Предварительный просмотр структуры данных"
      ],
      tips: "Совет: Убедитесь, что тестовые данные представляют реальные сценарии использования"
    },
    {
      id: 3,
      title: "Запуск анализа Explainable AI",
      description: "Автоматический анализ модели с помощью SHAP и LIME",
      icon: Bot,
      duration: "10-30 минут",
      details: [
        "Анализ важности признаков (SHAP)",
        "Локальная интерпретация предсказаний (LIME)",
        "Обнаружение bias и дискриминации",
        "Анализ качества данных и drift",
        "Проверка этических аспектов модели"
      ],
      tips: "Совет: Время анализа зависит от размера модели и количества данных"
    },
    {
      id: 4,
      title: "Получение отчетов",
      description: "Генерация подробных отчетов с рекомендациями",
      icon: FileText,
      duration: "5 минут",
      details: [
        "Автоматическая генерация PDF отчетов",
        "Интерактивные визуализации",
        "Текстовые объяснения от AI",
        "Рекомендации по улучшению модели",
        "Экспорт данных для дальнейшего анализа"
      ],
      tips: "Совет: Отчеты можно настроить под требования вашей компании"
    },
    {
      id: 5,
      title: "Мониторинг и улучшения",
      description: "Непрерывный мониторинг производительности модели",
      icon: BarChart3,
      duration: "Постоянно",
      details: [
        "Мониторинг метрик в реальном времени",
        "Автоматические уведомления о проблемах",
        "Tracking drift и деградации модели",
        "Планирование переобучения",
        "Интеграция с MLOps пайплайнами"
      ],
      tips: "Совет: Настройте пороги для важных метрик, чтобы получать своевременные уведомления"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Экономия времени",
      description: "Автоматизация процессов аудита экономит до 80% времени специалистов"
    },
    {
      icon: Shield,
      title: "Соответствие стандартам",
      description: "Соблюдение требований GDPR, этических принципов AI и внутренних политик"
    },
    {
      icon: CheckCircle,
      title: "Повышение качества",
      description: "Выявление и устранение bias, улучшение точности и надежности моделей"
    }
  ];

  const useCases = [
    {
      title: "Банки и финтех",
      description: "Аудит кредитных скоринговых моделей, обнаружение дискриминации, соответствие регуляторным требованиям",
      metrics: ["95% точность детекции bias", "60% сокращение времени аудита"]
    },
    {
      title: "E-commerce",
      description: "Объяснение рекомендательных систем, анализ ценовых моделей, оптимизация конверсии",
      metrics: ["40% рост доверия клиентов", "25% улучшение метрик"]
    },
    {
      title: "Страхование",
      description: "Аудит андеррайтинговых моделей, анализ рисков, соответствие этическим принципам",
      metrics: ["100% соответствие GDPR", "30% снижение жалоб"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Progress Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Весь процесс занимает менее часа
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">Общий прогресс</span>
              <span className="text-sm font-medium text-blue-600">5 шагов</span>
            </div>
            <Progress value={20} className="h-2" />
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>Начало</span>
              <span>Завершение</span>
            </div>
          </div>
        </div>

        {/* Detailed Steps */}
        <div className="space-y-12">
          {detailedSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {index < detailedSteps.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gray-200 -z-10"></div>
              )}
              
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge className="bg-blue-100 text-blue-800">Шаг {step.id}</Badge>
                        <Badge variant="outline" className="text-gray-600">
                          <Clock className="h-3 w-3 mr-1" />
                          {step.duration}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl text-gray-900">{step.title}</CardTitle>
                      <CardDescription className="text-lg text-gray-600 mt-2">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Что происходит:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">💡 Полезный совет</h4>
                      <p className="text-orange-800">{step.tips}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Преимущества использования AICA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Примеры использования
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white text-center">
              <CardContent className="pt-8">
                <div className="bg-orange-100 p-4 rounded-full mx-auto mb-6 w-fit">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Банки и финтех</h3>
                <p className="text-gray-600 mb-4">
                  Аудит кредитных скоринговых моделей, обнаружение дискриминации, соответствие регуляторным требованиям
                </p>
                <div className="flex flex-col gap-2 text-sm text-gray-500">
                  <span>85% точность детекции bias</span>
                  <span>40% сокращение времени аудита</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white text-center">
              <CardContent className="pt-8">
                <div className="bg-blue-100 p-4 rounded-full mx-auto mb-6 w-fit">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">E-commerce</h3>
                <p className="text-gray-600 mb-4">
                  Объяснение рекомендательных систем, анализ ценовых моделей, оптимизация конверсии
                </p>
                <div className="flex flex-col gap-2 text-sm text-gray-500">
                  <span>20% рост доверия клиентов</span>
                  <span>10% улучшение метрик</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white text-center">
              <CardContent className="pt-8">
                <div className="bg-green-100 p-4 rounded-full mx-auto mb-6 w-fit">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Страхование</h3>
                <p className="text-gray-600 mb-4">
                  Аудит андеррайтинговых моделей, анализ рисков, соответствие этическим принципам
                </p>
                <div className="flex flex-col gap-2 text-sm text-gray-500">
                  <span>100% соответствие GDPR</span>
                  <span>10% снижение жалоб</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-white text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">Готовы попробовать AICA?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Начните аудит ваших AI моделей прямо сейчас. Первые 7 дней — бесплатно, без обязательств.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Начать бесплатный период
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" variant="outline">
                Связаться с экспертом
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">AICA</span>
              </div>
              <p className="text-gray-300">
                Инновационная платформа для аудита и управления AI моделями
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-orange-500 transition-colors">О нас</Link></li>
                <li><Link to="/pricing" className="hover:text-orange-500 transition-colors">Тарифы</Link></li>
                <li><Link to="/documentation" className="hover:text-orange-500 transition-colors">Документация</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-orange-500 transition-colors">О нас</Link></li>
                <li><Link to="/blog" className="hover:text-orange-500 transition-colors">Блог</Link></li>
                <li><Link to="/career" className="hover:text-orange-500 transition-colors">Карьера</Link></li>
                <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-orange-500 transition-colors">📧 aica.teams@gmail.com</li>
                <li className="hover:text-orange-500 transition-colors">📍 Москва, Россия</li>
                <li><Link to="/privacy" className="hover:text-orange-500 transition-colors">Политика конфиденциальности</Link></li>
                <li><Link to="/privacy" className="hover:text-orange-500 transition-colors">Условия использования</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AICA. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;
