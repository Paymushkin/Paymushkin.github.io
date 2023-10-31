// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const searchBtn = document.getElementById("search-btn"),
	  formFilters = document.getElementById("filters")

if (searchBtn) {
	searchBtn.addEventListener("click", ()=> {
		formFilters.classList.toggle("search-active")
	})
}


const showFilters = document.getElementById("show-filters")
const hideFilters = document.getElementById("hide-filters")
const mobileFilters = document.getElementById("mobile-filters")

if (showFilters) {
	showFilters.addEventListener("click", ()=> {
		mobileFilters.classList.add("active")
	})
}

if (hideFilters) {
	hideFilters.addEventListener("click", ()=> {
		mobileFilters.classList.remove("active")
	})
}