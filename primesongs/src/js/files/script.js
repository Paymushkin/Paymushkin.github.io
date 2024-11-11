// Подключение функционала "Чертогов Фрилансера"
import {
    isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
    flsModules
} from "./modules.js";

const mobileMenuBtn = document.getElementById("mobileMenuBtn")

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
        document.body.classList.toggle("_menu-open")
    })
}