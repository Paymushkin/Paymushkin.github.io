// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
AOS.init({
	duration: 1000
});
// const menuOpenClose = document.getElementById("menu"),
// 	headerContainer = document.getElementById("header"),
// 	headerSearchOpen = document.getElementById("search"),
// 	headerSearchClose = document.getElementById("close"),
// 	headerLang = document.getElementById("lang"),
// 	pageParams = new URLSearchParams(window.location.search),
// 	siteLang = pageParams.get('lang'),
// 	currentLang = document.getElementById("current-lang"),
// 	loader = document.getElementById("loader")

// menuOpenClose.addEventListener("click", ()=> {
// 	headerContainer.classList.toggle("menu--active")
// })

// headerSearchOpen.addEventListener("click", ()=> {
// 	headerContainer.classList.add("search--active")
// })

// headerSearchClose.addEventListener("click", ()=> {
// 	headerContainer.classList.remove("search--active")
// })

// headerLang.addEventListener("click", ()=> {
// 	headerContainer.classList.toggle("lang--active")
// })

// currentLang.textContent = siteLang || "RU";

// document.addEventListener("DOMContentLoaded", () => {
// 	setTimeout(() => {
// 		loader.remove()
// 	}, 2500);
// })


const serviceBtn = document.getElementById("service"),
	  serviceMenu = document.getElementById("service-menu"),
	  serviceMenuItems = serviceMenu.querySelectorAll('li')

if (serviceBtn) {
	serviceBtn.addEventListener("click", ()=> {
		serviceMenu.classList.toggle("active")
	})
}

if (serviceMenuItems) {
	serviceMenuItems.forEach(element => {
		element.addEventListener("click", ()=> {
			document.documentElement.classList.remove("menu-open")
		})
	});
}
