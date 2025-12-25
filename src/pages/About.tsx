import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Алексей Петров',
    role: 'CEO & Основатель',
    image: '👨‍💼',
    description: 'Опыт в IT-индустрии более 15 лет. Создал несколько успешных стартапов.'
  },
  {
    name: 'Мария Иванова',
    role: 'Директор по развитию',
    image: '👩‍💻',
    description: 'Эксперт в области онлайн-сервисов и клиентского сервиса.'
  },
  {
    name: 'Дмитрий Сидоров',
    role: 'Технический директор',
    image: '👨‍🔧',
    description: 'Разработчик с 10-летним опытом создания высоконагруженных систем.'
  },
  {
    name: 'Екатерина Смирнова',
    role: 'Head of Design',
    image: '👩‍🎨',
    description: 'Создает интуитивные интерфейсы, которые нравятся пользователям.'
  }
];

const values = [
  {
    icon: 'Target',
    title: 'Клиентоориентированность',
    description: 'Мы создаем сервис, который решает реальные проблемы пользователей'
  },
  {
    icon: 'Lightbulb',
    title: 'Инновации',
    description: 'Постоянно внедряем новые технологии для улучшения опыта'
  },
  {
    icon: 'Heart',
    title: 'Забота',
    description: 'Поддержка 24/7 и внимательное отношение к каждому клиенту'
  },
  {
    icon: 'TrendingUp',
    title: 'Рост',
    description: 'Помогаем экспертам развивать бизнес и клиентам достигать целей'
  }
];

const milestones = [
  { year: '2020', title: 'Запуск платформы', description: 'Первые 100 пользователей и 10 экспертов' },
  { year: '2021', title: 'Масштабирование', description: 'Расширение на 10 городов, 1000+ пользователей' },
  { year: '2022', title: 'Новые функции', description: 'Запуск мобильного приложения и групповых бронирований' },
  { year: '2023', title: 'Международная экспансия', description: 'Выход на рынки СНГ, 50,000+ довольных клиентов' },
  { year: '2024', title: 'Лидер рынка', description: 'Более 1000 экспертов и 100,000+ успешных бронирований' }
];

export default function About() {
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
            <Link to="/benefits" className="hover:text-primary transition-colors">Преимущества</Link>
            <Link to="/about" className="text-primary font-semibold">О нас</Link>
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
              О нашей платформе
            </h2>
            <p className="text-xl md:text-2xl text-white/90">
              Мы создаем будущее онлайн-бронирования услуг
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Наша миссия
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  BookNow — это современная платформа, которая упрощает процесс бронирования услуг для миллионов пользователей. 
                  Мы верим, что каждый человек заслуживает доступ к качественным услугам экспертов без лишних барьеров.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Наша цель — создать экосистему, где специалисты могут эффективно управлять своим временем, 
                  а клиенты получают удобный доступ к профессиональным услугам.
                </p>
                <p className="text-lg text-muted-foreground">
                  За 4 года работы мы помогли провести более 100,000 успешных встреч и продолжаем расти каждый день.
                </p>
              </div>
              <div className="relative animate-scale-in">
                <div className="text-9xl text-center">🎯</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши ценности</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                      <Icon name={value.icon} className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Наш путь</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              От стартапа до лидера рынка онлайн-бронирования
            </p>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="text-3xl font-bold gradient-text mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative z-10 hidden md:block">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                        <Icon name="Check" className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Наша команда</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Профессионалы, которые делают BookNow лучше каждый день
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card 
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="gradient-primary text-white p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Статистика платформы
                </h2>
                <p className="text-xl text-white/90">
                  Цифры, которыми мы гордимся
                </p>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { value: '100,000+', label: 'Успешных бронирований', icon: 'Calendar' },
                    { value: '1,000+', label: 'Проверенных экспертов', icon: 'Users' },
                    { value: '50,000+', label: 'Довольных клиентов', icon: 'Heart' },
                    { value: '98%', label: 'Положительных отзывов', icon: 'Star' },
                    { value: '15', label: 'Городов присутствия', icon: 'MapPin' },
                    { value: '24/7', label: 'Поддержка', icon: 'Headphones' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <Icon name={stat.icon} className="h-10 w-10 mx-auto mb-3 text-primary" />
                      <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
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
              Присоединяйтесь к нам
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Станьте частью быстрорастущей платформы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Icon name="Briefcase" className="mr-2 h-5 w-5" />
                Стать экспертом
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white hover:bg-white/90">
                <Icon name="UserPlus" className="mr-2 h-5 w-5" />
                Создать аккаунт
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
