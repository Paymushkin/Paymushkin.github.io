// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// AOS.init({
// 	duration: 1000
// });

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
			document.documentElement.classList.remove("menu-open", "lock")
		})
	});
}
