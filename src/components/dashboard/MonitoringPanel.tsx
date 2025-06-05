
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { AlertTriangle, CheckCircle, TrendingUp, TrendingDown, Activity, Settings, Bell, BarChart3 } from "lucide-react";

const MonitoringPanel = () => {
  const [alerts] = useState([
    {
      id: 1,
      type: "warning",
      title: "Model Drift обнаружен",
      model: "Модель продаж v2.1",
      message: "Производительность модели снизилась на 5.2% за последнюю неделю",
      timestamp: "2024-01-15 14:30",
      severity: "medium"
    },
    {
      id: 2,
      type: "error",
      title: "Критическое снижение точности",
      model: "Модель кредитного скоринга",
      message: "Точность модели упала ниже установленного порога 85%",
      timestamp: "2024-01-15 12:15",
      severity: "high"
    },
    {
      id: 3,
      type: "info",
      title: "Обновление данных",
      model: "Клиентская база",
      message: "Загружена новая порция данных для переобучения",
      timestamp: "2024-01-15 10:00",
      severity: "low"
    }
  ]);

  const [models] = useState([
    {
      id: 1,
      name: "Модель продаж v2.1",
      status: "active",
      accuracy: 87.5,
      trend: "down",
      lastUpdate: "2024-01-15",
      alertsCount: 2
    },
    {
      id: 2,
      name: "Модель кредитного скоринга",
      status: "warning",
      accuracy: 82.1,
      trend: "down",
      lastUpdate: "2024-01-14",
      alertsCount: 3
    },
    {
      id: 3,
      name: "Модель рекомендаций",
      status: "active",
      accuracy: 91.2,
      trend: "up",
      lastUpdate: "2024-01-15",
      alertsCount: 0
    }
  ]);

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-orange-600" />;
      case 'info':
        return <CheckCircle className="h-5 w-5 text-blue-600" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-600" />;
    }
  };

  const getAlertBadge = (severity: string) => {
    switch (severity) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800">Критический</Badge>;
      case 'medium':
        return <Badge className="bg-orange-100 text-orange-800">Важный</Badge>;
      case 'low':
        return <Badge className="bg-blue-100 text-blue-800">Информация</Badge>;
      default:
        return <Badge variant="secondary">Неизвестно</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Активна</Badge>;
      case 'warning':
        return <Badge className="bg-orange-100 text-orange-800">Внимание</Badge>;
      case 'error':
        return <Badge className="bg-red-100 text-red-800">Ошибка</Badge>;
      default:
        return <Badge variant="secondary">Неизвестно</Badge>;
    }
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? 
      <TrendingUp className="h-4 w-4 text-green-600" /> : 
      <TrendingDown className="h-4 w-4 text-red-600" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Мониторинг моделей</h2>
          <p className="text-gray-600 mt-2">Отслеживание производительности и уведомления в реальном времени</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Settings className="h-4 w-4 mr-2" />
          Настройки мониторинга
        </Button>
      </div>

      {/* Общая статистика */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-2xl font-bold text-blue-600">12</p>
                <p className="text-sm text-gray-600">Активных моделей</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <div>
                <p className="text-2xl font-bold text-orange-600">5</p>
                <p className="text-sm text-gray-600">Активных алертов</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-green-600">87.4%</p>
                <p className="text-sm text-gray-600">Средняя точность</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-2xl font-bold text-purple-600">98.2%</p>
                <p className="text-sm text-gray-600">Время работы</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="alerts" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="alerts">Уведомления</TabsTrigger>
          <TabsTrigger value="models">Модели</TabsTrigger>
          <TabsTrigger value="settings">Настройки</TabsTrigger>
        </TabsList>

        <TabsContent value="alerts" className="space-y-4">
          <div className="space-y-4">
            {alerts.map((alert) => (
              <Card key={alert.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    {getAlertIcon(alert.type)}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{alert.title}</h4>
                        {getAlertBadge(alert.severity)}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{alert.model}</p>
                      <p className="text-gray-700 mb-3">{alert.message}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">{alert.timestamp}</span>
                        <div className="space-x-2">
                          <Button size="sm" variant="outline">Подробнее</Button>
                          <Button size="sm">Исправить</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="models" className="space-y-4">
          <div className="space-y-4">
            {models.map((model) => (
              <Card key={model.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{model.name}</h4>
                      <p className="text-sm text-gray-600">Обновлено: {model.lastUpdate}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusBadge(model.status)}
                      {model.alertsCount > 0 && (
                        <Badge className="bg-red-100 text-red-800">
                          {model.alertsCount} алертов
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Точность</p>
                      <div className="flex items-center space-x-2">
                        <Progress value={model.accuracy} className="flex-1" />
                        <span className="text-sm font-medium">{model.accuracy}%</span>
                        {getTrendIcon(model.trend)}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Предсказаний сегодня</p>
                      <p className="text-lg font-bold text-gray-900">15,847</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Среднее время ответа</p>
                      <p className="text-lg font-bold text-gray-900">23 мс</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Детали</Button>
                    <Button size="sm" variant="outline">Переобучить</Button>
                    <Button size="sm" variant="outline">Экспорт</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Настройки уведомлений</CardTitle>
              <CardDescription>
                Настройте пороги и способы получения уведомлений
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Email уведомления</h4>
                    <p className="text-sm text-gray-600">Получать алерты на почту</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Push уведомления</h4>
                    <p className="text-sm text-gray-600">Уведомления в браузере</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Мониторинг качества данных</h4>
                    <p className="text-sm text-gray-600">Отслеживать drift и аномалии</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Автоматические отчеты</h4>
                    <p className="text-sm text-gray-600">Еженедельные сводки</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MonitoringPanel;
