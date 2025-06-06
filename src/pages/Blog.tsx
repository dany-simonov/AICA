import React, { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight, Mail, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const articles = [
  {
    id: "1",
    title: "Введение в Explainable AI",
    excerpt: "Узнайте, как сделать модели машинного обучения более прозрачными и понятными.",
    author: "Иван Иванов",
    date: "2024-01-15",
    category: "Explainable AI",
  },
  {
    id: "2",
    title: "Кейс: Применение LIME для анализа кредитных рисков",
    excerpt: "Используем LIME для выявления факторов, влияющих на решения по кредитам.",
    author: "Петр Петров",
    date: "2024-02-01",
    category: "Кейсы",
  },
  {
    id: "3",
    title: "SHAP Values: Объяснение решений модели на уровне признаков",
    excerpt: "Глубокий анализ SHAP values и их применение для интерпретации моделей.",
    author: "Анна Смирнова",
    date: "2024-02-15",
    category: "Explainable AI",
  },
  {
    id: "4",
    title: "Как проводить аудит моделей машинного обучения",
    excerpt: "Шаги и рекомендации по проведению эффективного аудита ML моделей.",
    author: "Дмитрий Кузнецов",
    date: "2024-03-01",
    category: "Аудит моделей",
  },
  {
    id: "5",
    title: "Интеграция Explainable AI в процесс разработки",
    excerpt: "Советы по внедрению XAI в пайплайн машинного обучения.",
    author: "Елена Васильева",
    date: "2024-03-15",
    category: "Разработка",
  },
  {
    id: "6",
    title: "Новые тренды в Explainable AI на 2024 год",
    excerpt: "Обзор самых актуальных направлений и технологий в области XAI.",
    author: "Сергей Морозов",
    date: "2024-04-01",
    category: "Тренды",
  },
];

const categories = [
  { name: "Все", count: articles.length },
  { name: "Explainable AI", count: articles.filter((a) => a.category === "Explainable AI").length },
  { name: "Кейсы", count: articles.filter((a) => a.category === "Кейсы").length },
  { name: "Аудит моделей", count: articles.filter((a) => a.category === "Аудит моделей").length },
  { name: "Разработка", count: articles.filter((a) => a.category === "Разработка").length },
  { name: "Тренды", count: articles.filter((a) => a.category === "Тренды").length },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const filteredArticles = articles.filter((article) => {
    const searchRegex = new RegExp(searchTerm, "i");
    const categoryFilter = selectedCategory === "Все" || article.category === selectedCategory;
    return searchRegex.test(article.title) && categoryFilter;
  });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите email адрес",
        variant: "destructive",
      });
      return;
    }

    try {
      // Здесь должна быть логика отправки email
      // Для демонстрации просто показываем успешное сообщение
      console.log('Отправка приветственного email на:', email);
      console.log('От: aica.teams@gmail.com');
      console.log('Пароль: Dany.2007.07');
      
      setIsSubscribed(true);
      toast({
        title: "Спасибо за подписку!",
        description: "Мы отправили вам приветственное письмо. Проверьте свою почту.",
      });
      
      // Сброс формы
      setEmail("");
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при подписке. Попробуйте еще раз.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Блог AICA
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Последние новости, исследования и инсайты в области Explainable AI, машинного обучения и аудита моделей
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Поиск статей..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Categories */}
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className={`${selectedCategory === category.name ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-blue-50'}`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Subscription Section */}
        <div className="mb-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Подпишитесь на обновления блога
            </h2>
            <p className="text-orange-100 mb-6">
              Получайте новые статьи о Explainable AI, кейсы и экспертные материалы прямо на вашу почту. 
              Никакого спама — только ценный контент.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white text-gray-900"
                  required
                />
                <Button type="submit" className="bg-white text-orange-600 hover:bg-gray-100">
                  Подписаться
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-white">
                <Check className="h-5 w-5" />
                <span>Вы успешно подписались на обновления!</span>
              </div>
            )}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Bot className="h-12 w-12 text-white" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </span>
                </div>
                <CardTitle className="text-lg hover:text-orange-500 transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                  <Link to={`/article/${article.id}`}>
                    <Button variant="outline" size="sm" className="hover:bg-orange-500 hover:text-white hover:border-orange-500">
                      Читать
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Статьи не найдены. Попробуйте изменить параметры поиска.
            </p>
          </div>
        )}
      </div>

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

export default Blog;
