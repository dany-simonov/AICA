
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, TrendingUp, Shield, Users, Lightbulb, FileText, Monitor, CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Bot,
      title: "Explainable AI",
      description: "SHAP и LIME анализ для полного понимания поведения ваших моделей",
      technologies: ["SHAP", "LIME", "Feature Importance"]
    },
    {
      icon: Shield,
      title: "AI Governance",
      description: "Комплексный аудит моделей на соответствие этическим стандартам",
      technologies: ["Bias Detection", "Fairness Metrics", "Ethics AI"]
    },
    {
      icon: Monitor,
      title: "Мониторинг в реальном времени",
      description: "Отслеживание performance и автоматические уведомления об изменениях",
      technologies: ["Model Drift", "Performance Tracking", "Alerts"]
    },
    {
      icon: FileText,
      title: "Автогенерация отчетов",
      description: "Интеллектуальное создание подробных отчетов с рекомендациями",
      technologies: ["ReportLab", "AI Reports", "PDF Generation"]
    }
  ];

  const technologies = [
    "Python", "g4f", "SHAP", "LIME", "Pandas", "NumPy", 
    "Matplotlib", "Seaborn", "ReportLab", "WeasyPrint", "SQLite"
  ];

  const principles = [
    {
      icon: Shield,
      title: "Безопасность данных",
      description: "Все данные обрабатываются с соблюдением высших стандартов безопасности"
    },
    {
      icon: CheckCircle,
      title: "Прозрачность AI",
      description: "Каждое решение модели объясняется понятным для человека способом"
    },
    {
      icon: Users,
      title: "Этичность",
      description: "Выявление и предотвращение bias и дискриминации в моделях"
    },
    {
      icon: TrendingUp,
      title: "Непрерывное улучшение",
      description: "Постоянное развитие алгоритмов и методов анализа"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              О платформе AICA
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Инновационная SaaS-платформа для автоматизированного аудита, 
              консалтинга и управления качеством AI-моделей
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Попробовать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Посмотреть демо
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша миссия</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Сделать аудит и управление AI-моделями прозрачным, быстрым и доступным 
            для компаний любого масштаба. Мы верим, что искусственный интеллект должен 
            быть понятным, этичным и безопасным.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Ключевые возможности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {feature.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {feature.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-50 text-blue-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Технологии и инструменты
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-lg py-2 px-4">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Principles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Наши принципы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <principle.icon className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Как это работает
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Загрузка модели",
                description: "Загрузите вашу ML модель в поддерживаемом формате"
              },
              {
                step: "2", 
                title: "Автоматический анализ",
                description: "AICA проводит комплексный анализ с использованием Explainable AI"
              },
              {
                step: "3",
                title: "Генерация отчета",
                description: "Получите подробный отчет с рекомендациями и объяснениями"
              },
              {
                step: "4",
                title: "Мониторинг",
                description: "Отслеживайте performance модели в реальном времени"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Команда AICA</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <p className="text-lg text-gray-600 mb-6">
                Наша команда состоит из экспертов в области Data Science, Machine Learning, 
                AI Ethics и программной инженерии. Мы объединили многолетний опыт работы 
                в ведущих технологических компаниях для создания лучшего решения для аудита AI.
              </p>
              <div className="flex justify-center">
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Узнать больше о команде
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <div className="text-center bg-blue-600 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Свяжитесь с нами для демонстрации возможностей платформы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Начать бесплатный период
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Связаться с нами
            </Button>
          </div>
          <div className="mt-6 text-blue-100">
            📧 aica.teams@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
