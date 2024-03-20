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
                if (text.parentNode.classList.contains('schema-more')) {
                    text.style.fill = "#F10000";

                }
                else {
                    text.style.stroke = "#F10000";

                }
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
                if (text.parentNode.classList.contains('schema-more')) {
                    text.style.fill = "#F10000";

                }
                else {
                    text.style.stroke = "#F10000";

                }

            })
        })
    })

    function resetStyles(button) {
        document.querySelectorAll(`.${button.id}-text`).forEach(function (text) {
            text.style.fill = "#100F0D";
        })
        document.querySelectorAll(`.${button.id}`).forEach(function (text) {
            if (text.parentNode.classList.contains('schema-more')) {
                text.style.fill = "#666666";

            }
            else {
                text.style.stroke = "#666666";

            }
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
        typeInputs.forEach(function (input) {
            input.addEventListener('change', function (e) {
                let value = input.value;
                document.querySelectorAll(`.can-hide`).forEach(function (item) {
                    item.classList.remove('active')
                    item.querySelector('input').disabled = false;
                    item.querySelector('input').checked = false;
                })
                document.querySelectorAll('input[name="color"]').forEach(function (item) {
                    
                    
                    item.checked = false;
                })
                if (input.checked) {

                    document.querySelectorAll(`.${value}-disabled`).forEach(function (item) {
                        item.classList.add('active')
                        item.querySelector('input').disabled = true;
                    })
                    if (input.value == 'premium') {
                        console.log(document.querySelector('input[value="figure"]'))
                        document.querySelector('input[value="figure"]').checked = true;
                        document.querySelector('input[value="circle"]').checked = true;
                    } else if (input.value == 'econom') {
                        document.querySelector('input[value="figure"]').checked = true;
                        document.querySelector('input[value="m"]').checked = true;
                    } else {
                        document.querySelector('input[value="figure"]').checked = false;

                    }

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
                    item.classList.remove('active-color')
                    item.querySelector('input').disabled = false;
                    item.querySelector('input').checked = false;
                })
                if (input.checked) {
                    colorWrapper.querySelectorAll(`.${value}-disabled`).forEach(function (item) {
                        item.classList.add('active-color')
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

    let brandsInputs = document.querySelectorAll('input[name="brand"]');
    let brandsTypeInputs = document.querySelectorAll('input[name="type"]');
    let brandsBlocks = document.querySelectorAll('.form__question--brand');
    for (let i = 0; i < brandsBlocks.length; i++) {
        brandsInputs[i].addEventListener('change', function (e) {
            // e.preventDefault();
            // brandsInputs[i].checked = true;
            brandsTypeInputs.forEach(function (elem) {
                elem.checked = false;
            })
            brandsBlocks.forEach(function (elem) {
                elem.classList.add('brand-hide');
            })
            brandsBlocks[i].classList.remove('brand-hide');
        })
    }

    let calcCustomBtn = document.querySelector('#calc-custom')
    if (calcCustomBtn) {
        calcCustomBtn.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('#schema-inputs__more').classList.toggle('active');

        })
    }

    // let formInputs = document.querySelectorAll('input[name="form"]');
    // let formInputs2 = document.querySelectorAll('input[name="form-2"]');
    // formInputs.forEach(function (input) {
    //     input.addEventListener('click', function (e) {
    //         let checkedValue = document.querySelector('input[name="form"]:checked').value;
    //         if (checkedValue == 'straight') {
    //             formInputs2.forEach(function (elem) {
    //                 elem.checked = false;
    //                 elem.parentElement.classList.add('active-2');
    //             })
    //         } else {
    //             formInputs2.forEach(function (elem) {
    //                 elem.parentElement.classList.remove('active-2');
    //             })
    //         }
    //     })
    // })
    // formInputs2.forEach(function (input) {
    //     input.addEventListener('click', function (e) {
    //         document.querySelector('input[value="figure"]').checked = true;
    //     })
    // })


    let shtaketnikImage = document.getElementById('change-color');
    let shtaketnikImageBox;
    if (shtaketnikImage) {
        shtaketnikImageBox = shtaketnikImage.querySelector('.form__card');
    }
    let typeInputsAll = document.querySelectorAll('input[name="type"]');
    let form2InputsAll = document.querySelectorAll('input[name="form-2"]');
    let formInputsAll = document.querySelectorAll('input[name="form"]');
    let colorInputsAll = document.querySelectorAll('input[name="color"]');
    let shtaketnikForm = document.querySelector('#shtaketnik')
    if (shtaketnikForm) {
        shtaketnikForm.addEventListener('change', function () {
            // let typeValue = type.value ? type.value : 'premium';
            // let formValue = formInput.value ? formInput.value : 'circle';
            // let colorValue = color.value ? color.value : '3005';

            let typeValue = 'standard';
            let form2Value = 'circle';
            let formValue = '';
            let colorValue = '3005';
            typeInputsAll.forEach(item => {
                if (item.checked) {
                    typeValue = item.value;
                }
            })
            formInputsAll.forEach(item => {
                if (item.checked && item.value=="straight") {
                    formValue = item.value +"-";
                }
            })
            form2InputsAll.forEach(item => {
                if (item.checked) {
                    form2Value = item.value;
                }
            })
            colorInputsAll.forEach(item => {
                if (item.checked) {
                    colorValue = item.value;
                }
            })

            console.log(`${typeValue}-${formValue}${form2Value}-${colorValue}`);


            if (typeValue && form2Value && colorValue) {
                let fileName = `${typeValue}-${formValue}${form2Value}-${colorValue}`;
                var img = shtaketnikImageBox.querySelector('picture');
                img.querySelector('img').src = `assets/img/calcs/${fileName}.png`;
                img.querySelector('source').srcset = `assets/img/calcs/${fileName}.webp`;
            }


        });
    }


    // ВРЕМЕННОЕ УБРАТЬ!!!! 
    let result = document.querySelector('.final-result');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        result.classList.add('active');
    });

})