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

document.querySelector('.hero__button').addEventListener('click', function() {
    document.querySelector('#e-book').scrollIntoView({
        behavior: 'smooth'
    });
});

AOS.init();