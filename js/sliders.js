document.addEventListener('DOMContentLoaded', function () {

if(document.querySelector('.hero-slider .swiper')) {
  console.log('Есть!');
  var swiperHero = new Swiper(".hero-slider .swiper", {
    pagination: {
      el: ".hero-slider .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".hero-slider .swiper-button-next",
      prevEl: ".hero-slider .swiper-button-prev",
    },
  });
};

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



});
