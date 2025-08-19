import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('origins');

  const sections = [
    { id: 'origins', title: 'Происхождения', icon: 'Users', skull: '💀' },
    { id: 'careers', title: 'Карьеры', icon: 'Briefcase', skull: '⚔️' },
    { id: 'equipment', title: 'Снаряжение', icon: 'Sword', skull: '🗡️' },
    { id: 'rules', title: 'Правила', icon: 'Book', skull: '📜' },
    { id: 'spells', title: 'Заклинания', icon: 'Sparkles', skull: '🔮' },
    { id: 'faith', title: 'Вера', icon: 'Cross', skull: '⛪' },
    { id: 'bestiary', title: 'Бестиарий', icon: 'Dragon', skull: '🐲' },
    { id: 'world', title: 'Мир', icon: 'Globe', skull: '🏰' }
  ];

  const sampleData = {
    origins: [
      { name: 'Имперец', description: 'Житель великой Империи, центра цивилизации', stats: 'WS+10, BS+5, Fel+5', links: ['Солдат', 'Торговец'] },
      { name: 'Дварф', description: 'Стойкий горный народ, мастера кузнечного дела', stats: 'T+10, WP+10, Fel-10', links: ['Воин', 'Ремесленник'] },
      { name: 'Эльф', description: 'Древний народ с магическими способностями', stats: 'Dex+20, Int+10, T-10', links: ['Маг', 'Разведчик'] }
    ],
    careers: [
      { name: 'Солдат', description: 'Профессиональный воин имперской армии', advance: 'WS+20, BS+15, S+10', links: ['Снаряжение: Меч'] },
      { name: 'Маг', description: 'Изучающий тайны магии', advance: 'Int+20, WP+15, Mag+3', links: ['Заклинания: Малая магия'] },
      { name: 'Разведчик', description: 'Следопыт и охотник', advance: 'BS+20, Dex+15, Per+10', links: ['Снаряжение: Лук'] }
    ],
    equipment: [
      { name: 'Меч', description: 'Классическое оружие ближнего боя', stats: 'Урон: SB+4, Группа: Обычное', links: ['Солдат', 'Воин'] },
      { name: 'Лук', description: 'Дальнобойное оружие для охоты', stats: 'Урон: 3, Дальность: 24/48', links: ['Разведчик'] },
      { name: 'Кольчуга', description: 'Защитная броня из металлических колец', stats: 'Броня: 1 (Корпус, Руки)', links: ['Солдат'] }
    ],
    spells: [
      { name: 'Малая магия', description: 'Простые заклинания для начинающих', stats: 'ИМ: 4, Дистанция: Касание', links: ['Маг'] },
      { name: 'Огненный шар', description: 'Метательное заклинание огня', stats: 'ИМ: 12, Урон: 4, Дистанция: 48', links: ['Заклинания: Малая магия'] }
    ],
    rules: [
      { name: 'Бросок кубиков', description: 'Основная механика игры использует d100', stats: 'Успех: <= характеристики', links: [] },
      { name: 'Инициатива', description: 'Порядок действий в бою', stats: 'I + 1d10', links: ['Карьеры'] }
    ],
    faith: [
      { name: 'Сигмар', description: 'Бог-император, покровитель Империи', stats: 'Домены: Война, Защита', links: ['Происхождения: Имперец'] },
      { name: 'Ульрик', description: 'Бог волков и зимы', stats: 'Домены: Природа, Война', links: [] }
    ],
    bestiary: [
      { name: 'Гоблин', description: 'Мелкий зеленокожий', stats: 'WS: 25, BS: 30, T: 25', links: ['Снаряжение: Копье'] },
      { name: 'Орк', description: 'Крупный и агрессивный зеленокожий', stats: 'WS: 35, S: 35, T: 35', links: ['Снаряжение: Топор'] }
    ],
    world: [
      { name: 'Империя', description: 'Величайшая человеческая нация', stats: 'Столица: Альтдорф', links: ['Происхождения: Имперец'] },
      { name: 'Карак Кадрин', description: 'Дварфская крепость горных перевалов', stats: 'Тип: Крепость', links: ['Происхождения: Дварф'] }
    ]
  };

  const CrossLink = ({ text, section }: { text: string; section?: string }) => {
    if (!section) return <span className="text-warhammer-dark">{text}</span>;
    
    return (
      <button
        onClick={() => setActiveSection(section)}
        className="text-warhammer-gold hover:text-warhammer-beige underline transition-colors font-medium"
      >
        {text}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gothic-gradient text-foreground">
      {/* Gothic Header */}
      <header className="bg-blood-gradient text-white shadow-2xl border-b-4 border-warhammer-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-warhammer-blood/20 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-6">
              <span className="text-6xl">💀</span>
              <h1 className="font-cinzel text-6xl font-bold tracking-wider drop-shadow-lg">
                WARHAMMER
              </h1>
              <span className="text-6xl">💀</span>
            </div>
            <h2 className="font-cinzel text-3xl font-semibold mb-4 text-warhammer-gold drop-shadow-md">
              The Old World Roleplay
            </h2>
            <p className="font-cormorant text-xl italic max-w-3xl mx-auto text-warhammer-beige">
              В мрачных глубинах Старого Мира нет места героям — есть лишь выжившие
            </p>
            <div className="mt-6 text-warhammer-blood text-lg font-bold">
              ⚔️ In the grim darkness of the Old World, there is only WAR ⚔️
            </div>
          </div>
        </div>
      </header>

      {/* Dark Navigation */}
      <nav className="bg-warhammer-dark/95 backdrop-blur-sm sticky top-0 z-40 shadow-xl border-b-2 border-warhammer-steel">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveSection(section.id)}
                className={`font-cormorant font-semibold transition-all hover:scale-105 border-warhammer-steel
                  ${activeSection === section.id 
                    ? 'bg-warhammer-gold text-warhammer-dark shadow-lg' 
                    : 'bg-warhammer-shadow hover:bg-warhammer-steel text-warhammer-beige'
                  }`}
              >
                <span className="mr-2">{section.skull}</span>
                <Icon name={section.icon as any} className="w-4 h-4 mr-2" />
                {section.title}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="animate-fade-in">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="font-cinzel text-4xl font-bold text-warhammer-dark mb-4">
              {sections.find(s => s.id === activeSection)?.title}
            </h2>
            <Separator className="w-32 mx-auto bg-warhammer-gold h-1" />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleData[activeSection as keyof typeof sampleData]?.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/95 backdrop-blur-sm border-2 border-warhammer-gold/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-cinzel text-xl text-warhammer-dark flex items-center gap-2">
                      <Icon 
                        name={sections.find(s => s.id === activeSection)?.icon as any} 
                        className="w-5 h-5 text-warhammer-gold" 
                      />
                      {item.name}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-warhammer-beige text-warhammer-dark font-cormorant">
                      {sections.find(s => s.id === activeSection)?.title}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="font-cormorant text-base leading-relaxed text-warhammer-dark">
                    {item.description}
                  </CardDescription>
                  
                  {item.stats && (
                    <div className="bg-warhammer-parchment p-3 rounded-lg border border-warhammer-gold/30">
                      <p className="font-merriweather text-sm font-medium text-warhammer-dark">
                        📊 {item.stats}
                      </p>
                    </div>
                  )}
                  
                  {item.advance && (
                    <div className="bg-warhammer-parchment p-3 rounded-lg border border-warhammer-gold/30">
                      <p className="font-merriweather text-sm font-medium text-warhammer-dark">
                        📈 {item.advance}
                      </p>
                    </div>
                  )}

                  {item.links && item.links.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-cormorant font-semibold text-sm text-warhammer-dark">
                        🔗 Связанные разделы:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {item.links.map((link, linkIndex) => {
                          const [linkSection, linkText] = link.includes(':') ? link.split(': ') : [null, link];
                          const targetSection = linkSection?.toLowerCase().replace('происхождения', 'origins')
                            .replace('карьеры', 'careers')
                            .replace('снаряжение', 'equipment')
                            .replace('заклинания', 'spells');
                          
                          return (
                            <Badge 
                              key={linkIndex} 
                              variant="outline" 
                              className="cursor-pointer hover:bg-warhammer-gold hover:text-white transition-colors font-cormorant"
                              onClick={() => targetSection && setActiveSection(targetSection)}
                            >
                              {linkText || link}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Navigation Footer */}
          <div className="mt-12 bg-warhammer-dark text-white p-6 rounded-xl">
            <h3 className="font-cinzel text-xl font-bold mb-4 text-center text-warhammer-beige">
              🗂️ Быстрая навигация
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  className="justify-start text-white hover:bg-warhammer-gold/20 hover:text-warhammer-beige font-cormorant"
                  onClick={() => setActiveSection(section.id)}
                >
                  <Icon name={section.icon as any} className="w-4 h-4 mr-2" />
                  {section.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-warhammer-dark text-white mt-16">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="font-cormorant text-lg">
            ⚔️ В grimdark-будущем есть только война... и отличные ролевые игры! ⚔️
          </p>
          <p className="font-merriweather text-sm mt-2 text-warhammer-beige">
            Справочник по Warhammer Fantasy Roleplay • Старый Мир ждёт героев
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;