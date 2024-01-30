document.addEventListener('DOMContentLoaded', function () {


var swiperPhoto = new Swiper(".photo-slider .swiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: ".photo-slider .swiper-button-next",
    prevEl: ".photo-slider .swiper-button-prev",
  },
  breakpoints: {
    // Когда ширина экрана меньше 1024px
    1024: {
      slidesPerView: 2, // Показывать только 1 слайд
      spaceBetween: 16 // Можно изменить промежуток, если нужно
    }
  }
});


if (document.querySelector('.hero-slider .swiper')) {
  var swiperHero = new Swiper(".hero-slider .swiper", {
    pagination: {
      el: ".hero-slider .swiper-pagination",
      type: "fraction",
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 600,
    // Отключите встроенную анимацию Swiper
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".hero-slider .swiper-button-next",
      prevEl: ".hero-slider .swiper-button-prev",
    },
    on: {
      slideChange: function () {
        // Применение анимации на текущем слайде
        var currentSlide = document.querySelector('.swiper-slide-active');
        var slideImage = currentSlide.querySelector('.hero-slider__image');
        var leftLogo = currentSlide.querySelector('.hero-slider__grid-item:nth-child(1)');
        var rightLogo = currentSlide.querySelector('.hero-slider__grid-item:nth-child(2)');

        gsap.to(slideImage, {
          x: 0,
          y: 0,
          duration: 0.5
        });

        gsap.to(leftLogo, {
          x: 0,
          y: 0,
          duration: 0.5
        });

        gsap.to(rightLogo, {
          x: 0,
          y: 0,
          duration: 0.5
        });
      }
    }
  });

  // Добавьте обработчик события 'mousemove' к контейнеру слайдера
  document.querySelector('.hero-slider').addEventListener('mousemove', parallaxEffect);

  // Функция для реализации параллакс-эффекта
  function parallaxEffect(e) {
    var mouseX = e.clientX; // Получите текущую позицию X курсора мыши
    var mouseY = e.clientY; // Получите текущую позицию Y курсора мыши

    // Используйте GSAP для анимации смещения элементов текущего слайда
    var currentSlide = document.querySelector('.swiper-slide-active');
    var slideImage = currentSlide.querySelector('.hero-slider__image');
    var leftLogo = currentSlide.querySelector('.hero-slider__grid-item:nth-child(1)');
    var rightLogo = currentSlide.querySelector('.hero-slider__grid-item:nth-child(2)');

    gsap.to(slideImage, {
      x: (mouseX / window.innerWidth - 0.5) * 100,
      y: (mouseY / window.innerHeight - 0.5) * 100,
      duration: 0.5
    });

    gsap.to(leftLogo, {
      x: (mouseX / window.innerWidth - 0.5) * 30,
      y: (mouseY / window.innerHeight - 0.5) * 30,
      duration: 0.5
    });

    gsap.to(rightLogo, {
      x: (mouseX / window.innerWidth - 0.5) * -30,
      y: (mouseY / window.innerHeight - 0.5) * -30,
      duration: 0.5
    });
  }
}







});
