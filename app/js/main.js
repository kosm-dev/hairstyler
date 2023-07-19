"use strict";

const swiper = new Swiper('.works-slider', {
  // Optional parameters
  slidesPerView: 6,
  spaceBetween: 24,
  loop: true,
  
  navigation: {
    nextEl: '.works-slider__arrow-next',
    prevEl: '.works-slider__arrow-prev',
  },
});

