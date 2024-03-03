if (document.querySelector('.swiper__popular')) {
const swiperPopular = new Swiper('.swiper__popular', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    mousewheel: {
    forceToAxis: true
    },
    navigation: {
        nextEl: '.popular .swiper-button-next',
        prevEl: '.popular .swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,

        },
        640: {
            slidesPerView: 2,

        },
        960: {
            slidesPerView: 4,

        }
    }
});
}