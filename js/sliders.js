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
}


});
