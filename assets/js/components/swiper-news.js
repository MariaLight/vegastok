if (document.querySelector('.swiper__news')) {

const swiperNews = new Swiper('.swiper__news', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: true,
    mousewheel: {
        forceToAxis: true
    },
    navigation: {
        nextEl: '.news .swiper-button-next',
        prevEl: '.news .swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,

        },
        960: {
            slidesPerView: 2,

        }
    }
});
} 