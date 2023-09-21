import Swiper from '../../vendor/swiper';

const createNewsSlider = () => {
  let swiper = new Swiper('.news__swiper', {
    speed: 1500,
    loop: false,
    updateOnWindowResize: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: 'row',
        },
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
          fill: 'row',
        },
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        grid: {
          rows: 1,
        },
        allowTouchMove: false,
      },
    },
    pagination: {
      el: '.news__pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return `<button class="news__pagination-button ${className} type="button" aria-label="Перейти к ${index + 1} слайду">${index + 1}</button>`;
      },
    },
    navigation: {
      nextEl: '.news__next',
      prevEl: '.news__prev',
    },
  });

  return swiper;
};

export {createNewsSlider};
