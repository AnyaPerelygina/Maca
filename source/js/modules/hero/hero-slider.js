import swiper from '../../vendor/swiper';

const elementHero = document.querySelector('.hero__swiper');
const createHeroSlider = () => {
  if (elementHero) {
    /* eslint-disable */
    new swiper('.hero__swiper', {
    /* eslint-enable */
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
  }
};

export {createHeroSlider};
