import React, { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Shield, BarChart3, FileText, CheckCircle, Star, ArrowRight, Users, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const features = [
    {
      icon: Bot,
      title: "Explainable AI",
      description: "SHAP и LIME анализ для полного понимания поведения моделей"
    },
    {
      icon: Shield,
      title: "AI Governance",
      description: "Комплексный аудит на соответствие этическим стандартам"
    },
    {
      icon: BarChart3,
      title: "Мониторинг в реальном времени",
      description: "Отслеживание производительности и автоматические уведомления"
    },
    {
      icon: FileText,
      title: "Автогенерация отчетов",
      description: "Интеллектуальное создание подробных отчетов с рекомендациями"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Регистрация",
      description: "Создайте аккаунт и выберите подходящий тариф"
    },
    {
      number: "2",
      title: "Загрузка модели",
      description: "Загрузите вашу ML модель в поддерживаемом формате"
    },
    {
      number: "3",
      title: "Автоматический анализ",
      description: "AICA проводит комплексный анализ с Explainable AI"
    },
    {
      number: "4",
      title: "Получение результатов",
      description: "Получите отчеты с рекомендациями и мониторинг"
    }
  ];

  const testimonials = [
    {
      name: "Алексей Морозов",
      company: "DataTech Solutions",
      position: "Chief Data Officer",
      text: "AICA революционизировала наш подход к аудиту моделей. Теперь мы можем объяснить каждое решение ИИ нашим регуляторам.",
      rating: 5
    },
    {
      name: "Мария Волкова",
      company: "FinanceAI Corp",
      position: "ML Engineer",
      text: "Explainable AI функции AICA помогли нам выявить bias в кредитной модели. Сэкономили месяцы работы!",
      rating: 5
    },
    {
      name: "Дмитрий Козлов",
      company: "RetailBot",
      position: "Head of AI",
      text: "Мониторинг в реальном времени и автоматические отчеты - это exactly то, что нам было нужно для scaling наших ML операций.",
      rating: 5
    }
  ];

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-orange-500 text-white mb-6 px-4 py-2">
              🚀 Новое поколение AI аудита
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Прозрачный аудит<br />
              <span className="text-orange-400">ваших AI моделей</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Автоматизированный аудит, консалтинг и управление качеством AI-моделей 
              с помощью Explainable AI, мониторинга и интеллектуальных отчетов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/auth">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Попробовать бесплатно
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">100+</div>
                <div className="text-blue-100">Проанализированных моделей</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">91%</div>
                <div className="text-blue-100">Точность модели</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-blue-100">Мониторинг моделей</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ключевые возможности AICA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный набор инструментов для аудита, объяснения и мониторинга ваших AI моделей
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Простой процесс от загрузки модели до получения подробных отчетов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/auth">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Начать сейчас
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Что говорят наши клиенты
            </h2>
            <Link to="/reviews">
              <Button variant="outline" className="hover:text-orange-500">
                Смотреть все отзывы
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы сделать ваш ИИ прозрачным?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к компаниям, которые уже используют AICA для аудита своих AI моделей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Начать бесплатный период
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Подпишитесь на новости AICA
            </h3>
            <p className="text-gray-300 mb-8">
              Получайте последние обновления и советы по аудиту AI моделей
            </p>
            <form className="max-w-md mx-auto flex gap-4" onSubmit={e => {
              e.preventDefault();
              if (newsletterEmail) {
                setNewsletterSuccess(true);
                setNewsletterEmail('');
                setTimeout(() => setNewsletterSuccess(false), 3500);
              }
            }}>
              <Input 
                type="email" 
                placeholder="Ваш email"
                className="bg-white"
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                required
              />
              <Button className="bg-orange-500 hover:bg-orange-600">
                Подписаться
              </Button>
            </form>
          </div>
        </div>
        {newsletterSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center animate-fade-in">
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-900">AICA</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900">Спасибо, что подписались!</h2>
              <p className="text-gray-700 mb-4">Мы будем писать только по делу.<br/>Нам очень приятно.<br/><span className="font-semibold">— AICA Teams</span></p>
              <div className="flex justify-center">
                <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
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

export default Landing;
