import React, { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Book, 
  FileText, 
  Video, 
  Code, 
  Download, 
  ExternalLink,
  ChevronRight,
  Lightbulb,
  Settings,
  BarChart3,
  Shield,
  Bot
} from "lucide-react";
import { Link } from 'react-router-dom';

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: "getting-started",
      title: "Начало работы",
      icon: Lightbulb,
      description: "Первые шаги с платформой AICA",
      articles: [
        { title: "Регистрация и настройка аккаунта", time: "5 мин", type: "guide" },
        { title: "Загрузка первой модели", time: "10 мин", type: "tutorial" },
        { title: "Основы интерфейса", time: "8 мин", type: "guide" },
        { title: "Настройка команды", time: "15 мин", type: "guide" }
      ]
    },
    {
      id: "explainable-ai",
      title: "Explainable AI",
      icon: BarChart3,
      description: "Объяснение и интерпретация моделей",
      articles: [
        { title: "Введение в SHAP анализ", time: "20 мин", type: "guide" },
        { title: "LIME объяснения", time: "15 мин", type: "guide" },
        { title: "Интерпретация результатов", time: "25 мин", type: "tutorial" },
        { title: "Сравнение методов объяснения", time: "18 мин", type: "guide" }
      ]
    },
    {
      id: "model-management",
      title: "Управление моделями",
      icon: Settings,
      description: "Загрузка, анализ и мониторинг моделей",
      articles: [
        { title: "Поддерживаемые форматы моделей", time: "10 мин", type: "reference" },
        { title: "Версионирование моделей", time: "12 мин", type: "guide" },
        { title: "Настройка мониторинга", time: "20 мин", type: "tutorial" },
        { title: "Алерты и уведомления", time: "15 мин", type: "guide" }
      ]
    },
    {
      id: "data-analysis",
      title: "Анализ данных",
      icon: BarChart3,
      description: "Работа с наборами данных",
      articles: [
        { title: "Загрузка и валидация данных", time: "12 мин", type: "guide" },
        { title: "Профилирование данных", time: "18 мин", type: "tutorial" },
        { title: "Визуализация данных", time: "22 мин", type: "guide" },
        { title: "Обнаружение аномалий", time: "25 мин", type: "tutorial" }
      ]
    },
    {
      id: "reports",
      title: "Отчеты и экспорт",
      icon: FileText,
      description: "Генерация и настройка отчетов",
      articles: [
        { title: "Создание автоматических отчетов", time: "15 мин", type: "guide" },
        { title: "Кастомизация отчетов", time: "20 mин", type: "tutorial" },
        { title: "Экспорт в различные форматы", time: "10 мин", type: "guide" },
        { title: "Планирование отчетов", time: "12 мин", type: "guide" }
      ]
    },
    {
      id: "security",
      title: "Безопасность и соответствие",
      icon: Shield,
      description: "Защита данных и соответствие стандартам",
      articles: [
        { title: "Политика безопасности", time: "15 мин", type: "reference" },
        { title: "GDPR соответствие", time: "20 мин", type: "guide" },
        { title: "Управление доступом", time: "18 мин", type: "tutorial" },
        { title: "Аудит и логирование", time: "12 мин", type: "guide" }
      ]
    }
  ];

  const quickStart = [
    {
      step: 1,
      title: "Создайте аккаунт",
      description: "Зарегистрируйтесь и выберите подходящий тарифный план"
    },
    {
      step: 2,
      title: "Загрузите модель",
      description: "Поддерживаются форматы: pickle, ONNX, h5, joblib"
    },
    {
      step: 3,
      title: "Запустите анализ",
      description: "Получите результаты Explainable AI за несколько минут"
    },
    {
      step: 4,
      title: "Создайте отчет",
      description: "Автоматически сгенерированный PDF с выводами"
    }
  ];

  const resources = [
    {
      title: "API Reference",
      description: "Полная документация по REST API",
      icon: Code,
      link: "/api",
      external: false
    },
    {
      title: "Python SDK",
      description: "Библиотека для интеграции с Python",
      icon: Download,
      link: "#",
      external: true
    },
    {
      title: "Видеоуроки",
      description: "Коллекция обучающих видео",
      icon: Video,
      link: "#",
      external: true
    },
    {
      title: "GitHub Examples",
      description: "Примеры кода и интеграций",
      icon: ExternalLink,
      link: "#",
      external: true
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      guide: "bg-blue-100 text-blue-800",
      tutorial: "bg-green-100 text-green-800",
      reference: "bg-purple-100 text-purple-800"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Book className="h-16 w-16 mx-auto mb-4 text-blue-200" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Документация AICA
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Полное руководство по использованию платформы AICA для аудита 
              и управления AI моделями
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Поиск в документации..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-3 text-lg bg-white text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Start */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Быстрый старт</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {quickStart.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Documentation Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Разделы документации</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <category.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.articles.map((article, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-700">{article.title}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getTypeColor(article.type)} variant="secondary">
                            {article.type}
                          </Badge>
                          <span className="text-sm text-gray-500">{article.time}</span>
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Дополнительные ресурсы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="bg-orange-100 p-3 rounded-lg mx-auto mb-4 w-fit">
                    <resource.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Button variant="outline" size="sm" className="hover:text-orange-500">
                    {resource.external ? (
                      <>
                        Открыть <ExternalLink className="h-4 w-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Перейти <ChevronRight className="h-4 w-4 ml-1" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Часто задаваемые вопросы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Какие форматы моделей поддерживаются?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AICA поддерживает основные форматы: pickle (.pkl), ONNX (.onnx), 
                  HDF5 (.h5), joblib, а также модели из популярных библиотек 
                  как scikit-learn, TensorFlow, PyTorch.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Как долго хранятся данные?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Данные хранятся согласно вашему тарифному плану. 
                  Free - 30 дней, Solo - 6 месяцев, Team - 2 года, 
                  Enterprise - настраивается индивидуально.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Можно ли интегрировать AICA с MLOps?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, у нас есть REST API и Python SDK для интеграции 
                  с MLflow, Kubeflow, Azure ML, AWS SageMaker и другими 
                  популярными MLOps платформами.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Соответствует ли AICA требованиям GDPR?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, платформа полностью соответствует GDPR, 
                  включая право на удаление данных, портируемость 
                  и прозрачность обработки персональных данных.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-blue-600 rounded-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна помощь?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Не нашли ответ на свой вопрос? Наша команда поддержки готова помочь вам 
            в любое время.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Написать в поддержку
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Заказать консультацию
            </Button>
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

export default Documentation;
