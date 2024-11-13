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


const productsCards = document.querySelectorAll(".product-item")

if (productsCards.length) {
    productsCards.forEach((item) => {
        item.querySelector(".product-item__heart").addEventListener("click", () => {
            item.classList.toggle("_liked")
        })
    })
}