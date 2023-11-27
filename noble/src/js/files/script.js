// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// AOS.init({
// 	duration: 1000
// });

const serviceBtn = document.getElementById("service"),
	  serviceMenu = document.getElementById("service-menu")

if(document.querySelector("#service-menu")) {
	const serviceMenuItems = serviceMenu.querySelectorAll('li')

	if (serviceMenuItems) {
		serviceMenuItems.forEach(element => {
			element.addEventListener("click", ()=> {
				document.documentElement.classList.remove("menu-open", "lock")
			})
		});
	}
}


if (serviceBtn) {
	serviceBtn.addEventListener("click", ()=> {
		serviceMenu.classList.toggle("active")
	})
}


if(document.querySelector("#account")) {
	const sections = document.querySelectorAll('section');
	const navBtns = document.querySelectorAll('[data-nav]');

	navBtns.forEach(element => {
		element.addEventListener("click", ()=> {
			navBtns.forEach(element => {
				element.classList.remove("_active")
			})
			sections.forEach(element => {
				element.classList.remove("_active")
			});
			element.classList.add("_active")
			const dataSection = element.getAttribute("data-nav")
			const currentSection = document.querySelector(`[data-section="${dataSection}"]`)
			currentSection.classList.add("_active");
			
			console.log(currentSection)
		})
	});
	
	console.log(sections, navBtns)
}


