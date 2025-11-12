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
  downloadUrl?: string;
}

const programs: Program[] = [
  { id: 1, name: 'Mozilla Firefox', version: '3.6.28', category: 'Браузеры', description: 'Последняя версия Firefox для Windows XP', size: '12 МБ', icon: '🦊' },
  { id: 2, name: 'Opera', version: '36.0', category: 'Браузеры', description: 'Быстрый и лёгкий браузер', size: '8 МБ', icon: '🔴' },
  { id: 3, name: 'Chrome', version: '49.0', category: 'Браузеры', description: 'Последняя поддерживаемая версия Chrome', size: '45 МБ', icon: '🌐' },
  { id: 4, name: 'Pale Moon', version: '27.9.4', category: 'Браузеры', description: 'Легкий форк Firefox для старых систем', size: '25 МБ', icon: '🌙' },
  { id: 5, name: 'Internet Explorer', version: '8.0', category: 'Браузеры', description: 'Встроенный браузер Windows XP', size: '16 МБ', icon: '🔷' },
  
  { id: 6, name: 'Winamp', version: '5.666', category: 'Мультимедиа', description: 'Легендарный аудиоплеер', size: '15 МБ', icon: '🎵' },
  { id: 7, name: 'VLC Media Player', version: '2.0.8', category: 'Мультимедиа', description: 'Универсальный видеоплеер', size: '24 МБ', icon: '🎬' },
  { id: 8, name: 'AIMP', version: '3.60', category: 'Мультимедиа', description: 'Мощный аудиоплеер', size: '7 МБ', icon: '🎧' },
  { id: 9, name: 'KMPlayer', version: '3.9.1.137', category: 'Мультимедиа', description: 'Медиаплеер с поддержкой всех форматов', size: '35 МБ', icon: '📺' },
  { id: 10, name: 'Media Player Classic', version: '1.7.13', category: 'Мультимедиа', description: 'Классический легкий видеоплеер', size: '14 МБ', icon: '▶️' },
  { id: 11, name: 'Audacity', version: '2.1.3', category: 'Мультимедиа', description: 'Редактор аудио файлов', size: '22 МБ', icon: '🎙️' },
  
  { id: 12, name: 'Notepad++', version: '6.9.2', category: 'Разработка', description: 'Продвинутый текстовый редактор', size: '3 МБ', icon: '📝' },
  { id: 13, name: 'Sublime Text', version: '2.0.2', category: 'Разработка', description: 'Современный редактор кода', size: '8 МБ', icon: '⌨️' },
  { id: 14, name: 'XAMPP', version: '1.8.3', category: 'Разработка', description: 'Локальный веб-сервер Apache + PHP + MySQL', size: '95 МБ', icon: '🖥️' },
  { id: 15, name: 'Eclipse', version: '3.8.1', category: 'Разработка', description: 'IDE для Java разработки', size: '180 МБ', icon: '☕' },
  
  { id: 16, name: 'FileZilla', version: '3.8.1', category: 'Интернет', description: 'FTP-клиент для передачи файлов', size: '6 МБ', icon: '📁' },
  { id: 17, name: 'uTorrent', version: '2.2.1', category: 'Интернет', description: 'Компактный торрент-клиент', size: '1 МБ', icon: '🔽' },
  { id: 18, name: 'Download Master', version: '6.14', category: 'Интернет', description: 'Менеджер загрузок файлов', size: '8 МБ', icon: '⬇️' },
  { id: 19, name: 'Thunderbird', version: '38.8.0', category: 'Интернет', description: 'Почтовый клиент от Mozilla', size: '28 МБ', icon: '📧' },
  
  { id: 20, name: 'CCleaner', version: '5.33', category: 'Утилиты', description: 'Очистка и оптимизация системы', size: '5 МБ', icon: '🧹' },
  { id: 21, name: 'Recuva', version: '1.53', category: 'Утилиты', description: 'Восстановление удаленных файлов', size: '4 МБ', icon: '🔄' },
  { id: 22, name: 'Defraggler', version: '2.21', category: 'Утилиты', description: 'Дефрагментация жесткого диска', size: '5 МБ', icon: '💾' },
  { id: 23, name: 'TeamViewer', version: '11.0', category: 'Утилиты', description: 'Удаленный доступ к компьютеру', size: '15 МБ', icon: '🖱️' },
  { id: 24, name: 'Daemon Tools Lite', version: '4.49.1', category: 'Утилиты', description: 'Монтирование виртуальных дисков', size: '18 МБ', icon: '💿' },
  
  { id: 25, name: 'WinRAR', version: '5.40', category: 'Архиваторы', description: 'Популярный архиватор файлов', size: '2 МБ', icon: '📦' },
  { id: 26, name: '7-Zip', version: '16.04', category: 'Архиваторы', description: 'Бесплатный архиватор с высокой степенью сжатия', size: '1 МБ', icon: '🗜️' },
  
  { id: 27, name: 'Skype', version: '7.40', category: 'Общение', description: 'Видеозвонки и мессенджер', size: '42 МБ', icon: '💬' },
  { id: 28, name: 'ICQ', version: '8.2', category: 'Общение', description: 'Классический мессенджер', size: '25 МБ', icon: '🌺' },
  { id: 29, name: 'QIP', version: '2012', category: 'Общение', description: 'Российский мессенджер для ICQ', size: '12 МБ', icon: '💭' },
  { id: 30, name: 'Miranda IM', version: '0.10.78', category: 'Общение', description: 'Мультипротокольный мессенджер', size: '3 МБ', icon: '🗨️' },
  
  { id: 31, name: 'Adobe Photoshop', version: 'CS2', category: 'Графика', description: 'Профессиональный редактор изображений', size: '320 МБ', icon: '🎨' },
  { id: 32, name: 'GIMP', version: '2.8.22', category: 'Графика', description: 'Бесплатный аналог Photoshop', size: '85 МБ', icon: '🖌️' },
  { id: 33, name: 'Paint.NET', version: '3.5.11', category: 'Графика', description: 'Простой редактор изображений', size: '6 МБ', icon: '🎭' },
  { id: 34, name: 'IrfanView', version: '4.54', category: 'Графика', description: 'Быстрый просмотрщик изображений', size: '2 МБ', icon: '🖼️' },
  
  { id: 35, name: 'Microsoft Office', version: '2007', category: 'Офис', description: 'Пакет офисных приложений', size: '600 МБ', icon: '📊' },
  { id: 36, name: 'LibreOffice', version: '5.2.7', category: 'Офис', description: 'Бесплатный офисный пакет', size: '220 МБ', icon: '📄' },
  { id: 37, name: 'Adobe Reader', version: '11.0', category: 'Офис', description: 'Просмотр PDF документов', size: '52 МБ', icon: '📕' },
  { id: 38, name: 'Foxit Reader', version: '7.3', category: 'Офис', description: 'Легкий PDF-ридер', size: '38 МБ', icon: '📘' },
  
  { id: 39, name: 'Counter-Strike 1.6', version: '1.6', category: 'Игры', description: 'Легендарный шутер от первого лица', size: '300 МБ', icon: '🔫' },
  { id: 40, name: 'Heroes 3', version: 'Complete', category: 'Игры', description: 'Пошаговая стратегия в мире магии', size: '1.2 ГБ', icon: '⚔️' },
  { id: 41, name: 'GTA San Andreas', version: '1.0', category: 'Игры', description: 'Культовая игра в открытом мире', size: '4.7 ГБ', icon: '🚗' },
  { id: 42, name: 'Warcraft III', version: '1.27', category: 'Игры', description: 'Стратегия в реальном времени', size: '1.3 ГБ', icon: '🏰' },
  { id: 43, name: 'The Sims 2', version: 'Complete', category: 'Игры', description: 'Симулятор жизни', size: '5.5 ГБ', icon: '🏡' },
  { id: 44, name: 'NFS Most Wanted', version: '2005', category: 'Игры', description: 'Лучшая часть серии гонок', size: '3.5 ГБ', icon: '🏎️' },
  { id: 45, name: 'Half-Life 2', version: '1.0', category: 'Игры', description: 'Революционный шутер', size: '4.5 ГБ', icon: '👽' },
  { id: 46, name: 'Diablo 2', version: '1.14d', category: 'Игры', description: 'Классическая hack and slash', size: '2.5 ГБ', icon: '⚡' },
  { id: 47, name: 'Age of Empires II', version: 'HD', category: 'Игры', description: 'Историческая стратегия', size: '700 МБ', icon: '🏛️' },
  { id: 48, name: 'Minecraft', version: '1.5.2', category: 'Игры', description: 'Песочница с кубическим миром', size: '150 МБ', icon: '⛏️' },
  { id: 49, name: 'StarCraft: Brood War', version: '1.16.1', category: 'Игры', description: 'Космическая стратегия', size: '650 МБ', icon: '🚀' },
  { id: 50, name: 'Call of Duty 2', version: '1.3', category: 'Игры', description: 'Шутер времен Второй мировой', size: '4.2 ГБ', icon: '🎖️' },
  { id: 51, name: 'Gothic 2', version: '2.7', category: 'Игры', description: 'Ролевая игра в средневековом мире', size: '1.8 ГБ', icon: '🗡️' },
  { id: 52, name: 'Fallout 2', version: '1.02', category: 'Игры', description: 'Постапокалиптическая RPG', size: '650 МБ', icon: '☢️' },
  { id: 53, name: 'Max Payne 2', version: '1.0', category: 'Игры', description: 'Нуар-экшен с bullet time', size: '1.5 ГБ', icon: '🕵️' },
  { id: 54, name: 'Civilization IV', version: '3.19', category: 'Игры', description: 'Глобальная пошаговая стратегия', size: '2.8 ГБ', icon: '🌍' },
  { id: 55, name: 'Portal', version: '1.0', category: 'Игры', description: 'Головоломка от Valve', size: '2.2 ГБ', icon: '🔵' },
  { id: 56, name: 'Serious Sam', version: '2.0', category: 'Игры', description: 'Безумный шутер с толпами врагов', size: '1.3 ГБ', icon: '💥' },
  
  { id: 57, name: 'Nero Burning ROM', version: '7.11', category: 'Утилиты', description: 'Запись CD и DVD дисков', size: '85 МБ', icon: '💿' },
  { id: 58, name: 'Alcohol 120%', version: '2.0.3', category: 'Утилиты', description: 'Создание образов дисков', size: '12 МБ', icon: '🔥' },
  { id: 59, name: 'Partition Magic', version: '8.0', category: 'Утилиты', description: 'Управление разделами диска', size: '35 МБ', icon: '💽' },
  { id: 60, name: 'Acronis True Image', version: '2014', category: 'Утилиты', description: 'Резервное копирование системы', size: '140 МБ', icon: '💾' },
  
  { id: 61, name: 'Corel Draw', version: 'X3', category: 'Графика', description: 'Векторная графика', size: '450 МБ', icon: '✏️' },
  { id: 62, name: 'Inkscape', version: '0.92', category: 'Графика', description: 'Бесплатный редактор векторной графики', size: '75 МБ', icon: '🖊️' },
  { id: 63, name: 'Blender', version: '2.49', category: 'Графика', description: '3D моделирование и анимация', size: '28 МБ', icon: '🎬' },
  
  { id: 64, name: 'Total Commander', version: '9.22', category: 'Файловые менеджеры', description: 'Двухпанельный файловый менеджер', size: '6 МБ', icon: '📂' },
  { id: 65, name: 'Far Manager', version: '3.0', category: 'Файловые менеджеры', description: 'Консольный файловый менеджер', size: '5 МБ', icon: '⌨️' },
  
  { id: 66, name: 'Maxthon', version: '3.5.2', category: 'Браузеры', description: 'Браузер с облачной синхронизацией', size: '32 МБ', icon: '☁️' },
  { id: 67, name: 'K-Meleon', version: '76.3', category: 'Браузеры', description: 'Легкий браузер на движке Gecko', size: '15 МБ', icon: '🦎' },
  
  { id: 68, name: 'BSPlayer', version: '2.68', category: 'Мультимедиа', description: 'Легкий видеоплеер', size: '9 МБ', icon: '🎥' },
  { id: 69, name: 'Foobar2000', version: '1.3.17', category: 'Мультимедиа', description: 'Продвинутый аудиоплеер', size: '4 МБ', icon: '🎼' },
  { id: 70, name: 'K-Lite Codec Pack', version: '12.7.5', category: 'Мультимедиа', description: 'Набор кодеков для видео', size: '35 МБ', icon: '🎞️' },
  
  { id: 71, name: 'Pidgin', version: '2.10.12', category: 'Общение', description: 'Универсальный мессенджер', size: '15 МБ', icon: '🐦' },
  { id: 72, name: 'mIRC', version: '7.52', category: 'Общение', description: 'IRC клиент для чатов', size: '2 МБ', icon: '💻' },
  
  { id: 73, name: 'Python', version: '3.4.4', category: 'Разработка', description: 'Язык программирования Python', size: '25 МБ', icon: '🐍' },
  { id: 74, name: 'Node.js', version: '6.17.1', category: 'Разработка', description: 'JavaScript runtime', size: '15 МБ', icon: '🟩' },
  { id: 75, name: 'Git', version: '2.10.0', category: 'Разработка', description: 'Система контроля версий', size: '32 МБ', icon: '🔀' },
  { id: 76, name: 'Visual Studio', version: '2010', category: 'Разработка', description: 'IDE от Microsoft', size: '2.5 ГБ', icon: '🔷' },
  
  { id: 77, name: 'Virtual DJ', version: '7.4', category: 'Мультимедиа', description: 'DJ микшер', size: '45 МБ', icon: '🎚️' },
  { id: 78, name: 'Sony Vegas', version: '9.0', category: 'Мультимедиа', description: 'Видеомонтаж', size: '180 МБ', icon: '🎬' },
  { id: 79, name: 'Camtasia Studio', version: '8.6', category: 'Мультимедиа', description: 'Запись экрана', size: '250 МБ', icon: '📹' },
  
  { id: 80, name: 'World of Warcraft', version: '3.3.5a', category: 'Игры', description: 'Легендарная MMORPG', size: '12 ГБ', icon: '🐉' },
];

const categories = ['Все', 'Браузеры', 'Мультимедиа', 'Разработка', 'Интернет', 'Утилиты', 'Архиваторы', 'Общение', 'Графика', 'Офис', 'Игры', 'Файловые менеджеры'];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || program.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (program: Program) => {
    if (program.downloadUrl) {
      window.open(program.downloadUrl, '_blank');
    } else {
      alert(`Информация для скачивания ${program.name}:\n\nВерсия: ${program.version}\nРазмер: ${program.size}\n\nДля скачивания программы посетите официальный сайт или используйте поиск в интернете.`);
    }
  };

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
              <p className="text-xp-blue-light text-lg">Совместимые программы для Windows XP SP3 32-bit • Всего программ: {programs.length}</p>
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

                <button 
                  onClick={() => handleDownload(program)}
                  className="w-full py-3 px-4 bg-gradient-to-b from-xp-green to-xp-green-dark text-white font-bold rounded border-2 border-xp-green-dark shadow-xp-button hover:from-xp-green-light hover:to-xp-green transition-all flex items-center justify-center gap-2 active:scale-95"
                >
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