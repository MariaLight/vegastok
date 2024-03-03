document.addEventListener('DOMContentLoaded', function () {
    const isMobile = () => {
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const isScreenWidthMobile = screenWidth < 960;

        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const isUserAgentMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

        return isScreenWidthMobile && isUserAgentMobile;
    };
    let vw = window.innerWidth;
    let headerLinks = document.querySelectorAll(".header__item");

    headerLinks.forEach(function (link) {
        let sub = link.querySelector('.header__submenu')
        if (vw >= 960) {
            link.addEventListener('mouseenter', function () {
                sub.classList.add('header__submenu--active')
            })
            link.addEventListener('mouseleave', function () {
                sub.classList.remove('header__submenu--active')
            })
            sub.addEventListener('mouseenter', function () {
                sub.classList.add('header__submenu--active')
            })
        } else {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                if (sub.classList.contains('header__submenu--active')) {
                    sub.classList.remove('header__submenu--active')
                    link.querySelector('.header__link').classList.remove('header__link--active')



                } else {
                    sub.classList.add('header__submenu--active')
                    link.querySelector('.header__link').classList.add('header__link--active')
                }
            })
        }
    })

    let burger = document.querySelector('.burger');
    let burgerOpen = burger.querySelector('#open');
    let burgerClose = burger.querySelector('#close');
    let headerNav = document.querySelector('.header__nav');
    burger.addEventListener('click', function () {
        headerNav.classList.toggle('header__nav--active')
        burger.classList.toggle('burger--active')
    })


    let select = document.getElementById('catalogFilter');
    if (select) {
        customSelect(select);
    }
    let fancy = document.querySelectorAll('[data-fancybox]');
    if (fancy) {
    Fancybox.bind("[data-fancybox]", {
    });
}
})