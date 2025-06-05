
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText, BarChart3, Filter, Search, Trash2, Eye, Download } from "lucide-react";

const DataManager = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [datasets] = useState([
    {
      id: 1,
      name: "Клиентские данные 2024",
      size: "2.4 MB",
      format: "CSV",
      rows: 10500,
      columns: 15,
      uploadDate: "2024-01-15",
      status: "processed"
    },
    {
      id: 2,
      name: "Финансовые показатели",
      size: "1.8 MB", 
      format: "Excel",
      rows: 8200,
      columns: 12,
      uploadDate: "2024-01-12",
      status: "processing"
    },
    {
      id: 3,
      name: "Модель продаж Q4",
      size: "3.1 MB",
      format: "CSV",
      rows: 15600,
      columns: 18,
      uploadDate: "2024-01-10",
      status: "processed"
    }
  ]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'processed':
        return <Badge className="bg-green-100 text-green-800">Обработан</Badge>;
      case 'processing':
        return <Badge className="bg-orange-100 text-orange-800">Обработка</Badge>;
      case 'error':
        return <Badge className="bg-red-100 text-red-800">Ошибка</Badge>;
      default:
        return <Badge variant="secondary">Неизвестно</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Управление данными</h2>
          <p className="text-gray-600 mt-2">Загружайте, анализируйте и управляйте вашими наборами данных</p>
        </div>
        <div className="flex space-x-3">
          <Input
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload">
            <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
              <Upload className="h-4 w-4 mr-2" />
              Загрузить данные
            </Button>
          </label>
        </div>
      </div>

      {uploadProgress > 0 && uploadProgress < 100 && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <Upload className="h-5 w-5 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">Загрузка файла...</p>
                <Progress value={uploadProgress} className="mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="datasets" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="datasets">Наборы данных</TabsTrigger>
          <TabsTrigger value="analysis">Анализ данных</TabsTrigger>
          <TabsTrigger value="visualization">Визуализация</TabsTrigger>
        </TabsList>

        <TabsContent value="datasets" className="space-y-4">
          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <Input placeholder="Поиск по названию..." className="w-full" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {datasets.map((dataset) => (
              <Card key={dataset.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{dataset.name}</CardTitle>
                      <CardDescription>{dataset.uploadDate}</CardDescription>
                    </div>
                    {getStatusBadge(dataset.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Размер:</span>
                      <span className="font-medium">{dataset.size}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Формат:</span>
                      <span className="font-medium">{dataset.format}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Строки:</span>
                      <span className="font-medium">{dataset.rows.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Столбцы:</span>
                      <span className="font-medium">{dataset.columns}</span>
                    </div>
                    
                    <div className="flex space-x-2 pt-4">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-3 w-3 mr-1" />
                        Просмотр
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <BarChart3 className="h-3 w-3 mr-1" />
                        Анализ
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Автоматический анализ данных</CardTitle>
              <CardDescription>
                Профилирование данных, поиск аномалий и рекомендации по улучшению качества
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Пропущенные значения</h4>
                  <p className="text-2xl font-bold text-blue-600">2.3%</p>
                  <p className="text-sm text-blue-700">Низкий уровень</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900">Дубликаты</h4>
                  <p className="text-2xl font-bold text-green-600">0.8%</p>
                  <p className="text-sm text-green-700">Отличное качество</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900">Выбросы</h4>
                  <p className="text-2xl font-bold text-orange-600">5.2%</p>
                  <p className="text-sm text-orange-700">Требует внимания</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900">Качество данных</h4>
                  <p className="text-2xl font-bold text-purple-600">91%</p>
                  <p className="text-sm text-purple-700">Высокое качество</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visualization" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Визуализация данных</CardTitle>
              <CardDescription>
                Создавайте графики и диаграммы для анализа ваших данных
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <BarChart3 className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                  <h4 className="font-semibold mb-2">Корреляционная матрица</h4>
                  <p className="text-sm text-gray-600 mb-4">Анализ взаимосвязей между переменными</p>
                  <Button size="sm">Создать</Button>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <BarChart3 className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                  <h4 className="font-semibold mb-2">Распределения</h4>
                  <p className="text-sm text-gray-600 mb-4">Гистограммы и боксплоты</p>
                  <Button size="sm">Создать</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataManager;
