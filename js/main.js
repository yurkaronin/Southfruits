// // прилипающая шапка
let lastKnownScrollY = 0;
let ticking = false;

function headerChange() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 126) {
    document.body.classList.add("header-sticky");
  } else {
    document.body.classList.remove("header-sticky");
  }

  ticking = false;
}

function onScroll() {
  lastKnownScrollY = window.scrollY;
  requestTick();
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(headerChange);
  }

  ticking = true;
}

document.addEventListener('DOMContentLoaded', function () {
  headerChange();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Получаем все ссылки внутри элемента nav с классом 'header__navigation'
  const links = document.querySelectorAll('.header__navigation a');

  links.forEach(link => {
    // Обработчик для события наведения мыши на ссылку
    link.addEventListener('mouseenter', () => {
      // Удаляем класс 'off' со всех ссылок перед добавлением новых
      links.forEach(l => l.classList.remove('off'));

      // Добавляем класс 'off' только предыдущему элементу, если он существует
      if (link.previousElementSibling) {
        link.previousElementSibling.classList.add('off');
      }
    });

    // Обработчик для события, когда курсор мыши покидает ссылку
    link.addEventListener('mouseleave', () => {
      // Удаляем класс 'off' со всех ссылок
      links.forEach(l => l.classList.remove('off'));
    });
  });

  // Аккордеончик

  // Находим все элементы с классом accordion__head
  const accordionHeaders = document.querySelectorAll('.accordion__head');

  // Добавляем обработчик событий для каждого заголовка аккордеона
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function (event) {
      // Находим ближайший родительский элемент с классом accordion
      const accordion = event.target.closest('.accordion');

      // Переключаем класс active для данного аккордеона
      if (accordion) {
        accordion.classList.toggle('active');
      }
    });
  });

  // показ мобильного меню и кнопки
  const buttonMenu = document.querySelector('.button-menu');
  const navigation = document.querySelector('.mob-nav');
  buttonMenu.addEventListener('click', function () {
    buttonMenu.classList.toggle('isActive');
    navigation.classList.toggle('isActive');
    document.body.classList.toggle('menu-open');
  });


});

// техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
// получить в консоли элемент, по которому кликнули
document.addEventListener('click', e => console.log(e.target));
