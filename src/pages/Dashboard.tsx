
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Bell, Bot, FileText, Monitor, Settings, Upload, Users } from "lucide-react";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { ModelsManager } from "@/components/dashboard/ModelsManager";
import DataManager from "@/components/dashboard/DataManager";
import ReportsManager from "@/components/dashboard/ReportsManager";
import MonitoringPanel from "@/components/dashboard/MonitoringPanel";
import { AIChat } from "@/components/dashboard/AIChat";
import UserSettings from "@/components/dashboard/UserSettings";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [notifications] = useState([
    { id: 1, title: "Новый анализ завершен", type: "success", time: "5 мин назад" },
    { id: 2, title: "Обнаружен drift в модели", type: "warning", time: "1 час назад" },
    { id: 3, title: "Отчет готов к скачиванию", type: "info", time: "2 часа назад" }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Bot className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-blue-900">AICA Dashboard</h1>
              </Link>
              <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-200">
                Pro Plan
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {notifications.length > 0 && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 bg-orange-500 rounded-full text-xs text-white flex items-center justify-center">
                      {notifications.length}
                    </span>
                  )}
                </Button>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                  А
                </div>
                <span className="text-sm font-medium text-gray-700">Алексей Иванов</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <Monitor className="h-4 w-4" />
              <span>Обзор</span>
            </TabsTrigger>
            <TabsTrigger value="models" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Модели</span>
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center space-x-2">
              <Upload className="h-4 w-4" />
              <span>Данные</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Отчеты</span>
            </TabsTrigger>
            <TabsTrigger value="monitoring" className="flex items-center space-x-2">
              <Monitor className="h-4 w-4" />
              <span>Мониторинг</span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center space-x-2">
              <Bot className="h-4 w-4" />
              <span>AI Чат</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Настройки</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <DashboardOverview />
          </TabsContent>
          
          <TabsContent value="models">
            <ModelsManager />
          </TabsContent>
          
          <TabsContent value="data">
            <DataManager />
          </TabsContent>
          
          <TabsContent value="reports">
            <ReportsManager />
          </TabsContent>
          
          <TabsContent value="monitoring">
            <MonitoringPanel />
          </TabsContent>
          
          <TabsContent value="chat">
            <AIChat />
          </TabsContent>
          
          <TabsContent value="settings">
            <UserSettings />
          </TabsContent>
        </Tabs>
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

export default Dashboard;
