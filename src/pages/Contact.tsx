
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle, Star } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    urgency: 'medium'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "aica.teams@gmail.com",
      detail: "Ответим в течение 24 часов",
      action: "Написать email",
      primary: true
    },
    {
      icon: MessageSquare,
      title: "Онлайн чат",
      description: "Быстрая поддержка",
      detail: "Доступен с 9:00 до 18:00 МСК",
      action: "Начать чат",
      primary: false
    },
    {
      icon: Phone,
      title: "Телефон",
      description: "+7 (495) 123-45-67",
      detail: "Пн-Пт: 9:00-18:00 МСК",
      action: "Позвонить",
      primary: false
    },
    {
      icon: MapPin,
      title: "Офис",
      description: "Москва, Россия",
      detail: "Встречи по предварительной записи",
      action: "Записаться",
      primary: false
    }
  ];

  const supportTopics = [
    "Техническая поддержка",
    "Вопросы по тарифам",
    "Интеграция и API",
    "Обучение команды",
    "Партнерство",
    "Пресс-запросы"
  ];

  const testimonials = [
    {
      name: "Елена Морозова",
      company: "TechCorp",
      text: "Команда поддержки AICA решила нашу проблему за 2 часа. Невероятно быстро!",
      rating: 5
    },
    {
      name: "Дмитрий Петров",  
      company: "DataSolutions",
      text: "Профессиональная поддержка на каждом этапе внедрения. Рекомендую!",
      rating: 5
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Наша команда экспертов готова помочь вам с любыми вопросами 
              по аудиту AI моделей и использованию платформы AICA
            </p>
            <Badge className="bg-orange-500 text-white px-4 py-2">
              Ответим в течение 24 часов
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Способы связи</h2>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className={`hover:shadow-lg transition-shadow ${method.primary ? 'border-blue-500 bg-blue-50' : 'bg-white'}`}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${method.primary ? 'bg-blue-600' : 'bg-gray-100'}`}>
                        <method.icon className={`h-6 w-6 ${method.primary ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                        <p className="text-gray-700 font-medium mb-1">{method.description}</p>
                        <p className="text-sm text-gray-600 mb-3">{method.detail}</p>
                        <Button 
                          size="sm" 
                          variant={method.primary ? "default" : "outline"}
                          className={`hover:text-orange-500 ${method.primary ? "bg-blue-600 hover:bg-blue-700 hover:text-white" : ""}`}
                        >
                          {method.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Working Hours */}
            <Card className="mt-6 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>Часы работы поддержки</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Понедельник - Пятница</span>
                    <span className="font-medium">9:00 - 18:00 МСК</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Суббота</span>
                    <span className="font-medium">10:00 - 16:00 МСК</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Воскресенье</span>
                    <span className="text-gray-500">Выходной</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  * Критические вопросы обрабатываются 24/7
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
                <CardDescription>
                  Заполните форму ниже, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Сообщение отправлено!</h3>
                    <p className="text-gray-600">Мы получили ваше сообщение и ответим в ближайшее время.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Имя *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Ваше полное имя"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Компания</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Название вашей компании"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Тема обращения *</Label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Выберите тему</option>
                        {supportTopics.map((topic, index) => (
                          <option key={index} value={topic}>{topic}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="urgency">Приоритет</Label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="low">Низкий</option>
                        <option value="medium">Средний</option>
                        <option value="high">Высокий</option>
                        <option value="urgent">Критический</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Сообщение *</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Опишите ваш вопрос или проблему подробно..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Send className="h-4 w-4 mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Часто задаваемые вопросы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg hover:text-orange-500 transition-colors">Как быстро вы отвечаете на вопросы?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мы стараемся отвечать на все запросы в течение 24 часов. Для клиентов с 
                  тарифами Team и Enterprise время ответа составляет до 4 часов в рабочее время.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg hover:text-orange-500 transition-colors">Как получить техническую поддержку?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Вы можете получить поддержку через эту форму, отправив email на aica.teams@gmail.com 
                  или через встроенный чат в личном кабинете. Мы также проводим онлайн-консультации.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg hover:text-orange-500 transition-colors">Могу ли я получить демо-версию платформы?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, мы предоставляем бесплатный 7-дневный пробный период для ознакомления 
                  со всеми возможностями платформы. Также доступна демо-сессия с нашими экспертами.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg hover:text-orange-500 transition-colors">Какие форматы моделей поддерживаются?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AICA поддерживает основные форматы ML моделей: pickle, ONNX, h5, joblib и другие. 
                  Для уточнения по конкретной модели свяжитесь с нашими специалистами.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Что говорят клиенты о нашей поддержке
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    {testimonial.text}
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mt-20 bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="h-80 bg-gray-200 flex items-center justify-center">
            <MapPin className="h-12 w-12 text-gray-400" />
            <span className="ml-2 text-lg text-gray-600">Карта будет здесь</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
