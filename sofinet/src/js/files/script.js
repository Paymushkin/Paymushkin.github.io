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

const specificSection = document.getElementById("specific") || null
const openHideFilters = document.getElementById("openHideFilters") || null
const showHideOptions = document.getElementById("showHideOptions") || null
const addOptions = document.getElementById("addOptions") || null
const userAvatar = document.getElementById("userAvatar") || null
const contentNavs = document.querySelectorAll("[data-nav]")
const optionTabs = document.getElementById("optionTabs") || null
const optionButtons = document.querySelectorAll(".options__button")

if (showHideOptions) {
    showHideOptions.addEventListener("click", ()=> {
        showHideOptions.classList.toggle("_active")

        if (showHideOptions.classList.contains("_active")) {
            addOptions.classList.add("_active")
        }

        else {
            addOptions.classList.remove("_active")
        }
    })
}

if (userAvatar) {
    const menu = document.querySelector(".header__menu")

    userAvatar.addEventListener("click", ()=> {
        menu.classList.toggle("_active")
    })
}

if (contentNavs.length > 0) {
    const contentElements = document.querySelectorAll("[data-content]")
    contentNavs.forEach(el => {
        el.addEventListener("click", ()=> {
            contentNavs.forEach(element => {
                element.classList.remove("_active")
            });
            el.classList.add("_active")

            contentElements.forEach(element => {
                element.classList.remove("_active")
            });
            let currentActiveSection = document.querySelector(`[data-content="${el.dataset.nav}"]`)
            currentActiveSection.classList.add("_active")
            specificSection.className = `specific ${currentActiveSection.dataset.view}`
        })
    });
}

if (openHideFilters) {
   const filters = document.querySelector(".specific-header__options")
   openHideFilters.addEventListener("click", ()=> {
    openHideFilters.classList.toggle("_active")
    filters.classList.toggle("_active")
   })
}

if (optionTabs) {
    const optionsButtons = optionTabs.querySelectorAll(".options__item")

    optionsButtons.forEach(el => {
        el.addEventListener("click", ()=> {
            optionsButtons.forEach(element => {
                element.classList.remove("_active")
            });
            if(!el.classList.contains('_selected')) el.classList.add("_active")
        })
    });

    console.log(optionsButtons)
}

if (optionButtons.length > 0) {
    optionButtons.forEach(element => {
        element.querySelector(".options__delete").addEventListener("click", ()=> {
            element.parentElement.classList.remove("_selected")
        })
    });

    let optionsListItems = document.querySelectorAll("#optionTabs .options-inner li")
    console.log(optionsListItems)

    optionsListItems.forEach(el => {
        el.addEventListener("click", ()=>{
            console.log(el.parentNode.parentNode.parentNode)
            optionTabs.querySelectorAll(".options__item").forEach(element => {
                element.classList.remove("_selected")
            })
            el.parentNode.parentNode.parentNode.classList.add("_selected")
            el.parentNode.parentNode.parentNode.querySelector(".options__button span").textContent = el.dataset.id
        })
    });
}