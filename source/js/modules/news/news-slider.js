import swiper from '../../vendor/swiper';

const elementNews = document.querySelector('.news__swiper');
const createNewsSlider = () => {
  if (elementNews) {
    /* eslint-disable */
    new swiper('.news__swiper', {
      /* eslint-enable */
      speed: 1500,
      loop: false,
      updateOnWindowResize: true,
      breakpoints: {
        320: {
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
        /* eslint-disable */
        renderBullet:
          function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
      },
      /* eslint-enable */
      navigation: {
        nextEl: '.news__next',
        prevEl: '.news__prev',
      },
    });
  }
};

export {createNewsSlider};
