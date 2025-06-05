import React from 'react';
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Bot className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-900">AICA</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/about" 
              className={`transition-colors hover:text-orange-500 ${isActive('/about') ? 'text-orange-500' : 'text-gray-700'}`}
            >
              О нас
            </Link>
            <Link 
              to="/how-it-works" 
              className={`transition-colors hover:text-orange-500 ${isActive('/how-it-works') ? 'text-orange-500' : 'text-gray-700'}`}
            >
              Как работает
            </Link>
            <Link 
              to="/pricing" 
              className={`transition-colors hover:text-orange-500 ${isActive('/pricing') ? 'text-orange-500' : 'text-gray-700'}`}
            >
              Тарифы
            </Link>
            <Link 
              to="/blog" 
              className={`transition-colors hover:text-orange-500 ${isActive('/blog') ? 'text-orange-500' : 'text-gray-700'}`}
            >
              Блог
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors hover:text-orange-500 ${isActive('/contact') ? 'text-orange-500' : 'text-gray-700'}`}
            >
              Контакты
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="outline" className="hover:text-orange-500">Войти</Button>
            </Link>
            <Link to="/dashboard">
              <Button className="bg-orange-500 hover:bg-orange-600">Аккаунт</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
