document.addEventListener("DOMContentLoaded", () => {
    let colorBtns = document.querySelectorAll('.radio__item--logos-link');
    let colorBlocks = document.querySelectorAll('.form__question--color');
    for (let i = 0; i < colorBlocks.length; i++) {
        console.log(colorBtns[i])
        colorBtns[i].addEventListener('click', function (e) {
            e.preventDefault();
            colorBtns[i].parentElement.querySelector('input').checked = true;
            colorBlocks.forEach(function (elem) {
                elem.classList.remove('active');
            })
            colorBlocks[i].classList.add('active');
        })
    }

    let schemaBtns = document.querySelectorAll('.schema__btn');
    let schemaInputs = document.querySelectorAll('.schema__input');

    schemaBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            schemaBtns.forEach(function (button) {
                button.classList.remove('active');
                resetStyles(button);
            })

            btn.classList.add('active');
            let btnId = btn.id;
            document.querySelectorAll(`.${btnId}-text`).forEach(function (text) {
                text.style.fill = "#F10000";
            })
            document.querySelectorAll(`.${btnId}`).forEach(function (text) {
                text.style.stroke = "#F10000";
            })
        })
    })
    schemaInputs.forEach(function (input) {
        input.addEventListener('focus', function (e) {
            // e.preventDefault();
            let btn = input.parentElement.querySelector('.schema__btn');
            schemaBtns.forEach(function (button) {
                button.classList.remove('active');
                resetStyles(button);
            })

            btn.classList.add('active');
            let btnId = btn.id;
            document.querySelectorAll(`.${btnId}-text`).forEach(function (text) {
                text.style.fill = "#F10000";
            })
            document.querySelectorAll(`.${btnId}`).forEach(function (text) {
                text.style.stroke = "#F10000";
            })
        })
    })

    function resetStyles(button) {
        document.querySelectorAll(`.${button.id}-text`).forEach(function (text) {
            text.style.fill = "#100F0D";
        })
        document.querySelectorAll(`.${button.id}`).forEach(function (text) {
            text.style.stroke = "#666666";
        })
    }
    let calcsSwipers = document.querySelectorAll('.swiper-colors');
    let cnt = 0;
    const swipersMain = [];
    calcsSwipers.forEach(function (item) {
        cnt++;
        let swiper = new Swiper(item, {
            direction: 'horizontal',
            speed: 800,
            grabCursor: true,
            slidesPerView: 6,
            spaceBetween: 20,
            loop: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        swipersMain.push(swiper);

    })

    let calc2Checkbox = document.querySelector('input[name="acceptance"]');
    let calc2Range = document.querySelector('#range')
    if (calc2Checkbox) {
        calc2Checkbox.addEventListener('change', function (e) {
            console.log(calc2Checkbox.checked);
            if (calc2Checkbox.checked) {
                calc2Range.classList.add('active')
            }
            else {
                calc2Range.classList.remove('active')

            }
        })
    }

    let typeInputs = document.querySelectorAll('input[name="type"]');
    if (typeInputs) {
        typeInputs.forEach(function(input){
            input.addEventListener('change', function(e){
                let value = input.value;
                console.log(value);
                document.querySelectorAll(`.can-hide`).forEach(function (item) {
                    item.classList.remove('active')
                    item.querySelector('input').disabled = false;
                    item.querySelector('input').checked = false;
                })
                if (input.checked){
                    document.querySelectorAll(`.${value}-disabled`).forEach(function (item){
                        item.classList.add('active')
                        item.querySelector('input').disabled = true;
                    })
                    
                }
            })
        })
    }
    let colorInputs = document.querySelectorAll('input[name="pokrytie"]');
    let colorWrapper = document.querySelector('.color-wrapper'); 
    if (colorWrapper) {
        colorInputs.forEach(function (input) {
            input.addEventListener('change', function (e) {
                let value = input.value;
                console.log(value);
                colorWrapper.querySelectorAll(`.can-hide`).forEach(function (item) {
                    item.classList.remove('active')
                    item.querySelector('input').disabled = false;
                    item.querySelector('input').checked = false;
                })
                if (input.checked) {
                    colorWrapper.querySelectorAll(`.${value}-disabled`).forEach(function (item) {
                        item.classList.add('active')
                        item.querySelector('input').disabled = true;
                    })

                }
            })
        })
    }

    let form = document.querySelector('.calc__form');
    let formSubmit = document.querySelector('.calc-submit-btn');
    form.addEventListener('change', changeFormHandler);

    function changeFormHandler() {
        if (form.checkValidity()) {
            formSubmit.removeAttribute('disabled');
        }
    }



    // ВРЕМЕННОЕ УБРАТЬ!!!! 
    let result = document.querySelector('.final-result');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        result.classList.add('active');
    });

})