// Подключение функционала "Чертогов Фрилансера"
import {
    isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
    flsModules
} from "./modules.js";

// document.addEventListener("DOMContentLoaded", ()=> {
//     setTimeout(() => {
//         document.getElementById("loader").remove()
//     }, 2000);

// })

// document.querySelector('.hero__button').addEventListener('click', function() {
//     document.querySelector('#e-book').scrollIntoView({
//         behavior: 'smooth'
//     });
// });

// AOS.init();



// изменение локации

const changeLocation = document.getElementById("change-location") || null

changeLocation.addEventListener("click", () => {
    changeLocation.classList.toggle("_open")
})

// открытие блока Покупателям

const openCustomerBlock = document.getElementById("customer-block") || null

openCustomerBlock.addEventListener("click", () => {
    openCustomerBlock.classList.toggle("_open")
})


// работа с селектом в шапке

const selectOptions = document.querySelectorAll("li.select__item[data-value]") || null
const openSelect = document.getElementById("open-select") || null

openSelect.addEventListener("click", () => {
    openSelect.parentNode.classList.toggle("_open-select")
})

selectOptions.forEach(option => {
    option.addEventListener("click", () => {

        const currentValue = document.getElementById("current-value")
        const currentSelectValue = option.dataset.value

        currentValue.dataset.current = currentSelectValue
        currentValue.textContent = currentSelectValue
        openSelect.parentNode.classList.remove("_open-select")


    })
});


// работа с меню в шапке

const headerMenu = document.getElementById("open-header-menu") || null

headerMenu.addEventListener("click", () => {
    headerMenu.classList.toggle("_open-menu")
})


// работа с открытием поиска на мобилке

const mobileSearchOpen = document.getElementById("open-mobile-search") || null
const mobileSearchClose = document.getElementById("open-mobile-close") || null

mobileSearchOpen.addEventListener("click", () => {
    document.documentElement.classList.add("_mobile-search-open")
})

mobileSearchClose.addEventListener("click", () => {
    document.documentElement.classList.remove("_mobile-search-open")
})

// скролл наверх

document.getElementById('to-top').addEventListener('click', function () {
    document.querySelector('header').scrollIntoView({
        behavior: 'smooth'
    });
});

// работа с календарем

// https://vanilla-calendar.pro/ru/docs/reference/additionally/actions
document.addEventListener('DOMContentLoaded', () => {
    const calendar = new VanillaCalendar('#calendar', {
        settings: {
            range: {
                // disablePast: true,
            },
            lang: 'ru',
            visibility: {
                theme: 'light',
            },
        },
        actions: {
            clickDay(e, self) {
                console.log(self.selectedDates);
            },
            clickArrow(event, self) {
                console.log(self.selectedYear, self.selectedMonth);
            },
        },
    });
    calendar.init();
});


// переключение табов 

const goodsTags = document.querySelectorAll("#goods .tag-item") || null
goodsTags.forEach(tag => {
    tag.addEventListener("click", () => {
        if (!tag.classList.contains("_active")) {
            goodsTags.forEach(item => {
                item.classList.remove("_active")
            })
            tag.classList.add("_active")
        }
    })
});

// отображение полного списка тегов

const showHideTags = document.getElementById("show-hide-tags") || null
const tagsWrapper = document.getElementById("tags-wrapper") || null
showHideTags.addEventListener("click", () => {
    tagsWrapper.classList.toggle("_all")
})

// иконка добавить-убрать из избранного

let allHeartIcons = document.querySelectorAll(".icons-product__heart") || null
allHeartIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        icon.classList.toggle("_active")
    })
});

// иконка добавить-убрать из сравнения

let allComparisonIcons = document.querySelectorAll(".icons-product__comparison") || null
allComparisonIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        icon.classList.toggle("_active")
    })
});

// работа с попапами

const popupShowElements = document.querySelectorAll("[data-popup]")
const popupHideElements = document.querySelectorAll(".popup__close")

popupShowElements.forEach(element => {
    element.addEventListener("click", () => {
        let popupId = element.getAttribute("data-popup");
        // console.log(document.querySelector(`#${popupId}`))
        document.querySelector(`#${popupId}`).classList.add('popup_show');
        document.querySelector('html').classList.add('lock');
        document.querySelector('html').classList.add('popup-show');
    })
});

popupHideElements.forEach(element => {
    element.addEventListener("click", () => {
        element.closest('.popup').classList.remove('popup_show');
        document.querySelector('html').classList.remove('lock');
        document.querySelector('html').classList.remove('popup-show');
    })
})

// инициализация маски ввода телефона

Inputmask({ mask: "+7 (999) 999-9999" }).mask(document.getElementById("number-for-call"));
Inputmask({ mask: "+7 (999) 999-9999" }).mask(document.getElementById("newsletter-phone"));


// проверка полей на заполненность

const callMePopup = document.getElementById('call-me') || null;
const nameInput = document.getElementById('name-for-call') || null;
const emailInput = document.getElementById('number-for-call') || null;
const submitButton = callMePopup.querySelector('button[type="submit"]') || null;

nameInput.addEventListener('input', toggleButtonState);
emailInput.addEventListener('input', toggleButtonState);

function toggleButtonState() {
    if (nameInput.value.trim() !== '' && emailInput.value.trim() !== '') {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'disabled');
    }
}

// валидация полей

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('input[type="email"]');

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

function onInput() {
    if (isEmailValid(input.value)) {
        input.style.borderColor = 'green';
    } else {
        input.style.borderColor = 'red';
    }
}

input.addEventListener('input', onInput);