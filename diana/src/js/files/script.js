// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// AOS.init({
// 	duration: 1000
// });


const requestForms = document.querySelectorAll(".send-request")

requestForms.forEach(requestForm => {
	const formType = requestForm.getAttribute("data-type")
	const clientName = requestForm.querySelector(".name") || null
	const clientPhone = requestForm.querySelector(".phone") || null
	// const clientClassType = requestForm.querySelector('input[name="type-class"]:checked') || null
	const links = requestForm.querySelectorAll(".form-button");

	let waLink = ""
	let clientNameValue = ""
	let clientServiceTypeValue = ""
	let clientClassTypeValue = ""
	document.addEventListener("selectCallback", function (e) {
		// Селект
		clientServiceTypeValue = e.detail.select.value;
	});

	links.forEach(link => {
		link.addEventListener('click', (e)=> {
			e.preventDefault()
			
			clientNameValue = clientName.value
			const clientClassType = requestForm.querySelector('input[name="type-class"]:checked')
			if (clientClassType) {
				clientClassTypeValue = clientClassType.value
			}

			const classType = requestForm.getAttribute("data-class")
			console.log(classType)
			

			switch(formType) {
				case 'name-persons':
					// clientNameValue = clientName.value
					// const clientClassTypeValue = requestForm.querySelector('input[name="type-class"]:checked').value
					waLink = `https://wa.me/+79119145730?text=Здравствуйте! Меня зовут ${clientNameValue}. Меня интересует ${clientClassTypeValue} занятие`
					window.open(waLink, '_blank');
					break
				
				case 'name-service':
					// clientNameValue = clientName.value
					waLink = `https://wa.me/+79119145730?text=Здравствуйте! Меня зовут ${clientNameValue}. Меня интересует ${clientServiceTypeValue}`
					window.open(waLink, '_blank');
					break
		
				case 'name-class':
					waLink = `https://wa.me/+79119145730?text=Здравствуйте! Меня зовут ${clientNameValue}. Меня интересует ${classType}`
					window.open(waLink, '_blank');
					break
				
				default:
					break
			}

			link.setAttribute('href', waLink)
		})
	});


	// if (clientName) {
	// 		clientName.addEventListener("change", ()=> {
	// 			clientNameValue = clientName.value
	// 			console.log(clientNameValue)
	// 		})
	// }



	// if (clientPhone) {
	// 	clientPhone.addEventListener("change", ()=> {
	// 		clientPhoneValue = clientPhone.value
	// 		console.log(clientPhoneValue)
	// 	})
	// }

	// if (clientClassType) {
	// 	clientClassType.addEventListener("change", ()=> {
	// 		clientClassTypeValue = clientClassType.value
	// 		console.log(clientClassTypeValue)
	// 	})
	// }

	// console.log(clientName, clientPhone, clientClassType, clientServiceType)
	// console.log(clientNameValue, clientPhoneValue, clientClassTypeValue, clientServiceTypeValue)
	// console.log(clientServiceType.options[select.selectedIndex].value)
});

// console.log(document.querySelector(".select__content").textContent)
