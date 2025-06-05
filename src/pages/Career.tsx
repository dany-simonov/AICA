import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Zap, Globe, Mail, ArrowRight, Bot } from "lucide-react";
import { Link } from 'react-router-dom';

const Career = () => {
  const values = [
    {
      icon: Heart,
      title: "Открытость и поддержка",
      description: "Мы ценим каждого участника команды и создаем атмосферу взаимного уважения"
    },
    {
      icon: Zap,
      title: "Инновации и рост",
      description: "Постоянное развитие технологий и личностный рост каждого сотрудника"
    },
    {
      icon: Globe,
      title: "Удаленная работа",
      description: "Гибкий график и возможность работать из любой точки мира"
    },
    {
      icon: Users,
      title: "Маленькая команда",
      description: "Каждый голос важен, прямое влияние на продукт и стратегию компании"
    }
  ];

  const benefits = [
    "Конкурентная заработная плата",
    "Гибкий график работы",
    "Полностью удаленная работа",
    "Обучение и конференции за счет компании",
    "Современное оборудование",
    "Медицинская страховка",
    "Опционы компании",
    "Неформальная атмосфера"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Присоединяйтесь к команде AICA
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Мы создаем будущее прозрачного ИИ и ищем талантливых людей, 
              готовых изменить мир технологий вместе с нами
            </p>
            <Badge className="bg-orange-500 text-white px-4 py-2">
              🚀 Растущая команда • Удаленная работа • Инновации
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Us */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            О нашей команде
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            AICA — это небольшая, но амбициозная команда экспертов в области Data Science, 
            Machine Learning и AI Ethics. Мы верим в силу прозрачного искусственного интеллекта 
            и работаем над тем, чтобы сделать AI понятным и подотчетным для всех.
          </p>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="bg-blue-100 p-3 rounded-lg mx-auto mb-4 w-fit">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Join Us */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Почему стоит присоединиться к AICA?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Zap className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Влияние на продукт</h3>
                    <p className="text-gray-600">Каждый участник команды напрямую влияет на развитие продукта и принятие стратегических решений.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Маленькая команда</h3>
                    <p className="text-gray-600">Работа в небольшой команде означает больше ответственности, быстрые решения и тесное сотрудничество.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Globe className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Современные технологии</h3>
                    <p className="text-gray-600">Работайте с передовыми технологиями в области AI, ML и Data Science.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Что мы предлагаем</CardTitle>
                <CardDescription>Условия работы в AICA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-green-100 p-1 rounded-full">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Current Openings */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Мы растем и ищем новых участников команды
          </h2>
          
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Открыты для талантов
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Хотя у нас сейчас нет открытых вакансий, мы всегда готовы рассмотреть 
              кандидатуры талантливых специалистов, которые разделяют наши ценности 
              и хотят развивать AI в правильном направлении.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Data Scientists</h4>
                <p className="text-gray-600">Эксперты по ML и AI интерпретируемости</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Backend Developers</h4>
                <p className="text-gray-600">Python, ML/AI платформы, масштабируемость</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Frontend Developers</h4>
                <p className="text-gray-600">React, TypeScript, современный UI/UX</p>
              </div>
            </div>
          </div>
        </div>

        {/* Apply */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы присоединиться?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Отправьте нам свое резюме и расскажите, почему вы хотите работать в AICA. 
            Мы рассмотрим каждую заявку и обязательно ответим.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600"
              onClick={() => window.location.href = 'mailto:aica.teams@gmail.com?subject=Заявка на работу в AICA'}
            >
              <Mail className="h-5 w-5 mr-2" />
              Отправить резюме
            </Button>
            <div className="text-blue-100">
              aica.teams@gmail.com
            </div>
          </div>
        </div>

        {/* Culture */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Наша культура
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white text-center">
              <CardContent className="pt-8">
                <div className="bg-orange-100 p-4 rounded-full mx-auto mb-6 w-fit">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Забота о команде</h3>
                <p className="text-gray-600">
                  Мы создаем среду, где каждый чувствует себя комфортно, 
                  может расти профессионально и развиваться как личность.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center">
              <CardContent className="pt-8">
                <div className="bg-blue-100 p-4 rounded-full mx-auto mb-6 w-fit">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Быстрые решения</h3>
                <p className="text-gray-600">
                  Маленькая команда = быстрые решения, минимум бюрократии, 
                  максимум эффективности и творческого подхода.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center">
              <CardContent className="pt-8">
                <div className="bg-green-100 p-4 rounded-full mx-auto mb-6 w-fit">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Глобальное мышление</h3>
                <p className="text-gray-600">
                  Мы создаем продукт для мирового рынка и думаем о том, 
                  как сделать AI лучше для всего человечества.
                </p>
              </CardContent>
            </Card>
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

export default Career;
