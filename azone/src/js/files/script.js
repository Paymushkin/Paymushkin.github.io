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

const consultationForm = document.getElementById("consultation-form")

if (consultationForm) {
    consultationForm.addEventListener("submit", function (e) {
        e.preventDefault()
        document.getElementById("consultation").classList.add("_form-sent")
    })
}

const spoilers = document.querySelectorAll(".spoiler")

if (spoilers.length) {
    spoilers.forEach(spoiler => {
        spoiler.addEventListener("click", () => {
            spoiler.classList.toggle("_spoiler-open")
        })
    });
}