const swiperAbout = new Swiper(".swiper__objects", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    direction: 'horizontal',
    navigation: {
        nextEl: ".swiper__objects .swiper-button-next",
        prevEl: ".swiper__objects .swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            freeMode: false,


        },
        640: {
            slidesPerView: 2,
            freeMode: true,


        },
        960: {
            slidesPerView: 4,

        }
    }
});