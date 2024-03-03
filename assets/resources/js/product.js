
const swiperProductThumbs = new Swiper(".product-main-gallery__thumbs", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    direction: 'vertical',

    watchSlidesProgress: true,
    breakpoints: {
        320: {
            direction: 'horizontal',
            slidesPerView: 2,

        },
        640: {
            direction: 'vertical',
            slidesPerView: 3,

        }
    }
});
const swiperProduct = new Swiper(".product-main__gallery", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".product-main__gallery .swiper-button-next",
        prevEl: ".product-main__gallery .swiper-button-prev",
    },
    thumbs: {
        swiper: swiperProductThumbs,
    },
});

const tabsProduct = document.querySelectorAll(".product-main__tab");
const contentsProduct = document.querySelectorAll(".product-main__content");
if (tabsProduct) {
    console.log(tabsProduct);

    for (let i = 0; i < tabsProduct.length; i++) {
        tabsProduct[i].addEventListener("click", (event) => {

            let tabsChildren = event.target.parentElement.children;
            for (let t = 0; t < tabsChildren.length; t++) {
                tabsChildren[t].classList.remove("product-main__tab--active");
            }
            // добавляем активный класс
            tabsProduct[i].classList.add("product-main__tab--active");
            // теперь нужно удалить активный класс с блоков содержимого вкладок
            let tabContentChildren = event.target.parentElement.nextElementSibling.children;
            for (let c = 0; c < tabContentChildren.length; c++) {
                tabContentChildren[c].classList.remove("product-main__content--active");
            }
            // добавляем активный класс
            contentsProduct[i].classList.add("product-main__content--active");

        });
    }
}

Fancybox.bind("[data-fancybox]", {
});