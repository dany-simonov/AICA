
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { User, Shield, CreditCard, Users, Bell, Palette, Globe, Download } from "lucide-react";

const UserSettings = () => {
  const [profile, setProfile] = useState({
    name: "Алексей Иванов",
    email: "alexey.ivanov@company.com",
    company: "Tech Solutions Ltd",
    position: "Senior Data Scientist",
    phone: "+7 (999) 123-45-67"
  });

  const [subscription] = useState({
    plan: "Team",
    status: "active",
    renewalDate: "2024-02-15",
    price: "4,990 ₽/мес",
    features: [
      "До 10 пользователей",
      "Неограниченные модели", 
      "Explainable AI",
      "Автоматические отчеты",
      "Email поддержка"
    ]
  });

  const [teamMembers] = useState([
    {
      id: 1,
      name: "Мария Петрова",
      email: "maria.petrova@company.com",
      role: "Аналитик",
      status: "active",
      lastActive: "2024-01-15"
    },
    {
      id: 2,
      name: "Дмитрий Сидоров",
      email: "dmitry.sidorov@company.com", 
      role: "ML Engineer",
      status: "active",
      lastActive: "2024-01-14"
    },
    {
      id: 3,
      name: "Анна Козлова",
      email: "anna.kozlova@company.com",
      role: "Просмотр",
      status: "pending",
      lastActive: "Не активирован"
    }
  ]);

  const handleProfileUpdate = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Активен</Badge>;
      case 'pending':
        return <Badge className="bg-orange-100 text-orange-800">Ожидает</Badge>;
      case 'inactive':
        return <Badge className="bg-gray-100 text-gray-800">Неактивен</Badge>;
      default:
        return <Badge variant="secondary">Неизвестно</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Настройки пользователя</h2>
          <p className="text-gray-600 mt-2">Управление профилем, подпиской и командой</p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="profile">Профиль</TabsTrigger>
          <TabsTrigger value="security">Безопасность</TabsTrigger>
          <TabsTrigger value="subscription">Подписка</TabsTrigger>
          <TabsTrigger value="team">Команда</TabsTrigger>
          <TabsTrigger value="notifications">Уведомления</TabsTrigger>
          <TabsTrigger value="preferences">Интерфейс</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Личная информация</span>
              </CardTitle>
              <CardDescription>
                Обновите ваши личные данные и контактную информацию
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Полное имя</Label>
                    <Input 
                      id="name" 
                      value={profile.name}
                      onChange={(e) => handleProfileUpdate('name', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={profile.email}
                      onChange={(e) => handleProfileUpdate('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone" 
                      value={profile.phone}
                      onChange={(e) => handleProfileUpdate('phone', e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="company">Компания</Label>
                    <Input 
                      id="company" 
                      value={profile.company}
                      onChange={(e) => handleProfileUpdate('company', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="position">Должность</Label>
                    <Input 
                      id="position" 
                      value={profile.position}
                      onChange={(e) => handleProfileUpdate('position', e.target.value)}
                    />
                  </div>
                  <div className="pt-4">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Сохранить изменения
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Безопасность</span>
              </CardTitle>
              <CardDescription>
                Настройки безопасности вашего аккаунта
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Смена пароля</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="currentPassword">Текущий пароль</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div>
                      <Label htmlFor="newPassword">Новый пароль</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                  </div>
                  <Button className="mt-4">Обновить пароль</Button>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="font-medium mb-3">Двухфакторная аутентификация</h4>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-700">Дополнительная защита вашего аккаунта</p>
                      <p className="text-sm text-gray-600">Статус: Не настроена</p>
                    </div>
                    <Button variant="outline">Настроить 2FA</Button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-medium mb-3">Активные сессии</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Текущая сессия</p>
                        <p className="text-sm text-gray-600">Chrome на Windows • Москва, Россия</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Активна</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscription" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Подписка и оплата</span>
              </CardTitle>
              <CardDescription>
                Управление подпиской и способами оплаты
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-xl">{subscription.plan}</h4>
                    <p className="text-gray-600">Продление: {subscription.renewalDate}</p>
                    <p className="text-2xl font-bold text-blue-600 mt-2">{subscription.price}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 capitalize">{subscription.status}</Badge>
                </div>

                <div>
                  <h5 className="font-medium mb-3">Возможности плана:</h5>
                  <ul className="space-y-2">
                    {subscription.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button>Изменить план</Button>
                  <Button variant="outline">История платежей</Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Счет-фактура
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Управление командой</span>
                  </CardTitle>
                  <CardDescription>
                    Добавляйте пользователей и управляйте правами доступа
                  </CardDescription>
                </div>
                <Button>Пригласить пользователя</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{member.name}</h4>
                      <p className="text-sm text-gray-600">{member.email}</p>
                      <p className="text-xs text-gray-500">Последний вход: {member.lastActive}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">{member.role}</Badge>
                      {getStatusBadge(member.status)}
                      <Button size="sm" variant="outline">Изменить</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Настройки уведомлений</span>
              </CardTitle>
              <CardDescription>
                Выберите, какие уведомления вы хотите получать
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Email уведомления</h4>
                    <p className="text-sm text-gray-600">Важные обновления и алерты</p>
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
                    <h4 className="font-medium">Уведомления о мониторинге</h4>
                    <p className="text-sm text-gray-600">Алерты о проблемах с моделями</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Маркетинговые рассылки</h4>
                    <p className="text-sm text-gray-600">Новости продукта и советы</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="h-5 w-5" />
                <span>Персонализация интерфейса</span>
              </CardTitle>
              <CardDescription>
                Настройте интерфейс под свои предпочтения
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Темная тема</h4>
                    <p className="text-sm text-gray-600">Использовать темный режим</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Язык интерфейса</h4>
                    <p className="text-sm text-gray-600">Русский</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Globe className="h-4 w-4 mr-2" />
                    Изменить
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Плотность данных</h4>
                    <p className="text-sm text-gray-600">Компактный вид таблиц</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Автосохранение</h4>
                    <p className="text-sm text-gray-600">Автоматически сохранять изменения</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserSettings;
