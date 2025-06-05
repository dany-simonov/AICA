
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronLeft, ChevronRight, MessageSquare, Send, CheckCircle } from "lucide-react";

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [newReview, setNewReview] = useState({
    name: '',
    company: '',
    position: '',
    rating: 5,
    text: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const reviews = [
    {
      name: "Алексей Морозов",
      company: "DataTech Solutions",
      position: "Chief Data Officer",
      text: "AICA значительно упростила наш процесс аудита моделей. Раньше на это уходили недели, теперь получаем результаты за часы. Хотя иногда хотелось бы больше детализации в отчетах.",
      rating: 5,
      date: "15 января 2024"
    },
    {
      name: "Мария Волкова", 
      company: "FinanceAI Corp",
      position: "ML Engineer",
      text: "Функции Explainable AI просто спасли наш проект! Выявили bias в кредитной модели, который мы не замечали месяцами. Интерфейс интуитивный, но документация могла бы быть подробнее.",
      rating: 4,
      date: "10 января 2024"
    },
    {
      name: "Дмитрий Козлов",
      company: "RetailBot",
      position: "Head of AI",
      text: "Отличная платформа для мониторинга моделей в продакшене. Автоматические алерты работают как часы. Единственное - хотелось бы больше интеграций с внешними системами.",
      rating: 4,
      date: "8 января 2024"
    },
    {
      name: "Екатерина Сидорова",
      company: "HealthAI",
      position: "Data Scientist", 
      text: "Использую AICA для аудита медицинских моделей. Качество SHAP анализа на высоте, отчеты получаются очень подробными. Правда, обработка больших моделей иногда занимает много времени.",
      rating: 4,
      date: "5 января 2024"
    },
    {
      name: "Игорь Петров",
      company: "AutoML Systems",
      position: "ML Ops Engineer",
      text: "Превосходное решение для compliance! Регуляторы наконец-то получают понятные объяснения наших решений ИИ. Хотя цена для небольших команд кусается.",
      rating: 4,
      date: "3 января 2024"
    },
    {
      name: "Анна Козлова", 
      company: "E-commerce Giant",
      position: "Head of Analytics",
      text: "AICA помогла нам повысить конверсию на 25% благодаря лучшему пониманию рекомендательной системы. Классная штука, но мобильное приложение было бы кстати.",
      rating: 5,
      date: "1 января 2024"
    },
    {
      name: "Сергей Иванов",
      company: "InsurTech Solutions", 
      position: "Senior Data Scientist",
      text: "Хороший инструмент для анализа справедливости моделей. Выявили несколько проблемных зон в страховых алгоритмах. Документация местами запутанная, но поддержка отвечает быстро.",
      rating: 4,
      date: "28 декабря 2023"
    },
    {
      name: "Ольга Васильева",
      company: "Startup ML",
      position: "CTO",
      text: "Для стартапа цена на Solo тарифе приемлемая. Функционал покрывает большинство наших потребностей. Хотелось бы видеть больше готовых шаблонов отчетов.",
      rating: 4,
      date: "25 декабря 2023"
    },
    {
      name: "Владимир Смирнов",
      company: "Manufacturing AI",
      position: "AI Research Lead", 
      text: "Использую для аудита моделей предиктивного обслуживания. Результаты помогают объяснить руководству ценность наших решений. Не хватает интеграции с промышленными системами.",
      rating: 4,
      date: "22 декабря 2023"
    },
    {
      name: "Елена Попова",
      company: "EdTech Innovation",
      position: "Data Science Manager",
      text: "Отличный инструмент для обеспечения этичности образовательных ИИ-систем. Студенты и преподаватели теперь понимают, как работают наши рекомендации. Мониторинг bias - просто находка!",
      rating: 5,
      date: "20 декабря 2023"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 3) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 3 + reviews.length) % reviews.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const renderStars = (rating: number, interactive = false, onChange?: (rating: number) => void) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={interactive && onChange ? () => onChange(star) : undefined}
          />
        ))}
      </div>
    );
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentSlide + i) % reviews.length]);
    }
    return visible;
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <MessageSquare className="h-16 w-16 mx-auto mb-4 text-blue-200" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Отзывы клиентов
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Узнайте, что думают наши пользователи о платформе AICA 
              и как она помогает им в работе с AI моделями
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                {renderStars(Math.round(averageRating))}
                <span className="text-xl font-semibold">{averageRating.toFixed(1)}</span>
              </div>
              <Badge className="bg-orange-500 text-white px-4 py-2">
                {reviews.length} отзывов
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Reviews Slider */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Что говорят наши пользователи
            </h2>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="hover:bg-blue-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline" 
                size="icon"
                onClick={nextSlide}
                className="hover:bg-blue-50"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getVisibleReviews().map((review, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    {renderStars(review.rating)}
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>
                    {review.position} в {review.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 italic">
                    {review.text}
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    Math.floor(currentSlide / 3) === index 
                      ? 'bg-blue-600' 
                      : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentSlide(index * 3)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Статистика отзывов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="bg-white text-center">
              <CardContent className="pt-8">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="text-gray-600">Средняя оценка</div>
                {renderStars(Math.round(averageRating))}
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center">
              <CardContent className="pt-8">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {reviews.filter(r => r.rating === 5).length}
                </div>
                <div className="text-gray-600">5-звездочных отзывов</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center">
              <CardContent className="pt-8">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  95%
                </div>
                <div className="text-gray-600">Довольных клиентов</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center">
              <CardContent className="pt-8">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {reviews.length}
                </div>
                <div className="text-gray-600">Всего отзывов</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Leave Review Form */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Поделитесь своим опытом
          </h2>
          
          <Card className="bg-white max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Оставить отзыв</CardTitle>
              <CardDescription>
                Ваш отзыв поможет нам стать лучше и поможет другим пользователям
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Спасибо за отзыв!</h3>
                  <p className="text-gray-600">Ваш отзыв был отправлен и будет опубликован после модерации.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        value={newReview.name}
                        onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                        required
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Компания</Label>
                      <Input
                        id="company"
                        value={newReview.company}
                        onChange={(e) => setNewReview({...newReview, company: e.target.value})}
                        placeholder="Название компании"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="position">Должность</Label>
                    <Input
                      id="position"
                      value={newReview.position}
                      onChange={(e) => setNewReview({...newReview, position: e.target.value})}
                      placeholder="Ваша должность"
                    />
                  </div>
                  
                  <div>
                    <Label>Оценка *</Label>
                    <div className="mt-2">
                      {renderStars(newReview.rating, true, (rating) => 
                        setNewReview({...newReview, rating})
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="review-text">Ваш отзыв *</Label>
                    <textarea
                      id="review-text"
                      value={newReview.text}
                      onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                      required
                      rows={4}
                      placeholder="Поделитесь вашим опытом использования AICA..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="h-4 w-4 mr-2" />
                    Отправить отзыв
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы присоединиться к довольным клиентам?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Начните использовать AICA уже сегодня и убедитесь сами в качестве нашего сервиса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
