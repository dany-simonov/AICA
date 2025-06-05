
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Search, Filter, Calendar, BarChart3, Share, Eye, Plus } from "lucide-react";

const ReportsManager = () => {
  const [reports] = useState([
    {
      id: 1,
      title: "Аудит модели продаж Q4 2024",
      type: "audit",
      status: "completed",
      createdDate: "2024-01-15",
      size: "2.1 MB",
      model: "Модель продаж v2.1",
      description: "Полный аудит модели с анализом SHAP и LIME"
    },
    {
      id: 2,
      title: "Мониторинг качества данных",
      type: "monitoring",
      status: "generating",
      createdDate: "2024-01-14",
      size: "1.8 MB",
      model: "Клиентские данные",
      description: "Еженедельный отчет о качестве данных"
    },
    {
      id: 3,
      title: "Explainable AI отчет",
      type: "explainable",
      status: "completed",
      createdDate: "2024-01-12",
      size: "3.4 MB",
      model: "Модель кредитного скоринга",
      description: "Детальное объяснение предсказаний модели"
    },
    {
      id: 4,
      title: "Анализ drift модели",
      type: "drift",
      status: "completed",
      createdDate: "2024-01-10",
      size: "1.2 MB",
      model: "Модель рекомендаций",
      description: "Обнаружение и анализ дрейфа модели"
    }
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Готов</Badge>;
      case 'generating':
        return <Badge className="bg-orange-100 text-orange-800">Генерация</Badge>;
      case 'error':
        return <Badge className="bg-red-100 text-red-800">Ошибка</Badge>;
      default:
        return <Badge variant="secondary">Неизвестно</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'audit':
        return <FileText className="h-4 w-4 text-blue-600" />;
      case 'monitoring':
        return <BarChart3 className="h-4 w-4 text-green-600" />;
      case 'explainable':
        return <Eye className="h-4 w-4 text-purple-600" />;
      case 'drift':
        return <Calendar className="h-4 w-4 text-orange-600" />;
      default:
        return <FileText className="h-4 w-4 text-gray-600" />;
    }
  };

  const getTypeName = (type: string) => {
    switch (type) {
      case 'audit':
        return 'Аудит';
      case 'monitoring':
        return 'Мониторинг';
      case 'explainable':
        return 'Explainable AI';
      case 'drift':
        return 'Анализ Drift';
      default:
        return 'Отчет';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Отчеты и анализы</h2>
          <p className="text-gray-600 mt-2">Генерация, просмотр и управление отчетами</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Создать отчет
        </Button>
      </div>

      <Tabs defaultValue="reports" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="reports">Все отчеты</TabsTrigger>
          <TabsTrigger value="templates">Шаблоны</TabsTrigger>
          <TabsTrigger value="scheduled">Автоматические</TabsTrigger>
        </TabsList>

        <TabsContent value="reports" className="space-y-4">
          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <Input placeholder="Поиск отчетов..." className="w-full" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Фильтры
            </Button>
            <Button variant="outline">
              <Search className="h-4 w-4 mr-2" />
              Поиск
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {reports.map((report) => (
              <Card key={report.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      {getTypeIcon(report.type)}
                      <div>
                        <CardTitle className="text-lg">{report.title}</CardTitle>
                        <CardDescription className="flex items-center space-x-4 mt-1">
                          <span>{report.model}</span>
                          <span>•</span>
                          <span>{report.createdDate}</span>
                          <span>•</span>
                          <span>{report.size}</span>
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusBadge(report.status)}
                      <Badge variant="outline">{getTypeName(report.type)}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{report.description}</p>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-3 w-3 mr-1" />
                      Просмотр
                    </Button>
                    <Button size="sm" variant="outline" disabled={report.status !== 'completed'}>
                      <Download className="h-3 w-3 mr-1" />
                      Скачать PDF
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share className="h-3 w-3 mr-1" />
                      Поделиться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-lg">Аудит модели</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Полный аудит ML модели с анализом качества, bias и объяснимости</p>
                <Button className="w-full">Использовать шаблон</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-lg">Мониторинг качества</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Регулярный мониторинг качества данных и производительности модели</p>
                <Button className="w-full">Использовать шаблон</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Eye className="h-6 w-6 text-purple-600" />
                  <CardTitle className="text-lg">Explainable AI</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Детальное объяснение предсказаний с помощью SHAP и LIME</p>
                <Button className="w-full">Использовать шаблон</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Автоматическая генерация отчетов</CardTitle>
              <CardDescription>
                Настройте автоматическое создание отчетов по расписанию
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold">Еженедельный мониторинг</h4>
                    <p className="text-sm text-gray-600">Каждый понедельник в 09:00</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Активен</Badge>
                </div>
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold">Месячный аудит</h4>
                    <p className="text-sm text-gray-600">1 число каждого месяца</p>
                  </div>
                  <Badge variant="secondary">Приостановлен</Badge>
                </div>
                <Button className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Настроить новое расписание
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReportsManager;
