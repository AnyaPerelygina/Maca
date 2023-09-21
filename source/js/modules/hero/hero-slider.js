import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const createHeroSlider = () => {
  let swiper = new Swiper('.hero__swiper', {
    speed: 1500,
    allowTouchMove: isMobile(),
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
        loop: true,
      },
      768: {
        allowTouchMove: true,
        loop: true,
      },
      1200: {
        allowTouchMove: false,
        loop: false,
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
