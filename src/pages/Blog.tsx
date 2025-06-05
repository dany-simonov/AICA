import React, { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight, Filter, BookOpen, TrendingUp, Bot, MessageSquare } from "lucide-react";
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "Все статьи", count: 24 },
    { id: "explainable-ai", name: "Explainable AI", count: 8 },
    { id: "case-studies", name: "Кейсы", count: 6 },
    { id: "industry-news", name: "Новости индустрии", count: 5 },
    { id: "tutorials", name: "Руководства", count: 5 }
  ];

  const articles = [
    {
      id: 1,
      title: "Как SHAP анализ помог банку выявить bias в кредитной модели",
      excerpt: "Реальный кейс использования AICA для обнаружения дискриминации в модели кредитного скоринга одного из ведущих российских банков.",
      category: "case-studies",
      author: "Алексей Морозов",
      date: "2024-01-15",
      readTime: "8 мин",
      image: "/api/placeholder/400/240",
      featured: true
    },
    {
      id: 2,
      title: "LIME vs SHAP: сравнение методов объяснения AI моделей",
      excerpt: "Подробное сравнение двух основных подходов к Explainable AI с практическими примерами применения.",
      category: "explainable-ai",
      author: "Мария Волкова",
      date: "2024-01-12",
      readTime: "12 мин",
      image: "/api/placeholder/400/240",
      featured: false
    },
    {
      id: 3,
      title: "Новые требования ЕС к AI: как подготовиться к EU AI Act",
      excerpt: "Анализ новых европейских требований к искусственному интеллекту и их влияние на российские компании.",
      category: "industry-news",
      author: "Дмитрий Козлов",
      date: "2024-01-10",
      readTime: "15 мин",
      image: "/api/placeholder/400/240",
      featured: false
    },
    {
      id: 4,
      title: "Пошаговое руководство по аудиту ML модели с помощью AICA",
      excerpt: "Детальная инструкция по проведению полного аудита машинного обучения модели от загрузки до получения отчета.",
      category: "tutorials",
      author: "Елена Сидорова",
      date: "2024-01-08",
      readTime: "20 мин",
      image: "/api/placeholder/400/240",
      featured: false
    },
    {
      id: 5,
      title: "Model Drift: как обнаружить деградацию модели вовремя",
      excerpt: "Практические советы по мониторингу качества ML моделей и настройке автоматических уведомлений.",
      category: "explainable-ai",
      author: "Игорь Петров",
      date: "2024-01-05",
      readTime: "10 мин",
      image: "/api/placeholder/400/240",
      featured: false
    },
    {
      id: 6,
      title: "Как e-commerce гигант увеличил конверсию на 25% благодаря Explainable AI",
      excerpt: "История успеха крупного интернет-магазина, который использовал AICA для оптимизации рекомендательной системы.",
      category: "case-studies",
      author: "Анна Козлова",
      date: "2024-01-03",
      readTime: "14 мин",
      image: "/api/placeholder/400/240",
      featured: true
    }
  ];

  const filteredArticles = selectedCategory === "all" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = articles.filter(article => article.featured);

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  const getCategoryColor = (categoryId: string) => {
    const colors = {
      "explainable-ai": "bg-blue-100 text-blue-800",
      "case-studies": "bg-green-100 text-green-800",
      "industry-news": "bg-orange-100 text-orange-800",
      "tutorials": "bg-purple-100 text-purple-800"
    };
    return colors[categoryId as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Здесь будет логика поиска
    console.log("Поиск:", searchQuery);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Блог AICA
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Экспертные статьи, кейсы и новости о мире Explainable AI, 
              аудите моделей и этичном искусственном интеллекте
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <form onSubmit={handleSearch}>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Поиск статей..." 
                  className="pl-10 bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
            <Button variant="outline" className="bg-white">
              <Filter className="h-4 w-4 mr-2" />
              Фильтры
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-blue-600 hover:bg-blue-700" : "bg-white hover:text-orange-500"}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Articles */}
        {selectedCategory === "all" && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Рекомендуемые статьи</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow bg-white overflow-hidden">
                  <div className="h-48 bg-gray-200 relative">
                    <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                      Рекомендуем
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className={getCategoryColor(article.category)}>
                        {getCategoryName(article.category)}
                      </Badge>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 hover:text-orange-500 transition-colors">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                        <Calendar className="h-4 w-4 ml-2" />
                        <span>{article.date}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="hover:text-orange-500">
                        Читать
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {selectedCategory === "all" ? "Все статьи" : getCategoryName(selectedCategory)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow bg-white overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className={getCategoryColor(article.category)}>
                      {getCategoryName(article.category)}
                    </Badge>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 hover:text-orange-500 transition-colors">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 hover:text-orange-500">
                    Читать статью
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="bg-white hover:text-orange-500">
            Загрузить еще статьи
          </Button>
        </div>

        {/* AI Chat Bot */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 text-blue-200" />
            <h3 className="text-2xl font-bold mb-4">
              Задайте вопрос нашему AI-боту
            </h3>
            <p className="text-blue-100 mb-8">
              Не можете найти нужную информацию? Наш AI-помощник готов ответить на ваши вопросы
              по Explainable AI, аудиту моделей и другим темам.
            </p>
            <div className="relative">
              <Input 
                placeholder="Задайте вопрос нашему AI-боту..."
                className="bg-white text-gray-900 pr-32"
              />
              <Button className="absolute right-1 top-1 bg-orange-500 hover:bg-orange-600">
                Спросить <Bot className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter Subscribe */}
        <div className="mt-20 bg-blue-600 rounded-lg p-12 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-blue-200" />
            <h3 className="text-2xl font-bold mb-4">
              Подпишитесь на обновления блога
            </h3>
            <p className="text-blue-100 mb-8">
              Получайте новые статьи о Explainable AI, кейсы и экспертные материалы 
              прямо на вашу почту. Никакого спама — только ценный контент.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Ваш email"
                className="bg-white text-gray-900"
              />
              <Button className="bg-orange-500 hover:bg-orange-600">
                Подписаться
              </Button>
            </div>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Популярные темы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardContent className="pt-6">
                <Bot className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold mb-2">Explainable AI</h4>
                <p className="text-sm text-gray-600">Методы объяснения решений ИИ</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h4 className="font-semibold mb-2">Model Monitoring</h4>
                <p className="text-sm text-gray-600">Мониторинг качества моделей</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardContent className="pt-6">
                <User className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h4 className="font-semibold mb-2">AI Ethics</h4>
                <p className="text-sm text-gray-600">Этические аспекты ИИ</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                <h4 className="font-semibold mb-2">Case Studies</h4>
                <p className="text-sm text-gray-600">Реальные истории успеха</p>
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

export default Blog;
