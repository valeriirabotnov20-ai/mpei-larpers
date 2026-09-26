// mpei_larpers: переключение языка RU/ENG.
// Тексты живут в разметке с ключами data-i18n, словарь ниже.
// Выбор запоминается в localStorage и доступен ссылкой ?lang=en
(function () {
  var DICT = {
    ru: {
      'nav.home': 'Главная',
      'nav.about': 'О команде',
      'nav.team': 'Состав',
      'nav.partners': 'Партнёры',

      'h1.about': 'О команде',
      'h1.team': 'Состав',
      'h1.brand': 'Брендбук',
      'h1.404': '404',

      'about.lead': 'mpei_larpers это студенческая CTF-команда НИУ МЭИ.',
      'about.p1': 'Мы собираемся, чтобы решать задачи по информационной безопасности, разбирать их вместе и выступать за университет на студенческих и открытых турнирах. Играем в jeopardy и attack-defense, готовимся к отборочным и финалам.',

      'team.city': 'Родной город',
      'team.born': 'Дата рождения',
      'team.focus': 'Категория',
      'team.socials': 'Социальные сети',
      'team.name.lavbarr': 'Валерий Работнов',
      'team.city.lavbarr': 'Балашиха, Россия',
      'team.born.lavbarr': '8 декабря 2007',
      'team.focus.lavbarr': 'crypto',
      'team.name.n7cI': 'Зураб Билалов',
      'team.city.n7cI': 'Дербент, Россия',
      'team.born.n7cI': '18 апреля 2007',
      'team.focus.n7cI': 'osint, stego',
      'team.name.0xshalamov': 'Данила Шаламов',
      'team.city.0xshalamov': 'Москва, Россия',
      'team.born.0xshalamov': '21 августа 2007',
      'team.focus.0xshalamov': 'pwn, reverse',
      'team.name.frosty_qq': 'Никита Бойцов',
      'team.city.frosty_qq': 'Москва, Россия',
      'team.born.frosty_qq': '14 мая 2007',
      'team.focus.frosty_qq': 'forensic',
      'team.name.gest': 'Георгий Буюкиди',
      'team.city.gest': 'Тараз, Казахстан',
      'team.born.gest': '6 ноября 2007',
      'team.focus.gest': 'web, pentest',

      'team.back': 'Состав',



      'brand.lead': 'Логотип: щит с надписью LARPERS MPEI. Два варианта: чёрный для светлых подложек и белый для тёмных.',
      'brand.p1': 'Логотип используем без искажений пропорций. На чёрном фоне берём белый вариант (<span class="js-code">assets/logo-light.png</span>), на белом: чёрный (<span class="js-code">assets/logo-dark.png</span>). Не перекрашиваем, не добавляем эффекты, не меняем надписи внутри щита.',
      'brand.h2.palette': 'Палитра',
      'brand.h2.fonts': 'Шрифты',
      'brand.h2.usage': 'Применение',
      'brand.fonts1': 'Заголовки: Oswald, прописные, вес 500-600, сжатый гротеск.',
      'brand.fonts2': 'Текст и интерфейс: Inter, обычные и полужирные начертания.',
      'brand.fonts3': 'Служебные подписи: Inter, 11-12 px, разрядка 1.1-1.3 px, прописные.',
      'brand.usage': 'Плитка с логотипом ставится на белой подложке со светлой сдвинутой тенью. Фон чёрный, единственный акцент это белый: активные пункты, ссылки, кнопки при наведении. Полутона берём прозрачностью белого, а не отдельными цветами.',
      'brand.p2': 'Аватарки и иконки: квадрат с логотипом, версия для соцсетей лежит в <span class="js-code">assets/og.jpg</span> (1200x630).',
      'brand.white': 'Белый',
      'brand.gray': 'Серый',
      'brand.line': 'Линия',
      'brand.black': 'Чёрный',

      'nf.text': 'Такой страницы у команды нет. Флаг здесь тоже не спрятан, проверяли.',
      'nf.btn': 'На главную',

      'aria.menu': 'Меню команды',
      'aria.menuBtn': 'Открыть меню',
      'aria.logo': 'MPEI LARPERS, на главную',
      'aria.lang': 'Язык сайта',
      'aria.readMore': 'Читать новость'
    },

    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.team': 'Roster',
      'nav.partners': 'Partners',

      'h1.about': 'About the team',
      'h1.team': 'Roster',
      'h1.brand': 'Brandbook',
      'h1.404': '404',

      'about.lead': 'mpei_larpers is a student CTF team of NRU MPEI.',
      'about.p1': 'We team up to solve information security challenges, break them down together and represent the university at student and open tournaments. We play jeopardy and attack-defense and prepare for qualifiers and finals.',

      'team.city': 'Home town',
      'team.born': 'Date of birth',
      'team.focus': 'Category',
      'team.socials': 'Social media',
      'team.name.lavbarr': 'Valeriy Rabotnov',
      'team.city.lavbarr': 'Balashikha, Russia',
      'team.born.lavbarr': '8 December 2007',
      'team.focus.lavbarr': 'crypto',
      'team.name.n7cI': 'Zurab Bilalov',
      'team.city.n7cI': 'Derbent, Russia',
      'team.born.n7cI': '18 April 2007',
      'team.focus.n7cI': 'osint, stego',
      'team.name.0xshalamov': 'Danila Shalamov',
      'team.city.0xshalamov': 'Moscow, Russia',
      'team.born.0xshalamov': '21 August 2007',
      'team.focus.0xshalamov': 'pwn, reverse',
      'team.name.frosty_qq': 'Nikita Boytsov',
      'team.city.frosty_qq': 'Moscow, Russia',
      'team.born.frosty_qq': '14 May 2007',
      'team.focus.frosty_qq': 'forensic',
      'team.name.gest': 'Georgiy Buyukidi',
      'team.city.gest': 'Taraz, Kazakhstan',
      'team.born.gest': '6 November 2007',
      'team.focus.gest': 'web, pentest',

      'team.back': 'Roster',



      'brand.lead': 'Logo: a shield lettered LARPERS MPEI. Two versions: black for light backgrounds and white for dark ones.',
      'brand.p1': 'Use the logo without distorting proportions. On dark backgrounds take the white version (<span class="js-code">assets/logo-light.png</span>), on light ones the black version (<span class="js-code">assets/logo-dark.png</span>). Do not recolour it, add effects or change the lettering inside the shield.',
      'brand.h2.palette': 'Palette',
      'brand.h2.fonts': 'Fonts',
      'brand.h2.usage': 'Usage',
      'brand.fonts1': 'Headings: Oswald, uppercase, weight 500-600, condensed grotesque.',
      'brand.fonts2': 'Body and interface: Inter, regular and semibold.',
      'brand.fonts3': 'Labels: Inter, 11-12 px, tracking 1.1-1.3 px, uppercase.',
      'brand.usage': 'The logo plate sits on a white base with a light offset shadow. The background is black and the only accent is white: active items, links, buttons on hover. Tints come from white transparency, not from extra colours.',
      'brand.p2': 'Avatars and icons: a square with the logo; the social preview lives in <span class="js-code">assets/og.jpg</span> (1200x630).',
      'brand.white': 'White',
      'brand.gray': 'Grey',
      'brand.line': 'Line',
      'brand.black': 'Black',

      'nf.text': 'The team has no such page. No flag is hidden here either, we checked.',
      'nf.btn': 'Go home',

      'aria.menu': 'Team menu',
      'aria.menuBtn': 'Open menu',
      'aria.logo': 'MPEI LARPERS, back to home',
      'aria.lang': 'Site language',
      'aria.readMore': 'Read the news'
    }
  };

  var TITLES = {
    ru: { 'index.html': 'MPEI LARPERS · CTF-команда НИУ МЭИ', 'about.html': 'О команде · MPEI LARPERS', 'team.html': 'Состав · MPEI LARPERS', 'partners.html': 'Партнёры · MPEI LARPERS', 'brand.html': 'Брендбук · MPEI LARPERS', '404.html': '404 · MPEI LARPERS' },
    en: { 'index.html': 'MPEI LARPERS · CTF team of NRU MPEI', 'about.html': 'About · MPEI LARPERS', 'team.html': 'Roster · MPEI LARPERS', 'partners.html': 'Partners · MPEI LARPERS', 'brand.html': 'Brandbook · MPEI LARPERS', '404.html': '404 · MPEI LARPERS' }
  };

  var STORE = 'mpei-larpers-lang';
  var lang = 'ru';

  function pageName() {
    var f = (location.pathname.split('/').pop() || 'index.html');
    return f === '' ? 'index.html' : f;
  }

  function detect() {
    var m = location.search.match(/[?&]lang=(en|ru)\b/);
    if (m) return m[1];
    try {
      var saved = localStorage.getItem(STORE);
      if (saved === 'en' || saved === 'ru') return saved;
    } catch (e) {}
    var nav = (navigator.language || 'ru').slice(0, 2).toLowerCase();
    return nav === 'ru' ? 'ru' : 'ru'; // по умолчанию русский, автоопределение не навязываем
  }

  // атрибуты, которые тоже переводятся: <элемент data-i18n-attr="title=key;aria-label=key2">
  function applyAttrs(el, dict) {
    var spec = el.getAttribute('data-i18n-attr');
    if (!spec) return;
    spec.split(';').forEach(function (pair) {
      // поддерживаем оба разделителя: "aria-label:ключ" и "title=ключ"
      var parts = pair.split(/[:=]/);
      if (parts.length !== 2) return;
      var attr = parts[0].trim().replace(/^\s+|\s+$/g, '');
      var key = parts[1].trim();
      if (!attr) return;
      var val = dict[key];
      if (val == null) return;
      el.setAttribute(attr, val);
    });
  }

  function apply(next, remember) {
    lang = (next === 'en') ? 'en' : 'ru';
    var dict = DICT[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = dict[key];
      if (val == null) return;
      // защита: если внутри уже есть переводимые элементы (например, menu внутри nav),
      // контейнер не трогаем, иначе можно случайно затереть разметку
      if (el.querySelector('[data-i18n]')) return;
      if (el.hasAttribute('data-i18n-raw')) el.textContent = val;
      else el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) { applyAttrs(el, dict); });

    var t = TITLES[lang][pageName()];
    if (t) document.title = t;

    document.querySelectorAll('[data-set-lang]').forEach(function (el) {
      var on = el.getAttribute('data-set-lang') === lang;
      el.classList.toggle('is-active', on);
      el.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    if (remember) { try { localStorage.setItem(STORE, lang); } catch (e) {} }
  }

  document.addEventListener('DOMContentLoaded', function () {
    apply(detect(), false);
    document.querySelectorAll('[data-set-lang]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        apply(el.getAttribute('data-set-lang'), true);
      });
    });
  });
})();
