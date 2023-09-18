import Swiper from '../../vendor/swiper';

const createReviewsSlider = () => {
  let swiper = new Swiper('.reviews__swiper', {
    speed: 1500,
    loop: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: false,
      },
    },
    scrollbar: {
      el: '.reviews__scrollbar',
    },
    navigation: {
      nextEl: '.reviews__next',
      prevEl: '.reviews__prev',
    },
  });

  return swiper;
};

export {createReviewsSlider};
