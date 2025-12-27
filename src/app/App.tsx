import { useState } from 'react';
import { 
  Plane, 
  Globe, 
  MapPin, 
  Luggage, 
  Coffee, 
  Hotel, 
  Utensils, 
  Navigation, 
  Users, 
  Sparkles, 
  Check, 
  Calendar, 
  Clock, 
  DollarSign,
  MessageCircle,
  Headphones,
  Wifi,
  ShoppingBag
} from 'lucide-react';
import { motion } from 'motion/react';

interface CourseModule {
  title: string;
  description: string;
  benefit: string;
  icon: React.ElementType;
}

const courseModules: CourseModule[] = [
  {
    title: "Аэропорт без стресса",
    description: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
    benefit: "Уверенность уже в первые часы за границей.",
    icon: Plane
  },
  {
    title: "В отеле: заселение и помощь",
    description: "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
    benefit: "Практика вежливых фраз и повседневной лексики.",
    icon: Hotel
  },
  {
    title: "Кафе и рестораны",
    description: "Заказ еды, вопросы про аллергены, счёт и чаевые.",
    benefit: "Развитие гастрономического словаря и уверенности в общении.",
    icon: Utensils
  },
  {
    title: "На улице: ориентирование и просьбы",
    description: "Как спросить дорогу, вызвать такси или найти аптеку.",
    benefit: "Понимание устной речи и произношения в реальных ситуациях.",
    icon: MapPin
  },
  {
    title: "Экстренные случаи",
    description: "Потеря вещей, болезнь, помощь полиции — всё это на английском.",
    benefit: "Важные фразы, которые могут спасти отпуск.",
    icon: Luggage
  },
  {
    title: "Туризм и развлечения",
    description: "Покупка билетов, экскурсии, общение с гидами, музеи и парки.",
    benefit: "Погружение в культурный контекст через язык.",
    icon: Globe
  },
  {
    title: "Дружба в путешествиях",
    description: "Как познакомиться с другими детьми или подростками за границей.",
    benefit: "Игровая практика диалогов и неформального общения.",
    icon: Users
  },
  {
    title: "Дипломный проект: «Мой идеальный отпуск»",
    description: "Ребёнок планирует воображаемое путешествие и представляет его на английском.",
    benefit: "Развитие связной речи и творческого самовыражения.",
    icon: Sparkles
  }
];

const benefits = [
  {
    title: "Живая практическая речь",
    description: "Акцент на практическую, живую речь, а не на грамматику ради грамматики.",
    icon: MessageCircle
  },
  {
    title: "Реальные ситуации",
    description: "Все ситуации — из реальной жизни путешественника.",
    icon: Navigation
  },
  {
    title: "Интерактивные задания",
    description: "Ролевые игры, аудиоситуации, мини-квесты.",
    icon: Sparkles
  },
  {
    title: "Результат A2–B1",
    description: "Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс.",
    icon: Check
  }
];

export default function App() {
  const [showCTA, setShowCTA] = useState(false);

  const handleEnroll = () => {
    alert('Спасибо за интерес! В реальном приложении здесь будет форма записи на курс.');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full"
            >
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-primary">Открыт набор на новый курс</span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
                Английский для путешествий
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Мечтаете свободно общаться за границей — от заказа кофе до поиска потерянного чемодана?
              </p>
            </div>

            <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
              Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, поездках и будущих путешествиях!
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnroll}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
            >
              <span className="text-lg">Записаться на курс</span>
              <Plane className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold">Для кого курс</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Первая группа</h3>
                  <p className="text-muted-foreground">2–5 класс</p>
                </div>
              </div>
              <p className="text-foreground/70">
                Основы разговорного английского для маленьких путешественников
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent">Вторая группа</h3>
                  <p className="text-muted-foreground">6–8 класс</p>
                </div>
              </div>
              <p className="text-foreground/70">
                Углубленный курс для подростков с практикой сложных ситуаций
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <ShoppingBag className="w-6 h-6 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold">Программа курса</h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              8 практических модулей для уверенного общения в любой ситуации
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {courseModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <module.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                    <p className="text-foreground/70 mb-3">
                      {module.description}
                    </p>
                    <div className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-primary/90 italic">{module.benefit}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Special */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold">Почему этот курс особенный?</h2>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-foreground/70 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Headphones className="w-6 h-6 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold">Что потребуется</h2>
            </div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Стационарный компьютер или ноутбук с наушниками и микрофоном</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wifi className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Стабильный интернет и Zoom</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Price */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Расписание</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-bold text-primary">Четверг, 15:00 (МСК)</span>
                  </div>
                  <p className="text-foreground/70 ml-8">Группа 2–5 класс</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="font-bold text-accent">Пятница, 15:30 (МСК)</span>
                  </div>
                  <p className="text-foreground/70 ml-8">Группа 6–8 класс</p>
                </div>
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-6">
                <DollarSign className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Стоимость</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary rounded-xl p-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-primary">12 000 ₽</span>
                  </div>
                  <p className="text-foreground/70">Полный курс (10 уроков)</p>
                  <p className="text-sm text-primary/80 mt-2">Выгодная цена за весь курс</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-accent">1 300 ₽</span>
                    <span className="text-muted-foreground">/ урок</span>
                  </div>
                  <p className="text-foreground/70">Абонемент</p>
                  <p className="text-sm text-muted-foreground mt-2">Оплата за каждое занятие</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-transparent via-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary">Набор открыт!</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Места ограничены!
            </h2>
            
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Группы маленькие — максимум 6 детей, чтобы каждый получил внимание.
            </p>

            <p className="text-lg text-primary/90">
              Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnroll}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all text-xl"
            >
              <span>Записаться на курс</span>
              <Plane className="w-7 h-7" />
            </motion.button>

            <p className="text-sm text-muted-foreground">
              Начните путешествие в мир свободного английского уже сегодня!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>© 2025 Английский для путешествий. Курс для детей 2-8 класс.</p>
        </div>
      </footer>
    </div>
  );
}
