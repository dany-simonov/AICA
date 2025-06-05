import React, { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, HelpCircle, Settings, ChevronDown, Diamond, Users, Building, CheckSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Bot } from "lucide-react";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly");
  };

  const discount = 20; // процент скидки при годовой оплате
  const getYearlyPrice = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * (100 - discount) / 100);
  };

  const plans = [
    {
      id: "free",
      name: "Free",
      description: "Для знакомства с платформой",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "1 пользователь",
        "До 3 моделей",
        "Базовый анализ Explainable AI",
        "До 5 отчетов в месяц",
        "Документация и база знаний",
        "Сообщество поддержки"
      ],
      limitations: [
        "Ограниченные отчеты",
        "Без мониторинга в реальном времени",
        "Без командного доступа"
      ],
      cta: "Начать бесплатно",
      highlighted: false
    },
    {
      id: "solo",
      name: "Solo",
      description: "Для индивидуальных аналитиков",
      monthlyPrice: 2490,
      yearlyPrice: getYearlyPrice(2490),
      features: [
        "1 пользователь",
        "До 10 моделей",
        "Полный анализ SHAP и LIME",
        "Неограниченные отчеты",
        "Базовый мониторинг",
        "Экспорт отчетов в PDF",
        "Email поддержка"
      ],
      limitations: [
        "Без API интеграции",
        "Без командного доступа"
      ],
      cta: "Выбрать Solo",
      highlighted: false
    },
    {
      id: "team",
      name: "Team",
      description: "Для команд и отделов",
      monthlyPrice: 4990,
      yearlyPrice: getYearlyPrice(4990),
      features: [
        "До 10 пользователей",
        "Неограниченные модели",
        "Расширенный Explainable AI",
        "Настраиваемые отчеты",
        "Мониторинг в реальном времени",
        "API интеграция",
        "Командный доступ и роли",
        "Приоритетная поддержка"
      ],
      limitations: [],
      cta: "Выбрать Team",
      highlighted: true
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Для крупных организаций",
      monthlyPrice: 12990,
      yearlyPrice: getYearlyPrice(12990),
      features: [
        "Неограниченные пользователи",
        "Неограниченные модели и данные",
        "Премиум Explainable AI",
        "Расширенный governance",
        "SLA с гарантией доступности",
        "Выделенный менеджер",
        "Корпоративное обучение",
        "Безопасность корпоративного уровня",
        "Кастомизация отчетов"
      ],
      limitations: [],
      cta: "Связаться с отделом продаж",
      highlighted: false
    }
  ];

  const faqs = [
    {
      question: "Какой тариф выбрать для начала?",
      answer: "Мы рекомендуем начать с бесплатного тарифа Free, чтобы ознакомиться с возможностями платформы. Затем вы можете перейти на Solo или Team в зависимости от ваших потребностей."
    },
    {
      question: "Могу ли я сменить тарифный план?",
      answer: "Да, вы можете изменить свой тарифный план в любой момент. При переходе на более высокий тариф изменения вступят в силу немедленно. При переходе на более низкий тариф изменения вступят в силу в следующем платежном периоде."
    },
    {
      question: "Как осуществляется оплата?",
      answer: "Мы принимаем оплату картами Visa, MasterCard, МИР, а также по счету для юридических лиц. Все платежи обрабатываются через защищенные платежные шлюзы."
    },
    {
      question: "Есть ли какие-то скрытые платежи?",
      answer: "Нет, все функции и ограничения четко указаны в описаниях тарифов. Никаких дополнительных или скрытых платежей не предусмотрено."
    },
    {
      question: "Возможно ли вернуть деньги?",
      answer: "Мы предоставляем возврат средств в течение 14 дней с момента оплаты, если вы не удовлетворены нашим сервисом и не использовали значительный объем ресурсов."
    },
    {
      question: "Что такое креденшиалы модели?",
      answer: "Креденшиалы модели - это учетные данные и параметры, необходимые для работы с вашей ML моделью, включая API ключи, конфигурацию и настройки безопасности."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Простые и прозрачные тарифы
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Выберите подходящий план для вас или вашей команды и начните аудит моделей уже сегодня
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Billing Period Toggle */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4">
            <span className={`text-lg ${billingPeriod === "monthly" ? "font-semibold text-gray-900" : "text-gray-500"}`}>
              Помесячно
            </span>
            <div className="flex items-center">
              <Switch 
                checked={billingPeriod === "yearly"}
                onCheckedChange={toggleBillingPeriod}
              />
            </div>
            <span className="flex items-center">
              <span className={`text-lg ${billingPeriod === "yearly" ? "font-semibold text-gray-900" : "text-gray-500"}`}>
                Ежегодно
              </span>
              <Badge className="ml-2 bg-green-100 text-green-800">
                -{discount}%
              </Badge>
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            При годовой оплате вы экономите {discount}%
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative overflow-hidden hover:shadow-lg transition-shadow ${plan.highlighted ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-bl-lg transform rotate-12">
                  Популярный
                </div>
              )}

              <CardHeader>
                <div className="flex items-center">
                  {plan.id === "free" && <Users className="h-6 w-6 text-gray-400 mr-2" />}
                  {plan.id === "solo" && <Diamond className="h-6 w-6 text-blue-500 mr-2" />}
                  {plan.id === "team" && <Users className="h-6 w-6 text-blue-600 mr-2" />}
                  {plan.id === "enterprise" && <Building className="h-6 w-6 text-blue-700 mr-2" />}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      {billingPeriod === "monthly" ? 
                        (plan.monthlyPrice > 0 ? `${plan.monthlyPrice.toLocaleString('ru')}` : "0") : 
                        (plan.yearlyPrice > 0 ? `${plan.yearlyPrice.toLocaleString('ru')}` : "0")
                      } ₽
                    </span>
                    <span className="text-gray-600 ml-1">
                      /{billingPeriod === "monthly" ? "мес" : "год"}
                    </span>
                  </div>
                  {plan.monthlyPrice > 0 && billingPeriod === "yearly" && (
                    <p className="text-sm text-green-600 mt-1">
                      Экономия {Math.round(plan.monthlyPrice * 12 * discount / 100).toLocaleString('ru')} ₽
                    </p>
                  )}
                </div>

                <Link to="/auth">
                  <Button 
                    className={`w-full mb-6 hover:bg-orange-500 hover:text-white ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </Link>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Включено:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="border-t pt-4 mt-4">
                      <h4 className="text-sm font-medium text-gray-600 mb-2">Ограничения:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-start">
                            <HelpCircle className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <div className="md:flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold flex items-center">
                <Settings className="h-6 w-6 mr-2 text-blue-600" />
                Нужны особые условия?
              </h3>
              <p className="text-gray-600 mt-2">
                Мы предлагаем индивидуальные решения для крупных компаний и государственных организаций.
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 mt-4 md:mt-0"
              onClick={() => window.location.href = 'mailto:aica.teams@gmail.com?subject=Запрос индивидуального предложения'}
            >
              Запросить индивидуальное предложение
            </Button>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader className="cursor-pointer">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg hover:text-orange-500 transition-colors">{faq.question}</CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compare All Features */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Сравнение всех возможностей
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 border text-left">Функция</th>
                  <th className="p-4 border text-center">Free</th>
                  <th className="p-4 border text-center">Solo</th>
                  <th className="p-4 border text-center">Team</th>
                  <th className="p-4 border text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border font-medium">Пользователи</td>
                  <td className="p-4 border text-center">1</td>
                  <td className="p-4 border text-center">1</td>
                  <td className="p-4 border text-center">До 10</td>
                  <td className="p-4 border text-center">Неограниченно</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Модели</td>
                  <td className="p-4 border text-center">3</td>
                  <td className="p-4 border text-center">10</td>
                  <td className="p-4 border text-center">Неограниченно</td>
                  <td className="p-4 border text-center">Неограниченно</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Explainable AI</td>
                  <td className="p-4 border text-center">Базовый</td>
                  <td className="p-4 border text-center">Полный</td>
                  <td className="p-4 border text-center">Расширенный</td>
                  <td className="p-4 border text-center">Премиум</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Мониторинг</td>
                  <td className="p-4 border text-center"><span className="text-red-600">✖</span></td>
                  <td className="p-4 border text-center">Базовый</td>
                  <td className="p-4 border text-center">Реальное время</td>
                  <td className="p-4 border text-center">Продвинутый</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">API интеграция</td>
                  <td className="p-4 border text-center"><span className="text-red-600">✖</span></td>
                  <td className="p-4 border text-center"><span className="text-red-600">✖</span></td>
                  <td className="p-4 border text-center"><CheckSquare className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 border text-center"><CheckSquare className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Поддержка</td>
                  <td className="p-4 border text-center">Сообщество</td>
                  <td className="p-4 border text-center">Email</td>
                  <td className="p-4 border text-center">Приоритетная</td>
                  <td className="p-4 border text-center">Выделенный менеджер</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы начать?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Выберите подходящий тариф и убедитесь в преимуществах AICA для вашего бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Начать бесплатно
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Запросить демо
              </Button>
            </Link>
          </div>
        </div>
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

export default Pricing;
