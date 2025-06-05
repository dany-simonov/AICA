import React, { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Search, Download, Clock, ChevronRight, ChevronDown, Bot } from "lucide-react";
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import 'jspdf';
import 'html2canvas';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState<string | null>("introduction");
  const [search, setSearch] = useState('');

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
      id: "terms",
      title: "Условия использования",
      content: `
        <h3 class="text-lg font-semibold mb-4">1. Общие положения</h3>
        <p class="mb-4">
          1.1. Настоящие Условия использования (далее — «Условия») регулируют отношения между ООО "AICA Teams" (далее — «Компания») и пользователями платформы AICA (далее — «Пользователи» или «Вы»).
        </p>
        <p class="mb-4">
          1.2. Используя Платформу AICA, Вы подтверждаете, что полностью принимаете настоящие Условия. Если Вы не согласны с каким-либо пунктом Условий, Вам следует прекратить использование Платформы.
        </p>
        <p class="mb-4">
          1.3. Компания оставляет за собой право в одностороннем порядке изменять настоящие Условия. Изменения вступают в силу с момента их публикации на сайте.
        </p>

        <h3 class="text-lg font-semibold mb-4">2. Регистрация и использование аккаунта</h3>
        <p class="mb-4">
          2.1. Для использования Платформы Пользователю необходимо создать аккаунт, предоставив достоверную информацию при регистрации.
        </p>
        <p class="mb-4">
          2.2. Пользователь несет ответственность за безопасность своих учетных данных и обязуется не передавать их третьим лицам.
        </p>
        <p class="mb-4">
          2.3. Компания оставляет за собой право заблокировать или удалить аккаунт Пользователя в случае нарушения настоящих Условий или законодательства РФ.
        </p>

        <h3 class="text-lg font-semibold mb-4">3. Интеллектуальная собственность</h3>
        <p class="mb-4">
          3.1. Все права на Платформу AICA, включая программный код, дизайн, торговые марки, принадлежат Компании.
        </p>
        <p class="mb-4">
          3.2. Пользователь сохраняет права на загружаемые им модели и данные, однако предоставляет Компании ограниченное право на их обработку в рамках предоставления услуг.
        </p>
        <p class="mb-4">
          3.3. Запрещается копировать, модифицировать, распространять, декомпилировать или создавать производные произведения на основе Платформы без письменного разрешения Компании.
        </p>

        <h3 class="text-lg font-semibold mb-4">4. Тарифы и оплата</h3>
        <p class="mb-4">
          4.1. Компания предоставляет услуги в соответствии с выбранным Пользователем тарифным планом.
        </p>
        <p class="mb-4">
          4.2. Оплата производится в порядке и сроки, указанные на сайте Платформы.
        </p>
        <p class="mb-4">
          4.3. Компания оставляет за собой право изменять тарифы, уведомив Пользователей не менее чем за 14 дней до вступления изменений в силу.
        </p>

        <h3 class="text-lg font-semibold mb-4">5. Ограничение ответственности</h3>
        <p class="mb-4">
          5.1. Компания предоставляет Платформу «как есть» без каких-либо гарантий.
        </p>
        <p class="mb-4">
          5.2. Компания не несет ответственности за любые прямые или косвенные убытки, возникшие в результате использования или невозможности использования Платформы.
        </p>
        <p class="mb-4">
          5.3. Компания не несет ответственности за решения, принятые на основе результатов анализа, полученных с помощью Платформы.
        </p>

        <h3 class="text-lg font-semibold mb-4">6. Конфиденциальность</h3>
        <p class="mb-4">
          6.1. Компания обязуется обеспечивать конфиденциальность данных Пользователя в соответствии с Политикой конфиденциальности.
        </p>
        <p class="mb-4">
          6.2. Пользователь соглашается с тем, что Компания может использовать анонимизированные данные для улучшения Платформы и проведения статистических исследований.
        </p>

        <h3 class="text-lg font-semibold mb-4">7. Применимое право и разрешение споров</h3>
        <p class="mb-4">
          7.1. Настоящие Условия регулируются законодательством Российской Федерации.
        </p>
        <p class="mb-4">
          7.2. Все споры, возникающие между Компанией и Пользователем, подлежат разрешению путем переговоров.
        </p>
        <p class="mb-4">
          7.3. В случае невозможности урегулирования спора путем переговоров, спор подлежит разрешению в судебном порядке по месту нахождения Компании.
        </p>

        <h3 class="text-lg font-semibold mb-4">8. Заключительные положения</h3>
        <p class="mb-4">
          8.1. Если какое-либо положение настоящих Условий признается недействительным, это не влечет недействительности остальных положений.
        </p>
        <p class="mb-4">
          8.2. Настоящие Условия представляют собой полное соглашение между Компанией и Пользователем в отношении использования Платформы.
        </p>
        <p>
          8.3. По всем вопросам, связанным с настоящими Условиями, Пользователь может обратиться по адресу: aica.teams@gmail.com.
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

  // Функция для генерации PDF
  const handleDownloadPDF = async () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const content = document.getElementById('privacy-content');
    if (!content) return;
    // Только название
    pdf.setFontSize(22);
    pdf.text('Политика конфиденциальности AICA', 15, 22);
    // html2canvas для остального контента
    const canvas = await html2canvas(content, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pageWidth - 30;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 15, 35, pdfWidth, pdfHeight);
    pdf.save('AICA-privacy-policy.pdf');
  };

  // Функция для подсветки поиска
  const highlight = (text: string) => {
    if (!search) return text;
    const regex = new RegExp(`(${search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.split(regex).map((part, i) =>
      regex.test(part) ? <mark key={i} className="bg-yellow-200 text-black">{part}</mark> : part
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-4 text-blue-200" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Политика конфиденциальности и условия использования
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Как мы защищаем и обрабатываем ваши данные на платформе AICA
            </p>
            <p className="text-blue-100">
              Последнее обновление: 5 июня 2025
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
                      className="text-blue-600 hover:text-orange-500 transition-colors flex items-center text-left"
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
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Button variant="outline" className="w-full flex items-center justify-center hover:text-orange-500 transition-colors" onClick={handleDownloadPDF}>
                  <Download className="h-4 w-4 mr-2" />
                  Скачать PDF
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
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-orange-500 transition-colors">{highlight(section.title)}</h3>
                    {activeSection === section.id ? (
                      <ChevronDown className="h-6 w-6 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-6 w-6 text-gray-500" />
                    )}
                  </div>
                </div>
                {activeSection === section.id && (
                  <CardContent className="bg-gray-50 prose max-w-none">
                    <div>{highlight(section.content.replace(/<[^>]+>/g, ''))}</div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-gray-600 text-center">
              Если у вас есть вопросы или замечания по поводу настоящей Политики конфиденциальности, 
              пожалуйста, свяжитесь с нами по адресу <a href="mailto:aica.teams@gmail.com" className="text-blue-600 hover:text-orange-500 transition-colors">aica.teams@gmail.com</a>
            </p>
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

export default Privacy;
