AOS.init();

const showHideMenuBtn = document.getElementById("show-hide-menu")

if (showHideMenuBtn) {
    showHideMenuBtn.addEventListener("click", () => {
        document.documentElement.classList.toggle("_menu-active")
    })
}

const mobileConsultationBtn = document.getElementById("consultation-button")

if (mobileConsultationBtn) {
    mobileConsultationBtn.addEventListener("click", function (e) {
        document.documentElement.classList.remove("_menu-active")
    })
}

const consultationForm = document.getElementById("consultation-form")

// мой вариант скрипта не работает с аякс
if (consultationForm) {
    consultationForm.addEventListener("submit", function (e) {
        e.preventDefault()
        document.getElementById("consultation").classList.add("_form-sent")
    })
}

// вариант скрипта от Артура для работы с аякс
// const selectContainer = document.querySelector(".select.page-hero__select");

// if (selectContainer) {
//     selectContainer.addEventListener('click', (e) => {
//         if (e.target.classList.contains('select__item')) {
//             const selectItems = selectContainer.querySelectorAll('.select__item');
//             selectItems.forEach(item => {
//                 item.classList.remove('_selected');
//             });
//             const selectedItem = e.target;
//             const currentValue = selectContainer.querySelector(".current-value");
//             const articles = e.target.closest('.main-content').querySelectorAll('.articles__item.article-item')

//             for (const article of articles) {
//                 article.getAttribute('data-category')
//                 if (article.getAttribute('data-category') !== selectedItem.getAttribute('data-category')) {
//                     article.classList.add('_hidden')
//                 } else {
//                     article.classList.remove('_hidden')
//                 }
//                 if (selectedItem.getAttribute('data-category') === '0') {
//                     article.classList.remove('_hidden')
//                 }
//             }

//             currentValue.textContent = selectedItem.textContent;
//             selectedItem.classList.toggle('_selected')
//             selectContainer.classList.remove("_open-select");
//         } else {
//             selectContainer.classList.toggle("_open-select");
//         }
//     });
// }

const spoilers = document.querySelectorAll(".spoiler")

if (spoilers.length) {
    spoilers.forEach(spoiler => {
        spoiler.addEventListener("click", () => {
            spoiler.classList.toggle("_spoiler-open")
        })
    });
}

// работа с селектами

const selects = document.querySelectorAll(".select")

if (selects.length) {

    // console.log(selects)

    selects.forEach(select => {
        let openSelect = select.querySelector(".open-select")
        let selectOptions = select.querySelectorAll("li.select__item[data-value]")
        const elementsForFilterWrapper = document.querySelector(".filter-list")

        // console.log(openSelect, openSelect.parentNode)

        openSelect.addEventListener("click", () => {
            openSelect.parentNode.classList.toggle("_open-select")
        })

        selectOptions.forEach(option => {
            option.addEventListener("click", () => {
                selectOptions.forEach(el => {
                    el.classList.remove("_selected")
                })

                let currentValue = select.querySelector(".current-value")
                const currentSelectValue = option.dataset.value

                currentValue.dataset.current = currentSelectValue
                currentValue.textContent = currentSelectValue
                openSelect.parentNode.classList.remove("_open-select")
                option.classList.add("_selected")

                if (elementsForFilterWrapper) {
                    const elements = elementsForFilterWrapper.querySelectorAll("[data-category]")

                    if (elements.length) {
                        elements.forEach(element => {
                            element.classList.remove("_hidden")
                            if (option.getAttribute("data-category") != 0) {
                                if (element.getAttribute("data-category") != option.getAttribute("data-category")) {
                                    element.classList.add("_hidden")
                                }
                            }
                        });
                    }
                }
            })
        });

    });
}

// const filterItems = function(data) {
//     const elements = document.querySelectorAll("[data-category]")
//     elements.forEach(element => {
//         element.style.display.none
//     });
// }

// инициализация маски ввода телефона

const phoneInputs = document.querySelectorAll("input[type='tel']")

if (phoneInputs.length) {

    phoneInputs.forEach(input => {
        Inputmask({ mask: "+7 (999) 999-99-99" }).mask(input);
    });
}

function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

isWebp()

// отображение таблицы тарифов

const plansBlock = document.getElementById("plans")
const calculatePlan = document.getElementById("calculatePlan")

if (calculatePlan) {
    calculatePlan.addEventListener("click", function (event) {
        event.preventDefault()
        document.documentElement.classList.add("_plans-visible")
        if (plansBlock) {
            plans.scrollIntoView({
                behavior: 'smooth'
            });
        }
    })

    const plansItems = plansBlock.querySelectorAll(".plan")

    if (plansItems.length) {
        plansItems.forEach(item => {
            const plansHeader = item.querySelector(".plan__header")
            plansHeader.addEventListener("click", () => {
                item.classList.toggle("_plan-open")
            })
        })
    }
}


// скролл наверх

// Получаем элемент кнопки "наверх"
const toTopButton = document.getElementById('to-top');

// Функция для управления видимостью кнопки
function toggleButtonVisibility() {
    if (window.scrollY > 200) {
        toTopButton.style.display = 'block'; // Показываем кнопку
    } else {
        toTopButton.style.display = 'none'; // Скрываем кнопку
    }
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', toggleButtonVisibility);

// Обработчик клика по кнопке "наверх"
toTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Изначально скрываем кнопку
toTopButton.style.display = 'none';

// Range Slider Properties.

const sliderProps = {
    fill: "#95C11F",
    background: "#DADADA",
};

const sliders = document.querySelectorAll(".range-wrapper");

sliders.forEach(slider => {
    const sliderNumber = slider.querySelector(".slider-count");
    const sliderRangeInput = slider.querySelector("input[type='range']")

    sliderRangeInput.addEventListener("input", event => {
        sliderNumber.value = event.target.value;

        setRangeLine(sliderRangeInput)
    });

    sliderNumber.addEventListener("input", event => {
        sliderRangeInput.value = +event.target.value;
        setRangeLine(sliderRangeInput)
    })

    function setRangeLine(slider) {
        const percentage = (100 * (sliderRangeInput.value - sliderRangeInput.min)) / (sliderRangeInput.max - sliderRangeInput.min);
        const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage + 0.1}%)`;
        sliderRangeInput.style.background = bg;
    }

});

const header = document.querySelector('header');
const body = document.body;
const headerHeight = header.offsetHeight;
body.style.paddingTop = `${headerHeight}px`;