// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const menuOpenClose = document.getElementById("menu"),
	headerContainer = document.getElementById("header"),
	headerSearchOpen = document.getElementById("search"),
	headerSearchClose = document.getElementById("close"),
	headerLang = document.getElementById("lang"),
	pageParams = new URLSearchParams(window.location.search),
	siteLang = pageParams.get('lang'),
	currentLang = document.getElementById("current-lang"),
	loader = document.getElementById("loader"),
	searchInput = document.getElementById("input-search")

menuOpenClose.addEventListener("click", () => {
	headerContainer.classList.toggle("menu--active")
})

headerSearchOpen.addEventListener("click", () => {
	headerContainer.classList.add("search--active")
	// searchInput.focus()
})

headerSearchClose.addEventListener("click", () => {
	headerContainer.classList.remove("search--active")
	// searchInput.blur()
})

headerLang.addEventListener("click", () => {
	headerContainer.classList.toggle("lang--active")
})

currentLang.textContent = siteLang || "RU";

document.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		loader.remove()
		document.documentElement.classList.remove("lock")
	}, 500);
})