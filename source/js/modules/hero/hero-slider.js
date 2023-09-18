import Swiper from '../../vendor/swiper';

const createHeroSlider = () => {
  let swiper = new Swiper('.hero__swiper', {
    speed: 1500,
    loop: false,
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
      1200: {
        allowTouchMove: false,
      },
    },
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      clickable: true,
      slidesPerView: 1,
      centeredSlides: true,
    },
  });

  return swiper;
};

export {createHeroSlider};
