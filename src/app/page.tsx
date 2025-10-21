"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 dark:from-blue-900/30 dark:to-cyan-800/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Профессиональные
                <span className="text-blue-600 dark:text-blue-400 block mt-2">
                  Сантехнические Услуги
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
                Быстро, качественно и надежно решаем любые проблемы с
                сантехникой. Работаем 24/7 для вашего комфорта.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Вызвать мастера
                </button>
                <button className="px-8 py-4 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-blue-600 dark:text-blue-400 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-blue-600 dark:border-blue-400">
                  Узнать цены
                </button>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    10+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Лет опыта
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    5000+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Довольных клиентов
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    24/7
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Поддержка
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl opacity-20 blur-3xl"></div>
              <div className="relative h-full w-full bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <svg
                  className="w-48 h-48 text-white/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  <path d="M17.3 16.9c-.2.4-.5.7-.9.9l1.3 1.3c.6-.5 1.1-1.1 1.5-1.8l-1.9-.4zM6.7 7.1c.2-.4.5-.7.9-.9L6.3 4.9c-.6.5-1.1 1.1-1.5 1.8l1.9.4z" />
                </svg>
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md rounded-xl p-4 text-white">
                  <div className="text-sm opacity-90">Срочный вызов</div>
                  <div className="text-2xl font-bold">+7 (XXX) XXX-XX-XX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Done Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Наши Выполненные Работы
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Гордимся качеством нашей работы и доверием клиентов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Job 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 bg-gradient-to-br from-blue-400 to-blue-600 p-8">
                <div className="flex flex-col justify-between h-full">
                  <div className="text-white/20">
                    <svg
                      className="w-16 h-16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 16h-2V8h2m0-2h-2c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M7 16h2c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2m0-2V8h2v6H7z" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">
                      Установка смесителя
                    </h3>
                    <p className="text-white/80 text-sm">
                      Профессиональная установка кухонного смесителя с гарантией
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Подробнее →</span>
              </div>
            </div>

            {/* Job 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 bg-gradient-to-br from-cyan-400 to-cyan-600 p-8">
                <div className="flex flex-col justify-between h-full">
                  <div className="text-white/20">
                    <svg
                      className="w-16 h-16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 3C7.58 3 4 5.79 4 9c0 2.7 2.3 7.5 8 11 5.7-3.5 8-8.3 8-11 0-3.21-3.58-6-8-6zm0 2c3.31 0 6 1.69 6 4 0 2.17-2.07 6.12-6 8.71-3.93-2.59-6-6.54-6-8.71 0-2.31 2.69-4 6-4z" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">Ремонт труб</h3>
                    <p className="text-white/80 text-sm">
                      Устранение протечек и замена поврежденных участков
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Подробнее →</span>
              </div>
            </div>

            {/* Job 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 bg-gradient-to-br from-indigo-400 to-indigo-600 p-8">
                <div className="flex flex-col justify-between h-full">
                  <div className="text-white/20">
                    <svg
                      className="w-16 h-16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 21V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v14l-2-2H9l-2 2zm2-2h10V7H9v12z" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">
                      Установка унитаза
                    </h3>
                    <p className="text-white/80 text-sm">
                      Полный монтаж с подключением к канализации
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Подробнее →</span>
              </div>
            </div>

            {/* Job 4 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 bg-gradient-to-br from-purple-400 to-purple-600 p-8">
                <div className="flex flex-col justify-between h-full">
                  <div className="text-white/20">
                    <svg
                      className="w-16 h-16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.86L12 5.84zM17.5 13c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">
                      Прочистка засоров
                    </h3>
                    <p className="text-white/80 text-sm">
                      Быстрое устранение любых засоров профессиональным
                      оборудованием
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Подробнее →</span>
              </div>
            </div>

            {/* Job 5 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 bg-gradient-to-br from-pink-400 to-pink-600 p-8">
                <div className="flex flex-col justify-between h-full">
                  <div className="text-white/20">
                    <svg
                      className="w-16 h-16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 4v1H5l-.5 1.5L7 12v9h10v-9l2.5-5.5L19 5h-4V4H9zm2 2h2v3h3l.4 1H7.6l.4-1h3V6z" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">
                      Монтаж душевой кабины
                    </h3>
                    <p className="text-white/80 text-sm">
                      Полная установка и подключение душевых систем
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Подробнее →</span>
              </div>
            </div>

            {/* Job 6 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 bg-gradient-to-br from-green-400 to-green-600 p-8">
                <div className="flex flex-col justify-between h-full">
                  <div className="text-white/20">
                    <svg
                      className="w-16 h-16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 7V3H7v4H2v14h20V7h-5zM9 5h6v2H9V5zm10 14H5V9h14v10z" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">
                      Замена радиаторов
                    </h3>
                    <p className="text-white/80 text-sm">
                      Демонтаж старых и установка новых радиаторов отопления
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Подробнее →</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Смотреть все работы
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Свяжитесь с Нами
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Мы всегда на связи и готовы помочь вам в любое время
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* WhatsApp */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:scale-105"
            >
              <div className="w-20 h-20 mx-auto mb-4  bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  width="800px"
                  height="800px"
                  viewBox="0 0 32 32"
                  version="1.1"
                >
                  <title>whatsapp</title>
                  <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                WhatsApp
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Напишите нам в WhatsApp для быстрой связи
              </p>
              <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                Написать сейчас →
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:scale-105"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Instagram
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Следите за нашими работами в Instagram
              </p>
              <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                Подписаться →
              </span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:scale-105"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Facebook
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Присоединяйтесь к нам на Facebook
              </p>
              <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                Перейти →
              </span>
            </a>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full px-8 py-4 shadow-lg">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="text-lg font-semibold">
                Звоните: +7 (XXX) XXX-XX-XX
              </span>
            </div>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Работаем без выходных с 8:00 до 22:00
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
