
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Upload, FileText, TrendingUp, AlertTriangle, Download, Trash2, Eye, Play, History } from "lucide-react";
import { toast } from "sonner";

interface Model {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'draft' | 'archived';
  accuracy: number;
  lastAnalysis: string;
  size: string;
  version: string;
  description: string;
}

export const ModelsManager = () => {
  const [models, setModels] = useState<Model[]>([
    {
      id: '1',
      name: 'Customer_Churn_v2',
      type: 'Classification',
      status: 'active',
      accuracy: 87.5,
      lastAnalysis: '2024-01-15',
      size: '2.3 MB',
      version: '2.1',
      description: 'Модель для предсказания оттока клиентов'
    },
    {
      id: '2',
      name: 'Price_Prediction',
      type: 'Regression',
      status: 'active',
      accuracy: 92.1,
      lastAnalysis: '2024-01-14',
      size: '1.8 MB',
      version: '1.5',
      description: 'Модель для прогнозирования цен'
    },
    {
      id: '3',
      name: 'Fraud_Detection',
      type: 'Classification',
      status: 'draft',
      accuracy: 84.3,
      lastAnalysis: '2024-01-10',
      size: '3.1 MB',
      version: '1.0',
      description: 'Модель для обнаружения мошенничества'
    }
  ]);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadProgress(0);

    // Симуляция загрузки
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          toast.success("Модель успешно загружена!");
          setSelectedFile(null);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleAnalyze = (modelId: string) => {
    toast.success("Анализ модели запущен. Результаты будут готовы через несколько минут.");
  };

  const handleDelete = (modelId: string) => {
    setModels(models.filter(model => model.id !== modelId));
    toast.success("Модель удалена");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Активна';
      case 'draft': return 'Черновик';
      case 'archived': return 'Архив';
      default: return status;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Управление моделями</h2>
          <p className="text-gray-600">Загружайте, анализируйте и отслеживайте ваши ML модели</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Upload className="h-4 w-4 mr-2" />
              Загрузить модель
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Загрузка новой модели</DialogTitle>
              <DialogDescription>
                Поддерживаются форматы: .pkl, .joblib, .h5, .onnx
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="model-name">Название модели</Label>
                <Input id="model-name" placeholder="Введите название модели" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="model-description">Описание</Label>
                <Input id="model-description" placeholder="Краткое описание модели" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="model-file">Файл модели</Label>
                <Input
                  id="model-file"
                  type="file"
                  accept=".pkl,.joblib,.h5,.onnx"
                  onChange={handleFileSelect}
                />
              </div>
              
              {selectedFile && (
                <div className="text-sm text-gray-600">
                  Выбран файл: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                </div>
              )}
              
              {isUploading && (
                <div className="space-y-2">
                  <Label>Прогресс загрузки</Label>
                  <Progress value={uploadProgress} className="w-full" />
                  <div className="text-sm text-gray-600">{uploadProgress}%</div>
                </div>
              )}
              
              <Button 
                onClick={handleUpload} 
                disabled={!selectedFile || isUploading}
                className="w-full"
              >
                {isUploading ? 'Загрузка...' : 'Загрузить модель'}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Models List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model) => (
          <Card key={model.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{model.name}</CardTitle>
                  <CardDescription>{model.description}</CardDescription>
                </div>
                <Badge className={getStatusColor(model.status)}>
                  {getStatusText(model.status)}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-600">Тип</div>
                  <div className="font-medium">{model.type}</div>
                </div>
                <div>
                  <div className="text-gray-600">Версия</div>
                  <div className="font-medium">v{model.version}</div>
                </div>
                <div>
                  <div className="text-gray-600">Точность</div>
                  <div className="font-medium text-green-600">{model.accuracy}%</div>
                </div>
                <div>
                  <div className="text-gray-600">Размер</div>
                  <div className="font-medium">{model.size}</div>
                </div>
              </div>
              
              <div className="text-sm">
                <div className="text-gray-600">Последний анализ</div>
                <div className="font-medium">{model.lastAnalysis}</div>
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleAnalyze(model.id)}
                  className="flex-1"
                >
                  <Play className="h-4 w-4 mr-1" />
                  Анализ
                </Button>
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <History className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleDelete(model.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Model Analysis Results */}
      <Card>
        <CardHeader>
          <CardTitle>Результаты анализа: Customer_Churn_v2</CardTitle>
          <CardDescription>Explainable AI и интерпретация модели</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="shap" className="w-full">
            <TabsList>
              <TabsTrigger value="shap">SHAP Analysis</TabsTrigger>
              <TabsTrigger value="lime">LIME Analysis</TabsTrigger>
              <TabsTrigger value="metrics">Метрики</TabsTrigger>
              <TabsTrigger value="recommendations">Рекомендации</TabsTrigger>
            </TabsList>
            
            <TabsContent value="shap" className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Важность признаков (SHAP)</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Время использования сервиса</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <span className="text-sm font-medium">0.85</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Количество обращений в поддержку</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '72%'}}></div>
                      </div>
                      <span className="text-sm font-medium">0.72</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Средний чек</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '58%'}}></div>
                      </div>
                      <span className="text-sm font-medium">0.58</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="metrics" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">87.5%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">89.2%</div>
                  <div className="text-sm text-gray-600">Precision</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">85.8%</div>
                  <div className="text-sm text-gray-600">Recall</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">87.4%</div>
                  <div className="text-sm text-gray-600">F1-Score</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
