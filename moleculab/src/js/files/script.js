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
