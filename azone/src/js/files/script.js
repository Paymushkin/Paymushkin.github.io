// Подключение функционала "Чертогов Фрилансера"
import {
    isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
    flsModules
} from "./modules.js";

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