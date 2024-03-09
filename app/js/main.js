"use strict";

if (document.querySelector('.works-slider')) {
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
}


if (document.querySelector('.products__slider')) {

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

}



function mobileMenu(btn) {
  let burger = document.querySelector(btn),
      headerInner = document.querySelector('.header__inner');

  burger.addEventListener('click', () => {
    headerInner.classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
  });
}

if (document.querySelector('.burger')) {
  mobileMenu('.burger');
}



function initializeSpoilers() {
  document.body.addEventListener('click', (event) => {
    const spoilers = document.querySelectorAll('.spoiler');

    spoilers.forEach((spoiler) => {
      if (!spoiler.contains(event.target)) {
        spoiler.classList.remove('active');
      } else {
        spoiler.classList.toggle('active');
      }
    });
  });
}

if (document.querySelector('.spoiler')) {
  initializeSpoilers();
}

