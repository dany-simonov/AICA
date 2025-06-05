import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Shield, BarChart3, FileText, Users, Zap, TrendingUp, Database, Cpu, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const technologies = [
    {
      icon: Code2,
      title: "Python & AI/ML",
      description: "SHAP, LIME, Pandas, NumPy, Scikit-learn для анализа и объяснения моделей"
    },
    {
      icon: BarChart3,
      title: "Визуализация данных",
      description: "Matplotlib, Seaborn, Plotly для создания интерактивных графиков и отчетов"
    },
    {
      icon: Database,
      title: "Обработка данных",
      description: "Apache Spark, PostgreSQL, Redis для работы с большими объемами данных"
    },
    {
      icon: Bot,
      title: "AI Интеграции",
      description: "g4f, OpenAI API, Hugging Face для создания интеллектуальных решений"
    },
    {
      icon: Shield,
      title: "Безопасность",
      description: "Шифрование данных, OAuth 2.0, GDPR compliance для защиты информации"
    },
    {
      icon: Cpu,
      title: "Инфраструктура",
      description: "Docker, Kubernetes, AWS/Azure для масштабируемых решений"
    }
  ];

  const team = [
    {
      name: "Команда экспертов",
      role: "Data Scientists & ML Engineers",
      description: "Специалисты с опытом работы в ведущих IT-компаниях, исследователи в области Explainable AI"
    },
    {
      name: "Исследователи",
      role: "AI Ethics & Governance",
      description: "Эксперты по этике ИИ и соответствию нормативным требованиям"
    },
    {
      name: "Разработчики",
      role: "Full-stack & DevOps",
      description: "Команда разработки, создающая современные и надежные решения"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              О платформе AICA
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Мы создаем будущее прозрачного и этичного искусственного интеллекта, 
              делая AI модели понятными и подотчетными
            </p>
            <Badge className="bg-orange-500 text-white px-4 py-2">
              AI Transparency • Ethics • Innovation
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Наша миссия
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            AICA революционизирует подход к аудиту и управлению AI моделями, предоставляя компаниям 
            инструменты для создания прозрачного, этичного и надежного искусственного интеллекта. 
            Мы верим, что каждое решение ИИ должно быть объяснимо и подотчетно.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Что мы решаем
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>AI Ethics & Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Обеспечиваем соответствие AI моделей этическим стандартам и нормативным требованиям
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <Bot className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Explainable AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Делаем "черные ящики" ИИ прозрачными с помощью SHAP, LIME и других методов объяснения
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Мониторинг качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Непрерывное отслеживание производительности моделей и автоматическое обнаружение дрифта
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Автоматизация отчетности</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Генерация подробных отчетов для регуляторов, stakeholders и внутренних команд
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Быстрая интеграция</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Простое подключение к существующим ML pipeline и инфраструктуре
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Масштабируемость</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Решение растет вместе с вашей компанией — от стартапа до корпорации
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Технологии и инструменты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <tech.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{tech.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Наша команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-blue-600 rounded-lg p-12 text-white text-center mb-20">
          <h2 className="text-3xl font-bold mb-8">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Прозрачность</h3>
              <p className="text-blue-100">
                Каждое решение AI должно быть понятным и объяснимым
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Этичность</h3>
              <p className="text-blue-100">
                Ответственное развитие ИИ с учетом социальных последствий
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Инновации</h3>
              <p className="text-blue-100">
                Постоянное развитие технологий для лучшего будущего
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Присоединяйтесь к революции прозрачного ИИ
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Начните использовать AICA уже сегодня и сделайте ваши AI модели более надежными и понятными
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Попробовать бесплатно
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Связаться с нами
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

export default About;
