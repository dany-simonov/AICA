import React, { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bot, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    company: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Простая имитация авторизации
    if (isLogin) {
      // Проверяем email и пароль (для демо принимаем любые непустые значения)
      if (formData.email && formData.password) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', formData.email);
        navigate('/dashboard');
      } else {
        alert('Пожалуйста, заполните все поля');
      }
    } else {
      // Регистрация
      if (formData.email && formData.password && formData.confirmPassword && formData.name) {
        if (formData.password === formData.confirmPassword) {
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('userEmail', formData.email);
          localStorage.setItem('userName', formData.name);
          setShowWelcome(true);
          setTimeout(() => {
            setShowWelcome(false);
            navigate('/dashboard');
          }, 3500);
        } else {
          alert('Пароли не совпадают');
        }
      } else {
        alert('Пожалуйста, заполните все обязательные поля');
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex items-center justify-center py-16 px-4">
        <Card className="w-full max-w-md bg-white">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Bot className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-900">AICA</span>
            </div>
            <CardTitle className="text-2xl">
              {isLogin ? 'Вход в аккаунт' : 'Создание аккаунта'}
            </CardTitle>
            <CardDescription>
              {isLogin 
                ? 'Войдите в свой аккаунт AICA для доступа к платформе'
                : 'Создайте аккаунт и начните использовать AICA бесплатно'
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  <div>
                    <Label htmlFor="name">Полное имя *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required={!isLogin}
                      placeholder="Иван Иванов"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Компания</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Название компании"
                    />
                  </div>
                </>
              )}
              
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
              
              <div>
                <Label htmlFor="password">Пароль *</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              {!isLogin && (
                <div>
                  <Label htmlFor="confirmPassword">Подтверждение пароля *</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required={!isLogin}
                    placeholder="••••••••"
                  />
                </div>
              )}
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                {isLogin ? 'Войти' : 'Создать аккаунт'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
                <button
                  type="button"
                  className="ml-1 text-blue-600 hover:text-blue-700 font-medium"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Зарегистрироваться' : 'Войти'}
                </button>
              </p>
            </div>
            
            {isLogin && (
              <div className="mt-4 text-center">
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  Забыли пароль?
                </button>
              </div>
            )}
            
            {!isLogin && (
              <div className="mt-4 text-xs text-gray-500 text-center">
                Создавая аккаунт, вы соглашаетесь с нашими{' '}
                <Link to="/privacy" className="text-blue-600 hover:text-blue-700">
                  Условиями использования и Политикой конфиденциальности
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-blue-900">AICA</span>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Спасибо за регистрацию!</h2>
            <p className="text-gray-700 mb-4">Мы отправили вам приветственное письмо от <span className="font-semibold">aica.teams@gmail.com</span> на вашу почту.<br/>С уважением, команда <span className="font-semibold">AICA Teams</span>.</p>
            <div className="flex justify-center">
              <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
          </div>
        </div>
      )}
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

export default Auth;
