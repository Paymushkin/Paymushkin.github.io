// Подключение функционала "Чертогов Фрилансера"
import {
    isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
    flsModules
} from "./modules.js";

// const passwordInput = document.getElementById("inputPassword")
// const showHideIcon = document.getElementById("showHideIcon")
// showHideIcon.addEventListener("click", () => {
//     if (passwordInput.type !== "text") {
//         passwordInput.type = "text"
//     } else passwordInput.type = "password"
// })
// console.log(passwordInput)
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', function () {
        if (this.value) {
            this.classList.add('used');
        } else {
            this.classList.remove('used');
        }
    });
});