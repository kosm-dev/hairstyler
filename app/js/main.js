"use strict";

const swiper = new Swiper('.works-slider', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.works-slider__arrow-next',
    prevEl: '.works-slider__arrow-prev',
  },
  breakpoints: {

    320: {
      slidesPerView: 2.3,
      spaceBetween: 12,
    },
    640: {
      slidesPerView: 3.3,

    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4.5,
      spaceBetween: 24,
      
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 24,
    }

  },

});

const productsSwiper = new Swiper('.products__slider', {
  
  loop: true,

  navigation: {
    nextEl: '.products__slider-next',
    prevEl: '.products__slider-prev',
  },


  breakpoints: {

    320: {
      slidesPerView: 2.3,
      spaceBetween: 12,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
   
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    }

  },
});


const burger = document.querySelector('.burger'),
  menu = document.querySelector('.header__menu'),
  body = document.querySelector('body'),
  contactsLinks = document.querySelector('.header__links');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
  contactsLinks.classList.toggle('active');
});

// spoiler



const spoilerContent = document.querySelectorAll(".spoiler__content");

spoilerContent.forEach((item) => {
  let spoilerHead = item.querySelector(".spoiler__head");
  spoilerHead.addEventListener("click", () => {
    item.classList.toggle("open");

    let spoilerArrow = item.querySelector(".spoiler__icon"),
      spoilerDescr = item.querySelector(".spoiler__descr");

    spoilerArrow.classList.toggle("open");

    if (item.classList.contains("open")) {
      spoilerDescr.style.height = `${spoilerDescr.scrollHeight}px`;
      spoilerDescr.classList.add('active');
    } else {
      spoilerDescr.style.height = "0px";
      spoilerDescr.classList.remove('active');
    }
  });

});


