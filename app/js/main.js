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

const productsSwiper = new Swiper('.products__slider', {
  slidesPerView: 4,
  spaceBetween: 24,
  loop: true,

  navigation: {
    nextEl: '.products__slider-next',
    prevEl: '.products__slider-prev',
  },
});


