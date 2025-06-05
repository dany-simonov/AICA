
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
          navigate('/dashboard');
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
    </div>
  );
};

export default Auth;
