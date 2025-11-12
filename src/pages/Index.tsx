import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface Program {
  id: number;
  name: string;
  version: string;
  category: string;
  description: string;
  size: string;
  icon: string;
}

const programs: Program[] = [
  { id: 1, name: 'Mozilla Firefox', version: '3.6.28', category: 'Браузеры', description: 'Последняя версия Firefox для Windows XP', size: '12 МБ', icon: '🦊' },
  { id: 2, name: 'Opera', version: '36.0', category: 'Браузеры', description: 'Быстрый и лёгкий браузер', size: '8 МБ', icon: '🔴' },
  { id: 3, name: 'Chrome', version: '49.0', category: 'Браузеры', description: 'Последняя поддерживаемая версия Chrome', size: '45 МБ', icon: '🌐' },
  { id: 4, name: 'Winamp', version: '5.666', category: 'Мультимедиа', description: 'Легендарный аудиоплеер', size: '15 МБ', icon: '🎵' },
  { id: 5, name: 'VLC Media Player', version: '2.0.8', category: 'Мультимедиа', description: 'Универсальный видеоплеер', size: '24 МБ', icon: '🎬' },
  { id: 6, name: 'AIMP', version: '3.60', category: 'Мультимедиа', description: 'Мощный аудиоплеер', size: '7 МБ', icon: '🎧' },
  { id: 7, name: 'Notepad++', version: '6.9.2', category: 'Разработка', description: 'Продвинутый текстовый редактор', size: '3 МБ', icon: '📝' },
  { id: 8, name: 'FileZilla', version: '3.8.1', category: 'Интернет', description: 'FTP-клиент для передачи файлов', size: '6 МБ', icon: '📁' },
  { id: 9, name: 'CCleaner', version: '5.33', category: 'Утилиты', description: 'Очистка и оптимизация системы', size: '5 МБ', icon: '🧹' },
  { id: 10, name: 'WinRAR', version: '5.40', category: 'Архиваторы', description: 'Популярный архиватор файлов', size: '2 МБ', icon: '📦' },
  { id: 11, name: '7-Zip', version: '16.04', category: 'Архиваторы', description: 'Бесплатный архиватор с высокой степенью сжатия', size: '1 МБ', icon: '🗜️' },
  { id: 12, name: 'Skype', version: '7.40', category: 'Общение', description: 'Видеозвонки и мессенджер', size: '42 МБ', icon: '💬' },
];

const categories = ['Все', 'Браузеры', 'Мультимедиа', 'Разработка', 'Интернет', 'Утилиты', 'Архиваторы', 'Общение'];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || program.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-xp-desktop">
      <header className="bg-gradient-to-b from-xp-blue to-xp-blue-dark border-b-2 border-xp-blue-dark shadow-lg">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-xp-green to-xp-green-dark rounded-lg shadow-xp flex items-center justify-center text-4xl border-2 border-white/30">
              🪟
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]">
                Windows XP Programs
              </h1>
              <p className="text-xp-blue-light text-lg">Совместимые программы для Windows XP SP3 32-bit</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <Input
                type="text"
                placeholder="Поиск программ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-white border-2 border-xp-border shadow-xp-inset text-lg"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="bg-gradient-to-b from-xp-gray to-xp-gray-dark rounded-lg shadow-xp border-2 border-xp-border p-6">
            <h2 className="text-xl font-bold text-xp-text mb-4 flex items-center gap-2">
              <Icon name="FolderOpen" size={24} className="text-xp-blue" />
              Категории
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded border-2 font-medium transition-all shadow-xp-button ${
                    selectedCategory === category
                      ? 'bg-gradient-to-b from-xp-blue to-xp-blue-dark text-white border-xp-blue-dark'
                      : 'bg-gradient-to-b from-white to-xp-gray-light text-xp-text border-xp-border hover:from-xp-blue-light hover:to-xp-blue hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map(program => (
            <Card key={program.id} className="bg-gradient-to-b from-white to-xp-gray-light border-2 border-xp-border shadow-xp hover:shadow-xp-hover transition-all duration-200 overflow-hidden">
              <div className="bg-gradient-to-r from-xp-blue to-xp-blue-dark p-4 border-b-2 border-xp-blue-dark">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded border-2 border-white/50 shadow-md flex items-center justify-center text-3xl">
                    {program.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white text-lg truncate drop-shadow-sm">
                      {program.name}
                    </h3>
                    <Badge className="bg-xp-green text-white border-xp-green-dark shadow-sm">
                      v{program.version}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <p className="text-xp-text-dark mb-4 text-sm leading-relaxed">
                  {program.description}
                </p>
                
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-2 text-xp-text-muted">
                    <Icon name="HardDrive" size={16} />
                    <span className="font-medium">{program.size}</span>
                  </div>
                  <Badge variant="outline" className="border-xp-border text-xp-text">
                    {program.category}
                  </Badge>
                </div>

                <button className="w-full py-3 px-4 bg-gradient-to-b from-xp-green to-xp-green-dark text-white font-bold rounded border-2 border-xp-green-dark shadow-xp-button hover:from-xp-green-light hover:to-xp-green transition-all flex items-center justify-center gap-2">
                  <Icon name="Download" size={18} />
                  Скачать
                </button>
              </div>
            </Card>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-b from-xp-gray to-xp-gray-dark rounded-full shadow-xp border-2 border-xp-border mb-4">
              <Icon name="SearchX" size={48} className="text-xp-text-muted" />
            </div>
            <h3 className="text-2xl font-bold text-xp-text mb-2">Программы не найдены</h3>
            <p className="text-xp-text-muted">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </main>

      <footer className="bg-gradient-to-b from-xp-blue to-xp-blue-dark border-t-2 border-xp-blue-dark mt-12 py-8">
        <div className="container mx-auto px-6 text-center text-white">
          <p className="text-lg drop-shadow-sm">© 2025 Windows XP Programs Archive</p>
          <p className="text-xp-blue-light mt-2">Сохраняя совместимость с легендарной системой</p>
        </div>
      </footer>
    </div>
  );
}