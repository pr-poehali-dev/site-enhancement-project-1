import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: '5 трендов онлайн-обучения в 2024',
    excerpt: 'Как изменился рынок образовательных услуг и что выбирают современные пользователи. Анализ последних тенденций в сфере дистанционного обучения.',
    content: 'Рынок онлайн-образования переживает беспрецедентный рост. Эксперты прогнозируют увеличение объема рынка на 200% к концу 2024 года.',
    category: 'Тренды',
    readTime: '5 мин',
    date: '15 декабря 2024',
    image: '📈',
    author: 'Мария Петрова',
    views: '2,450'
  },
  {
    id: 2,
    title: 'Как выбрать эксперта для консультации',
    excerpt: 'Пошаговое руководство по поиску специалиста и подготовке к встрече. Важные критерии отбора и вопросы, которые стоит задать.',
    content: 'Выбор правильного эксперта — ключ к успешной консультации. В этой статье мы разберем критерии, которые помогут найти идеального специалиста.',
    category: 'Советы',
    readTime: '7 мин',
    date: '10 декабря 2024',
    image: '🎯',
    author: 'Алексей Иванов',
    views: '3,120'
  },
  {
    id: 3,
    title: 'Преимущества системы бронирования',
    excerpt: 'Почему бизнесу выгодно использовать автоматизированное бронирование услуг. Реальные кейсы и статистика внедрения.',
    content: 'Автоматизация процесса бронирования экономит до 70% времени менеджеров и увеличивает конверсию на 40%.',
    category: 'Бизнес',
    readTime: '6 мин',
    date: '5 декабря 2024',
    image: '💡',
    author: 'Дмитрий Соколов',
    views: '1,890'
  },
  {
    id: 4,
    title: 'Психология онлайн-встреч: как подготовиться',
    excerpt: 'Советы психологов о том, как получить максимум от дистанционной консультации. Создание комфортной атмосферы и правильный настрой.',
    content: 'Онлайн-формат имеет свои особенности. Узнайте, как подготовиться к виртуальной встрече для достижения лучших результатов.',
    category: 'Психология',
    readTime: '8 мин',
    date: '1 декабря 2024',
    image: '🧠',
    author: 'Елена Новикова',
    views: '2,780'
  },
  {
    id: 5,
    title: 'Как монетизировать экспертность онлайн',
    excerpt: 'Практическое руководство для специалистов: от создания личного бренда до запуска консультаций. Стратегии продвижения и ценообразования.',
    content: 'Превратите свои знания в доход. Пошаговый план запуска консультационной практики в онлайн-формате.',
    category: 'Бизнес',
    readTime: '10 мин',
    date: '28 ноября 2024',
    image: '💰',
    author: 'Игорь Волков',
    views: '4,560'
  },
  {
    id: 6,
    title: 'Топ-10 инструментов для онлайн-экспертов',
    excerpt: 'Обзор лучших платформ и сервисов для проведения консультаций, вебинаров и курсов. Сравнение функционала и цен.',
    content: 'От видеоконференций до CRM-систем — подборка must-have инструментов для современного консультанта.',
    category: 'Инструменты',
    readTime: '12 мин',
    date: '25 ноября 2024',
    image: '🛠️',
    author: 'Ольга Кузнецова',
    views: '3,340'
  },
  {
    id: 7,
    title: 'История успеха: от фрилансера до эксперта',
    excerpt: 'Интервью с топовым консультантом платформы. Путь от первых клиентов до стабильного дохода и узнаваемости в нише.',
    content: 'Реальная история специалиста, который за год вырос с 0 до 200+ довольных клиентов на BookNow.',
    category: 'Кейсы',
    readTime: '9 мин',
    date: '20 ноября 2024',
    image: '🌟',
    author: 'Анна Смирнова',
    views: '5,120'
  },
  {
    id: 8,
    title: 'Безопасность онлайн-платежей: что нужно знать',
    excerpt: 'Как защищены ваши данные при оплате услуг онлайн. Разбор технологий шифрования и стандартов безопасности.',
    content: 'Понимание принципов безопасности платежей поможет вам чувствовать себя уверенно при онлайн-транзакциях.',
    category: 'Безопасность',
    readTime: '6 мин',
    date: '15 ноября 2024',
    image: '🔒',
    author: 'Сергей Федоров',
    views: '2,210'
  },
  {
    id: 9,
    title: 'Эффективное тайм-менеджмент для экспертов',
    excerpt: 'Как организовать расписание консультаций, чтобы работать продуктивно и не выгорать. Техники планирования и автоматизации.',
    content: 'Баланс между количеством клиентов и качеством услуг — главный вызов для консультанта. Узнайте, как его достичь.',
    category: 'Продуктивность',
    readTime: '7 мин',
    date: '10 ноября 2024',
    image: '⏰',
    author: 'Виктор Попов',
    views: '2,890'
  }
];

const categories = ['Все', 'Тренды', 'Советы', 'Бизнес', 'Психология', 'Инструменты', 'Кейсы', 'Безопасность', 'Продуктивность'];

const featuredArticle = articles[0];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'Все' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <Link to="/about" className="hover:text-primary transition-colors">О нас</Link>
            <Link to="/blog" className="text-primary font-semibold">Блог</Link>
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
              Блог BookNow
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Полезные статьи о бронировании, экспертизе и развитии бизнеса
            </p>
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Поиск статей..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-lg bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
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
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icon name="Flame" className="h-6 w-6 text-primary" />
              Главная статья
            </h3>
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in">
              <div className="grid md:grid-cols-[400px_1fr] gap-0">
                <div className="gradient-primary p-12 flex items-center justify-center text-white">
                  <div className="text-9xl">{featuredArticle.image}</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="text-sm">{featuredArticle.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" className="h-4 w-4" />
                      {featuredArticle.readTime}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Eye" className="h-4 w-4" />
                      {featuredArticle.views}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                        {featuredArticle.author[0]}
                      </div>
                      <div>
                        <p className="font-semibold">{featuredArticle.author}</p>
                        <p className="text-sm text-muted-foreground">{featuredArticle.date}</p>
                      </div>
                    </div>
                    <Button className="gradient-primary">
                      Читать статью
                      <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">
              {selectedCategory === 'Все' ? 'Все статьи' : `Категория: ${selectedCategory}`}
            </h3>
            {filteredArticles.length === 0 ? (
              <Card className="p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-xl text-muted-foreground">Статьи не найдены</p>
                <p className="text-muted-foreground mt-2">Попробуйте изменить фильтры или поисковый запрос</p>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article, index) => (
                  <Card 
                    key={article.id}
                    className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardHeader>
                      <div className="text-6xl mb-4">{article.image}</div>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge>{article.category}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Icon name="Clock" className="h-3 w-3" />
                          {article.readTime}
                        </span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Icon name="Eye" className="h-3 w-3" />
                          {article.views}
                        </span>
                      </div>
                      <CardTitle className="text-xl hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-base line-clamp-3">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold">
                            {article.author[0]}
                          </div>
                          <div>
                            <p className="text-sm font-semibold">{article.author}</p>
                            <p className="text-xs text-muted-foreground">{article.date}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Icon name="ArrowRight" className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="gradient-primary text-white p-12 text-center">
                <Icon name="Mail" className="h-16 w-16 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Подпишитесь на рассылку
                </h2>
                <p className="text-xl text-white/90 mb-6">
                  Получайте новые статьи и эксклюзивные материалы прямо на почту
                </p>
                <div className="max-w-md mx-auto flex gap-2">
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    className="bg-white text-foreground"
                  />
                  <Button variant="secondary" size="lg">
                    Подписаться
                  </Button>
                </div>
                <p className="text-sm text-white/70 mt-4">
                  Никакого спама. Только полезный контент. Отписаться можно в любой момент.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Хотите поделиться опытом?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Мы всегда рады публиковать статьи от экспертов платформы
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="PenTool" className="mr-2 h-5 w-5" />
              Предложить статью
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
