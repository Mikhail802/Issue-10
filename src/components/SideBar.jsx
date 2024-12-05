// components/SideBar.js


import React from 'react';


const SideBar = ({
  isDropdownOpen,
  toggleDropdown,
  activeButton,
  handleArticleSelect   
}) => {
  return (
    <nav className="w-64 bg-gray-100 border-r border-gray-300 p-6 ml-64">
 {/* Убедитесь, что здесь нет фиксированного позиционирования */}
      <a className="text-blue-600 font-bold text-xl block mb-6 cursor-pointer hover:text-black">
        Zalupa Foundation Models
      </a>
      <ul className="space-y-4">
        <li>
          <button
            className={`w-full text-left p-4 rounded-lg transition ${
              activeButton === "Начало работы"
                ? "bg-blue-600 text-white"
                : "bg-white text-black hover:bg-blue-500 hover:text-white"
            }`}
            onClick={toggleDropdown}
          >
            Начало работы
          </button>
          {isDropdownOpen && (
            <ul className="mt-2 space-y-2">
              <li>
                <button
                  className={`w-70% text-left p-4 rounded-lg transition ml-4 ${
                    activeButton === "Начало работы с залупой"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-black hover:bg-blue-500 hover:text-white"
                  }`}
                  onClick={() => handleArticleSelect("Начало работы с залупой")}
                >
                  Начало работы с залупой
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left p-4 rounded-lg transition ml-4 ${
                    activeButton === "Начало работы с пенисом"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-black hover:bg-blue-500 hover:text-white"
                  }`}
                  onClick={() => handleArticleSelect("Начало работы с пенисом")}
                >
                  Начало работы с пенисом
                </button>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button
            className={`w-full text-left p-4 rounded-lg transition ${
              activeButton === "Пошаговые инструкции"
                ? "bg-blue-600 text-white"
                : "bg-white text-black hover:bg-blue-500 hover:text-white"
            }`}
          >
            Пошаговые инструкции
          </button>
        </li>
        <li>
          <button
            className={`w-full text-left p-4 rounded-lg transition ${
              activeButton === "Типа текст"
                ? "bg-blue-600 text-white"
                : "bg-white text-black hover:bg-blue-500 hover:text-white"
            }`}
          >
            Типа текст
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
