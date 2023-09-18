import Swiper from '../../vendor/swiper';

const createProgramsSlider = () => {
  let swiper = new Swiper('.programs__slider', {
    speed: 1500,
    loop: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 2.13,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
      },
    },
    scrollbar: {
      el: '.programs__scrollbar',
    },
    navigation: {
      nextEl: '.programs__button-next',
      prevEl: '.programs__button-prev',

    },
  });

  return swiper;
};

export {createProgramsSlider};
