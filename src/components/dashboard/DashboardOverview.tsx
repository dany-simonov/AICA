
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertTriangle, CheckCircle, Clock, FileText, Database, Bot, Monitor } from "lucide-react";

export const DashboardOverview = () => {
  const stats = [
    { title: "Модели", value: 8, icon: FileText, change: "+2 за неделю", color: "text-blue-600" },
    { title: "Наборы данных", value: 15, icon: Database, change: "+5 за неделю", color: "text-green-600" },
    { title: "Отчеты", value: 23, icon: FileText, change: "+7 за неделю", color: "text-purple-600" },
    { title: "Активные алерты", value: 3, icon: AlertTriangle, change: "-1 за день", color: "text-orange-600" }
  ];

  const recentActivities = [
    { id: 1, title: "Модель 'Customer_Churn_v2' проанализирована", time: "5 мин назад", status: "success" },
    { id: 2, title: "Загружен новый набор данных 'Sales_Q4'", time: "1 час назад", status: "info" },
    { id: 3, title: "Сгенерирован отчет по модели 'Fraud_Detection'", time: "2 часа назад", status: "success" },
    { id: 4, title: "Обнаружен drift в модели 'Price_Prediction'", time: "4 часа назад", status: "warning" }
  ];

  const getCurrentGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Доброе утро";
    if (hour < 18) return "Добрый день";
    return "Добрый вечер";
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <CardHeader>
          <CardTitle className="text-2xl">
            {getCurrentGreeting()}, Алексей! 👋
          </CardTitle>
          <CardDescription className="text-blue-100">
            У вас 3 новых уведомления и 2 модели готовы к анализу
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Загрузить модель
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Создать отчет
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Последняя активность</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className={`mt-1 h-2 w-2 rounded-full ${
                    activity.status === 'success' ? 'bg-green-500' :
                    activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <span>Рекомендации AI</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-900">
                  Обновите данные для модели 'Customer_Churn_v2'
                </p>
                <p className="text-xs text-blue-700 mt-1">
                  Последнее обновление было 7 дней назад
                </p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <p className="text-sm font-medium text-orange-900">
                  Настройте мониторинг для модели 'Price_Prediction'
                </p>
                <p className="text-xs text-orange-700 mt-1">
                  Обнаружены аномалии в поведении модели
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="text-sm font-medium text-green-900">
                  Отличная точность модели 'Fraud_Detection'
                </p>
                <p className="text-xs text-green-700 mt-1">
                  Модель показывает стабильные результаты
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Быстрые действия</CardTitle>
          <CardDescription>
            Часто используемые функции для ускорения работы
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <FileText className="h-6 w-6" />
              <span className="text-sm">Загрузить модель</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Database className="h-6 w-6" />
              <span className="text-sm">Добавить данные</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Monitor className="h-6 w-6" />
              <span className="text-sm">Запустить анализ</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Bot className="h-6 w-6" />
              <span className="text-sm">Задать вопрос AI</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
