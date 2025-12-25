import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import Icon from '@/components/ui/icon';

const services = [
  {
    id: 1,
    title: 'Консультация эксперта',
    description: 'Персональная консультация с нашим специалистом по вашему вопросу',
    price: '3 000 ₽',
    duration: '60 мин',
    category: 'Консультации',
    image: '💼'
  },
  {
    id: 2,
    title: 'Мастер-класс',
    description: 'Групповое занятие с практическими заданиями и материалами',
    price: '5 000 ₽',
    duration: '120 мин',
    category: 'Обучение',
    image: '🎓'
  },
  {
    id: 3,
    title: 'Индивидуальный курс',
    description: 'Полный курс с персональным подходом и поддержкой',
    price: '25 000 ₽',
    duration: '10 занятий',
    category: 'Курсы',
    image: '🚀'
  },
  {
    id: 4,
    title: 'Аудит проекта',
    description: 'Профессиональный разбор вашего проекта с рекомендациями',
    price: '8 000 ₽',
    duration: '90 мин',
    category: 'Консультации',
    image: '🔍'
  },
  {
    id: 5,
    title: 'Корпоративное обучение',
    description: 'Обучение команды по индивидуальной программе',
    price: 'от 50 000 ₽',
    duration: '5 дней',
    category: 'Корпоратив',
    image: '🏢'
  },
  {
    id: 6,
    title: 'Наставничество',
    description: 'Месячное сопровождение с еженедельными встречами',
    price: '20 000 ₽',
    duration: '4 недели',
    category: 'Менторство',
    image: '⭐'
  }
];

const benefits = [
  {
    icon: 'Clock',
    title: 'Быстрое бронирование',
    description: 'Забронируйте услугу в два клика без звонков и ожидания'
  },
  {
    icon: 'Calendar',
    title: 'Гибкое расписание',
    description: 'Выбирайте удобное время из доступных слотов в календаре'
  },
  {
    icon: 'CreditCard',
    title: 'Безопасная оплата',
    description: 'Защищенные платежи и мгновенное подтверждение бронирования'
  },
  {
    icon: 'Bell',
    title: 'Напоминания',
    description: 'Автоматические уведомления о предстоящих встречах'
  },
  {
    icon: 'Users',
    title: 'Проверенные эксперты',
    description: 'Только сертифицированные специалисты с опытом'
  },
  {
    icon: 'Star',
    title: 'Гарантия качества',
    description: 'Возврат средств, если услуга вас не устроит'
  }
];

const articles = [
  {
    id: 1,
    title: '5 трендов онлайн-обучения в 2024',
    excerpt: 'Как изменился рынок образовательных услуг и что выбирают современные пользователи',
    category: 'Тренды',
    readTime: '5 мин',
    date: '15 декабря 2024',
    image: '📈'
  },
  {
    id: 2,
    title: 'Как выбрать эксперта для консультации',
    excerpt: 'Пошаговое руководство по поиску специалиста и подготовке к встрече',
    category: 'Советы',
    readTime: '7 мин',
    date: '10 декабря 2024',
    image: '🎯'
  },
  {
    id: 3,
    title: 'Преимущества системы бронирования',
    excerpt: 'Почему бизнесу выгодно использовать автоматизированное бронирование услуг',
    category: 'Бизнес',
    readTime: '6 мин',
    date: '5 декабря 2024',
    image: '💡'
  }
];

export default function Index() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');

  const categories = ['Все', ...Array.from(new Set(services.map(s => s.category)))];
  const filteredServices = selectedCategory === 'Все' 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <header className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl">📅</div>
            <h1 className="text-2xl font-bold gradient-text">BookNow</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#articles" className="hover:text-primary transition-colors">Статьи</a>
          </nav>
          <Button className="gradient-primary">
            <Icon name="LogIn" className="mr-2 h-4 w-4" />
            Войти
          </Button>
        </div>
      </header>

      <section className="gradient-primary text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Бронируйте услуги онлайн за 2 минуты
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Выбирайте удобное время, бронируйте и оплачивайте — всё в одном месте
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Icon name="Calendar" className="mr-2 h-5 w-5" />
                Выбрать услугу
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white hover:bg-white/90">
                <Icon name="Play" className="mr-2 h-5 w-5" />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Каталог услуг</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Более 100 специалистов готовы помочь вам в достижении целей
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <Card 
                key={service.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-5xl">{service.image}</div>
                    <Badge variant="secondary">{service.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" className="h-4 w-4" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <div className="text-2xl font-bold gradient-text">{service.price}</div>
                  </div>
                  <Button className="w-full gradient-primary">
                    <Icon name="Calendar" className="mr-2 h-4 w-4" />
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современная платформа для удобного бронирования услуг
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-muted/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4">
                  <Icon name={benefit.icon} className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Выбирайте удобное время в календаре
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Наша система автоматически показывает свободные слоты специалистов. 
                  Выбирайте дату и время, которое подходит именно вам.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Актуальное расписание</h4>
                      <p className="text-muted-foreground">Только реально доступные слоты</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Мгновенное подтверждение</h4>
                      <p className="text-muted-foreground">Получите подтверждение сразу после оплаты</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Гибкая отмена</h4>
                      <p className="text-muted-foreground">Отмените бронь за 24 часа без потерь</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center animate-scale-in">
                <Card className="shadow-2xl">
                  <CardContent className="pt-6">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md"
                    />
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <p className="text-sm font-semibold mb-2">Доступные слоты:</p>
                      <div className="grid grid-cols-3 gap-2">
                        {['09:00', '11:00', '14:00', '16:00', '18:00', '20:00'].map((time) => (
                          <Button key={time} variant="outline" size="sm">
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="articles" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Полезные статьи</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Читайте советы экспертов и будьте в курсе последних трендов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card 
                key={article.id}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="text-6xl mb-4">{article.image}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>{article.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                    <Button variant="ghost" size="sm">
                      Читать
                      <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Все статьи
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Готовы начать?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Присоединяйтесь к тысячам пользователей, которые уже оценили удобство нашей платформы
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="Rocket" className="mr-2 h-5 w-5" />
              Создать аккаунт
            </Button>
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
                <li><a href="#" className="hover:text-background transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Блог</a></li>
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
