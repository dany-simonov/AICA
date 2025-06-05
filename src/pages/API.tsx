
import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Shield, Globe, Clock, ArrowRight, ExternalLink, Mail } from "lucide-react";

const API = () => {
  const features = [
    {
      icon: Code,
      title: "RESTful API",
      description: "Простой и интуитивный REST API для интеграции с вашими системами"
    },
    {
      icon: Shield,
      title: "Безопасность",
      description: "OAuth 2.0, API ключи, SSL шифрование для максимальной защиты"
    },
    {
      icon: Zap,
      title: "Высокая производительность",
      description: "Быстрые ответы, асинхронная обработка, масштабируемая архитектура"
    },
    {
      icon: Globe,
      title: "Python SDK",
      description: "Готовая библиотека для Python с полной поддержкой всех функций"
    }
  ];

  const endpoints = [
    {
      method: "POST",
      path: "/api/v1/models/upload",
      description: "Загрузка ML модели для анализа"
    },
    {
      method: "GET",
      path: "/api/v1/models/{id}/analysis",
      description: "Получение результатов Explainable AI анализа"
    },
    {
      method: "POST",
      path: "/api/v1/data/upload",
      description: "Загрузка набора данных"
    },
    {
      method: "GET",
      path: "/api/v1/reports/{id}",
      description: "Скачивание сгенерированного отчета"
    },
    {
      method: "GET",
      path: "/api/v1/monitoring/metrics",
      description: "Получение метрик мониторинга модели"
    }
  ];

  const getMethodColor = (method: string) => {
    const colors = {
      GET: "bg-green-100 text-green-800",
      POST: "bg-blue-100 text-blue-800",
      PUT: "bg-yellow-100 text-yellow-800",
      DELETE: "bg-red-100 text-red-800"
    };
    return colors[method as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Code className="h-16 w-16 mx-auto mb-4 text-blue-200" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AICA API
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Интегрируйте возможности AICA в ваши системы с помощью нашего мощного API
            </p>
            <Badge className="bg-orange-500 text-white px-4 py-2">
              🚧 В активной разработке
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Development Status */}
        <div className="mb-16">
          <Card className="bg-orange-50 border-orange-200">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Clock className="h-8 w-8 text-orange-600" />
                <div>
                  <CardTitle className="text-xl text-orange-800">API в разработке</CardTitle>
                  <CardDescription className="text-orange-700">
                    Мы активно работаем над созданием мощного и гибкого API
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-orange-800 mb-4">
                Наша команда разработчиков усердно работает над созданием комплексного API, 
                который позволит интегрировать все возможности AICA в ваши существующие системы и workflow.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Q1 2024</h4>
                  <p className="text-sm text-orange-700">Базовая функциональность API</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Q2 2024</h4>
                  <p className="text-sm text-orange-700">Python SDK и документация</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Q3 2024</h4>
                  <p className="text-sm text-orange-700">Расширенные возможности</p>
                </div>
              </div>
              <Button 
                className="bg-orange-600 hover:bg-orange-700"
                onClick={() => window.location.href = 'mailto:aica.teams@gmail.com?subject=Интерес к AICA API'}
              >
                <Mail className="h-4 w-4 mr-2" />
                Получить уведомление о релизе
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Планируемые возможности API
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="bg-blue-100 p-3 rounded-lg mx-auto mb-4 w-fit">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* API Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Обзор эндпоинтов
          </h2>
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Основные эндпоинты API</CardTitle>
              <CardDescription>
                Предварительный список основных эндпоинтов, которые будут доступны в API
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <Badge className={getMethodColor(endpoint.method)} variant="secondary">
                        {endpoint.method}
                      </Badge>
                      <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">
                        {endpoint.path}
                      </code>
                    </div>
                    <span className="text-gray-600 text-sm">{endpoint.description}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Integration Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Примеры интеграции
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Python SDK</CardTitle>
                <CardDescription>Простая интеграция с Python приложениями</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-400"># Установка</div>
                  <div>pip install aica-python-sdk</div>
                  <br />
                  <div className="text-green-400"># Использование</div>
                  <div><span className="text-blue-400">from</span> aica <span className="text-blue-400">import</span> AicaClient</div>
                  <br />
                  <div>client = AicaClient(api_key=<span className="text-yellow-400">"your_key"</span>)</div>
                  <div>result = client.analyze_model(model_path)</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>REST API</CardTitle>
                <CardDescription>Прямые HTTP запросы к API</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-400"># Загрузка модели</div>
                  <div><span className="text-yellow-400">curl</span> -X POST \</div>
                  <div>&nbsp;&nbsp;-H <span className="text-yellow-400">"Authorization: Bearer YOUR_TOKEN"</span> \</div>
                  <div>&nbsp;&nbsp;-F <span className="text-yellow-400">"model=@model.pkl"</span> \</div>
                  <div>&nbsp;&nbsp;https://api.aica.ai/v1/models/upload</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Сценарии использования
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white text-center">
              <CardContent className="pt-8">
                <div className="bg-blue-100 p-4 rounded-full mx-auto mb-6 w-fit">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">MLOps Integration</h3>
                <p className="text-gray-600">
                  Интеграция с MLflow, Kubeflow, Azure ML для автоматического 
                  аудита моделей в CI/CD pipeline.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center">
              <CardContent className="pt-8">
                <div className="bg-green-100 p-4 rounded-full mx-auto mb-6 w-fit">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Compliance Automation</h3>
                <p className="text-gray-600">
                  Автоматическая генерация отчетов для регуляторов 
                  и соответствия нормативным требованиям.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center">
              <CardContent className="pt-8">
                <div className="bg-orange-100 p-4 rounded-full mx-auto mb-6 w-fit">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Custom Applications</h3>
                <p className="text-gray-600">
                  Создание собственных приложений с функциями 
                  Explainable AI и мониторинга моделей.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Early Access */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Получите ранний доступ к API</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Заинтересованы в интеграции AICA в ваши системы? Оставьте заявку на ранний 
            доступ к API и получите приоритетный доступ к бета-версии.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600"
              onClick={() => window.location.href = 'mailto:aica.teams@gmail.com?subject=Заявка на ранний доступ к API'}
            >
              <Mail className="h-5 w-5 mr-2" />
              Запросить ранний доступ
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <ExternalLink className="h-5 w-5 mr-2" />
              Подписаться на обновления
            </Button>
          </div>
          <p className="text-blue-200 mt-4">
            Или напишите нам на aica.teams@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default API;
