
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TestTube, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { AI_MODELS } from '@/lib/aiModels';
import { aiService } from '@/services/aiService';
import { useToast } from "@/hooks/use-toast";

interface TestResult {
  modelId: string;
  success: boolean;
  responseTime: number;
  error?: string;
}

export const AIModelTester = () => {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();

  const runTests = async () => {
    setIsRunning(true);
    setTestResults([]);
    
    try {
      const results: TestResult[] = [];
      
      for (const model of AI_MODELS) {
        const startTime = Date.now();
        
        try {
          const response = await aiService.generateResponse(model, "Test message");
          const responseTime = Date.now() - startTime;
          
          results.push({
            modelId: model.id,
            success: response.success,
            responseTime,
            error: response.error
          });
        } catch (error) {
          results.push({
            modelId: model.id,
            success: false,
            responseTime: Date.now() - startTime,
            error: error instanceof Error ? error.message : 'Unknown error'
          });
        }
        
        setTestResults([...results]);
      }
      
      const successCount = results.filter(r => r.success).length;
      toast({
        title: "Тестирование завершено",
        description: `${successCount}/${results.length} моделей прошли тест`,
      });
      
    } catch (error) {
      toast({
        title: "Ошибка тестирования",
        description: "Не удалось протестировать модели",
        variant: "destructive",
      });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TestTube className="h-5 w-5" />
          <span>Тестирование AI моделей</span>
        </CardTitle>
        <CardDescription>
          Проверка работоспособности всех подключенных нейросетей
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button 
            onClick={runTests} 
            disabled={isRunning}
            className="w-full"
          >
            {isRunning ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Тестирование...
              </>
            ) : (
              <>
                <TestTube className="h-4 w-4 mr-2" />
                Запустить тест всех моделей
              </>
            )}
          </Button>

          {testResults.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium">Результаты тестирования:</h4>
              {testResults.map((result) => {
                const model = AI_MODELS.find(m => m.id === result.modelId);
                return (
                  <div 
                    key={result.modelId}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{model?.icon}</span>
                      <div>
                        <div className="font-medium">{model?.name}</div>
                        <div className="text-sm text-gray-500">{model?.provider}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">
                        {result.responseTime}ms
                      </span>
                      {result.success ? (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Работает
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                          <XCircle className="h-3 w-3 mr-1" />
                          Ошибка
                        </Badge>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
