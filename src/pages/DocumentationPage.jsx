import React, { useState } from 'react';
import SideBar from '../components/SideBar';

const DocumentationPage = () => {
  const [selectedArticle, setSelectedArticle] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const articles = {
    "Начало работы ": `
      <h2 class="text-2xl font-bold mb-4">Начало работы</h2>
      <p class="text-gray-700 mb-4">Работа с системой начинается с изучения её основных принципов. Этот инструмент предоставляет мощные возможности для анализа, обработки и оптимизации данных. Здесь мы рассмотрим базовые шаги, которые помогут вам подготовить систему к использованию.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Основные шаги настройки</h3>
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li>Установите последнюю версию системы с официального сайта.</li>
        <li>Проверьте совместимость вашей операционной системы с требованиями программы.</li>
        <li>Настройте окружение для эффективного взаимодействия с системой (например, подключение баз данных).</li>
      </ul>
    `,
    "Начало работы": `
      <h2 class="text-2xl font-bold mb-4">Начало работы </h2>
      <p class="text-gray-700 mb-4">Система «Пенис» предназначена для управления сложными вычислительными процессами и анализа больших объёмов данных. Здесь вы узнаете, как правильно настроить и использовать её функции.</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">Подготовка к работе</h3>
      <ul class="list-decimal list-inside text-gray-700 mb-4">
        <li><strong>Установка:</strong> Загрузите последнюю версию программы и установите её на ваше устройство. Обратите внимание на параметры конфигурации.</li>
        <li><strong>Настройка:</strong> Используйте встроенный мастер настройки для выбора оптимальных параметров работы.</li>
        <li><strong>Использование:</strong> Запустите основные функции и проверьте производительность системы на тестовых данных.</li>
      </ul>
    `,
  };

  const handleArticleSelect = (articleTitle) => {
    setSelectedArticle(articleTitle);
    setActiveButton(articleTitle);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden font-sans">
      <SideBar
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        activeButton={activeButton}
        handleArticleSelect={handleArticleSelect}
      />
      <div className="flex-1 p-8  mx-4 md:mx-6 lg:mx-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-4">Документация</h1>
        <div dangerouslySetInnerHTML={{ __html: articles[selectedArticle] }} />
      </div>
    </div>
  );
};

export default DocumentationPage;
