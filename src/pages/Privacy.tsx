
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Search, Download, Clock, ChevronRight, ChevronDown } from "lucide-react";

const Privacy = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: "introduction",
      title: "Введение",
      content: `
        <p class="mb-4">
          Настоящая Политика конфиденциальности регулирует порядок обработки и защиты персональных данных пользователей платформы AICA (далее — «Платформа»).
        </p>
        <p class="mb-4">
          ООО "AICA Teams" (далее — «Компания», «мы», «нас» или «наш») уважает конфиденциальность пользователей Платформы и стремится обеспечить максимальную защиту их персональных данных. 
        </p>
        <p>
          Используя Платформу, вы соглашаетесь с положениями настоящей Политики конфиденциальности. Если вы не согласны с какими-либо положениями настоящей Политики, пожалуйста, не используйте Платформу.
        </p>
      `
    },
    {
      id: "data-collection",
      title: "Сбор и использование данных",
      content: `
        <p class="mb-4">
          <strong>Мы собираем следующие типы персональных данных:</strong>
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Контактная информация: имя, адрес электронной почты, номер телефона, наименование компании.</li>
          <li>Данные аккаунта: логин, пароль, настройки пользователя, история активности.</li>
          <li>Данные моделей: загруженные ML модели, наборы данных, параметры моделей.</li>
          <li>Технические данные: IP-адрес, сведения о браузере, устройстве, файлы cookie, время посещения.</li>
          <li>Финансовая информация: история платежей и транзакций (без сохранения полных данных платежных карт).</li>
          <li>Коммуникации: содержание сообщений, запросов в техническую поддержку и переписки с нами.</li>
        </ul>
        <p class="mb-4">
          <strong>Цели обработки персональных данных:</strong>
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Предоставление доступа к функционалу Платформы и его персонализация.</li>
          <li>Обработка и анализ загруженных моделей и данных для формирования отчетов.</li>
          <li>Коммуникация с пользователями: ответы на запросы, уведомления, обновления.</li>
          <li>Улучшение работы Платформы и разработка новых функций.</li>
          <li>Обеспечение безопасности и предотвращение мошенничества.</li>
          <li>Обработка платежей и ведение бухгалтерского учета.</li>
          <li>Соблюдение требований законодательства.</li>
        </ul>
      `
    },
    {
      id: "user-rights",
      title: "Права пользователей",
      content: `
        <p class="mb-4">
          В соответствии с законодательством о защите персональных данных, вы имеете следующие права:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Право на доступ:</strong> вы можете запросить копию ваших персональных данных, которые мы обрабатываем.</li>
          <li><strong>Право на исправление:</strong> вы можете потребовать исправления неточных или неполных данных о вас.</li>
          <li><strong>Право на удаление:</strong> в определенных обстоятельствах вы можете потребовать удаления ваших персональных данных.</li>
          <li><strong>Право на ограничение обработки:</strong> в определенных обстоятельствах вы можете потребовать ограничения обработки ваших данных.</li>
          <li><strong>Право на переносимость данных:</strong> вы можете попросить нас передать ваши данные другому оператору в структурированном, машиночитаемом формате.</li>
          <li><strong>Право на возражение:</strong> вы имеете право возразить против обработки ваших данных в определенных целях.</li>
        </ul>
        <p>
          Для осуществления этих прав, пожалуйста, свяжитесь с нами по адресу: aica.teams@gmail.com. Мы постараемся ответить на ваш запрос в течение 30 дней.
        </p>
      `
    },
    {
      id: "data-security",
      title: "Безопасность данных",
      content: `
        <p class="mb-4">
          Мы применяем комплексный подход к обеспечению безопасности данных:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Технические меры:</strong> шифрование данных при передаче и хранении, брандмауэры, защита от DDoS-атак, регулярное резервное копирование.</li>
          <li><strong>Организационные меры:</strong> контроль доступа к данным, обучение сотрудников принципам конфиденциальности, строгие внутренние политики.</li>
          <li><strong>Мониторинг:</strong> постоянный мониторинг систем для обнаружения и предотвращения несанкционированного доступа.</li>
        </ul>
        <p class="mb-4">
          Мы храним ваши данные только в течение времени, необходимого для достижения целей, для которых они были собраны, или для соблюдения юридических требований.
        </p>
        <p>
          Несмотря на применяемые меры защиты, передача данных через интернет никогда не может быть гарантированно безопасной. Мы не можем гарантировать абсолютную безопасность информации, передаваемой на Платформу.
        </p>
      `
    },
    {
      id: "data-sharing",
      title: "Передача данных третьим лицам",
      content: `
        <p class="mb-4">
          Мы не продаем, не сдаем в аренду и не обмениваем ваши персональные данные с третьими лицами для их собственных маркетинговых целей.
        </p>
        <p class="mb-4">
          Мы можем передавать ваши данные следующим категориям получателей:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Поставщики услуг:</strong> компании, которые помогают нам предоставлять услуги (хостинг, обработка платежей, служба поддержки).</li>
          <li><strong>Аффилированные компании:</strong> наши дочерние и партнерские организации для предоставления услуг.</li>
          <li><strong>Правоохранительные органы:</strong> если это требуется по закону, в ответ на судебный запрос или для защиты наших прав.</li>
          <li><strong>Другие пользователи:</strong> если вы решите поделиться своими данными или результатами анализа через функции платформы.</li>
        </ul>
        <p>
          Мы требуем от всех третьих лиц соблюдения безопасности ваших данных и обращения с ними в соответствии с применимым законодательством о защите данных.
        </p>
      `
    },
    {
      id: "cookies",
      title: "Файлы cookie и аналитика",
      content: `
        <p class="mb-4">
          Наша платформа использует файлы cookie и аналогичные технологии для улучшения пользовательского опыта и анализа использования Платформы.
        </p>
        <p class="mb-4">
          <strong>Мы используем следующие типы cookie:</strong>
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Необходимые cookie:</strong> требуются для функционирования Платформы.</li>
          <li><strong>Функциональные cookie:</strong> запоминают ваши предпочтения и настройки.</li>
          <li><strong>Аналитические cookie:</strong> помогают нам понять, как посетители взаимодействуют с Платформой.</li>
          <li><strong>Маркетинговые cookie:</strong> используются для персонализации рекламы.</li>
        </ul>
        <p class="mb-4">
          Вы можете управлять настройками cookie через настройки вашего браузера. Обратите внимание, что отключение определенных cookie может ограничить доступ к некоторым функциям Платформы.
        </p>
        <p>
          Мы используем аналитические сервисы, такие как Google Analytics, для анализа использования нашей Платформы. Эти сервисы могут собирать информацию о вашем использовании Платформы и передавать эту информацию на свои серверы.
        </p>
      `
    },
    {
      id: "changes",
      title: "Изменения в политике конфиденциальности",
      content: `
        <p class="mb-4">
          Мы оставляем за собой право изменять данную Политику конфиденциальности в любое время. Изменения вступают в силу с момента публикации обновленной версии на нашем веб-сайте.
        </p>
        <p class="mb-4">
          В случае внесения существенных изменений, мы уведомим вас через Платформу или по электронной почте до вступления изменений в силу.
        </p>
        <p class="mb-4">
          Продолжая использовать Платформу после внесения изменений в Политику конфиденциальности, вы подтверждаете ваше согласие с новыми условиями.
        </p>
        <p>
          Мы рекомендуем периодически просматривать данную страницу для получения последней информации о нашей политике конфиденциальности.
        </p>
      `
    },
    {
      id: "contact",
      title: "Контактная информация",
      content: `
        <p class="mb-4">
          Если у вас возникли вопросы, замечания или запросы, связанные с настоящей Политикой конфиденциальности или обработкой ваших персональных данных, пожалуйста, свяжитесь с нами:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Email:</strong> aica.teams@gmail.com</li>
          <li><strong>Адрес:</strong> Москва, Россия</li>
        </ul>
        <p>
          Мы обязуемся рассмотреть ваши вопросы и запросы в кратчайшие сроки и предоставить подробный ответ.
        </p>
      `
    }
  ];

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-4 text-blue-200" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Политика конфиденциальности
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Как мы защищаем и обрабатываем ваши данные на платформе AICA
            </p>
            <p className="text-blue-100">
              Последнее обновление: 15 января 2024
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          {/* Quick links and search */}
          <div className="mb-10 flex flex-col md:flex-row gap-6 justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Содержание</h2>
              <ul className="space-y-2">
                {sections.map(section => (
                  <li key={section.id}>
                    <button 
                      className="text-blue-600 hover:underline flex items-center text-left"
                      onClick={() => toggleSection(section.id)}
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3">
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input 
                    type="text" 
                    placeholder="Поиск в документе..." 
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <Download className="h-4 w-4 mr-2" />
                  Скачать PDF
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <Clock className="h-4 w-4 mr-2" />
                  История изменений
                </Button>
              </div>
            </div>
          </div>

          {/* Document sections */}
          <div className="space-y-6">
            {sections.map(section => (
              <Card key={section.id} className="overflow-hidden" id={section.id}>
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                    {activeSection === section.id ? (
                      <ChevronDown className="h-6 w-6 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-6 w-6 text-gray-500" />
                    )}
                  </div>
                </div>
                {activeSection === section.id && (
                  <CardContent className="bg-gray-50 prose max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-gray-600 text-center">
              Если у вас есть вопросы или замечания по поводу настоящей Политики конфиденциальности, 
              пожалуйста, свяжитесь с нами по адресу <a href="mailto:aica.teams@gmail.com" className="text-blue-600 hover:underline">aica.teams@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
