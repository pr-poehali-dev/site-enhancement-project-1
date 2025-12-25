import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: 'Clock',
    title: 'Быстрое бронирование',
    description: 'Забронируйте услугу в два клика без звонков и ожидания',
    details: [
      'Моментальное подтверждение бронирования',
      'Автоматическая проверка доступности слотов',
      'Синхронизация с календарем специалиста',
      'Push-уведомления о статусе бронирования'
    ],
    color: 'from-primary to-secondary'
  },
  {
    icon: 'Calendar',
    title: 'Гибкое расписание',
    description: 'Выбирайте удобное время из доступных слотов в календаре',
    details: [
      'Просмотр расписания на месяц вперед',
      'Фильтрация по времени суток',
      'Возможность выбора продолжительности',
      'Автоматический подбор ближайшего времени'
    ],
    color: 'from-secondary to-accent'
  },
  {
    icon: 'CreditCard',
    title: 'Безопасная оплата',
    description: 'Защищенные платежи и мгновенное подтверждение бронирования',
    details: [
      'Поддержка всех популярных способов оплаты',
      'PCI DSS сертификация безопасности',
      'Мгновенное получение электронного чека',
      '3D Secure проверка для дополнительной защиты'
    ],
    color: 'from-accent to-primary'
  },
  {
    icon: 'Bell',
    title: 'Напоминания',
    description: 'Автоматические уведомления о предстоящих встречах',
    details: [
      'SMS-уведомления за 24 часа до встречи',
      'Email-напоминания с подробной информацией',
      'Push-уведомления в приложении',
      'Возможность настройки времени напоминаний'
    ],
    color: 'from-primary to-accent'
  },
  {
    icon: 'Users',
    title: 'Проверенные эксперты',
    description: 'Только сертифицированные специалисты с опытом',
    details: [
      'Проверка документов и сертификатов',
      'Система рейтингов и отзывов',
      'Портфолио и кейсы работ',
      'Гарантия профессионализма'
    ],
    color: 'from-secondary to-primary'
  },
  {
    icon: 'Star',
    title: 'Гарантия качества',
    description: 'Возврат средств, если услуга вас не устроит',
    details: [
      'Возврат 100% при отмене за 24 часа',
      'Гарантия качества услуг',
      'Страхование от форс-мажора',
      'Служба поддержки 24/7'
    ],
    color: 'from-accent to-secondary'
  },
  {
    icon: 'Shield',
    title: 'Защита данных',
    description: 'Конфиденциальность и безопасность ваших данных',
    details: [
      'Шифрование всех персональных данных',
      'Соответствие GDPR и 152-ФЗ',
      'Двухфакторная аутентификация',
      'Регулярные аудиты безопасности'
    ],
    color: 'from-primary to-secondary'
  },
  {
    icon: 'Zap',
    title: 'Автоматизация',
    description: 'Полностью автоматизированный процесс бронирования',
    details: [
      'Интеграция с CRM-системами',
      'Автоматическое выставление счетов',
      'Электронный документооборот',
      'API для интеграции с вашим сайтом'
    ],
    color: 'from-secondary to-accent'
  },
  {
    icon: 'MessageSquare',
    title: 'Обратная связь',
    description: 'Система отзывов и оценок после каждой услуги',
    details: [
      'Возможность оставить подробный отзыв',
      'Рейтинговая система от 1 до 5 звезд',
      'Ответы специалистов на отзывы',
      'Модерация для защиты от фейковых отзывов'
    ],
    color: 'from-accent to-primary'
  }
];

const stats = [
  { value: '50,000+', label: 'Довольных клиентов', icon: 'Users' },
  { value: '1,000+', label: 'Проверенных экспертов', icon: 'Award' },
  { value: '98%', label: 'Положительных отзывов', icon: 'Star' },
  { value: '24/7', label: 'Поддержка клиентов', icon: 'Headphones' }
];

export default function Benefits() {
  return (
    <div className="min-h-screen">
      <header className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-3xl">📅</div>
            <h1 className="text-2xl font-bold gradient-text">BookNow</h1>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <Link to="/benefits" className="text-primary font-semibold">Преимущества</Link>
            <Link to="/about" className="hover:text-primary transition-colors">О нас</Link>
            <Link to="/blog" className="hover:text-primary transition-colors">Блог</Link>
          </nav>
          <Button className="gradient-primary">
            <Icon name="LogIn" className="mr-2 h-4 w-4" />
            Войти
          </Button>
        </div>
      </header>

      <section className="gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Преимущества платформы
            </h2>
            <p className="text-xl md:text-2xl text-white/90">
              Всё, что нужно для комфортного бронирования услуг онлайн
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <Icon name={stat.icon} className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="overflow-hidden animate-fade-in hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="grid md:grid-cols-[300px_1fr] gap-0">
                  <div className={`bg-gradient-to-br ${benefit.color} p-8 flex flex-col items-center justify-center text-white`}>
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                      <Icon name={benefit.icon} className="h-12 w-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-center">{benefit.title}</h3>
                  </div>
                  <div className="p-8">
                    <p className="text-lg text-muted-foreground mb-6">{benefit.description}</p>
                    <div className="space-y-3">
                      {benefit.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Icon name="CheckCircle2" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-foreground">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="gradient-primary text-white p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Как работает система бронирования?
                </h2>
                <p className="text-xl text-white/90">
                  Простой процесс в 4 шага
                </p>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: '1', title: 'Выберите услугу', desc: 'Просмотрите каталог и найдите нужную услугу', icon: 'Search' },
                    { step: '2', title: 'Выберите время', desc: 'Укажите удобную дату и время в календаре', icon: 'Calendar' },
                    { step: '3', title: 'Оплатите', desc: 'Безопасно оплатите любым удобным способом', icon: 'CreditCard' },
                    { step: '4', title: 'Получите подтверждение', desc: 'Моментально получите подтверждение на email', icon: 'Mail' }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
                        <span className="text-2xl font-bold text-primary">{item.step}</span>
                        <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                          <Icon name={item.icon} className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Начните пользоваться сегодня
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Присоединяйтесь к тысячам довольных клиентов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Icon name="Rocket" className="mr-2 h-5 w-5" />
                Создать аккаунт
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white hover:bg-white/90">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">📅</div>
                <h3 className="text-xl font-bold">BookNow</h3>
              </div>
              <p className="text-sm text-background/80">
                Современная платформа для бронирования услуг онлайн
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Консультации</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Обучение</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Курсы</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Наставничество</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><Link to="/about" className="hover:text-background transition-colors">О нас</Link></li>
                <li><a href="#" className="hover:text-background transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Контакты</a></li>
                <li><Link to="/blog" className="hover:text-background transition-colors">Блог</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Политика</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Условия</a></li>
                <li><a href="#" className="hover:text-background transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            © 2024 BookNow. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
