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
					if (clientClassTypeValue == 'День Рождения') {
						waLink = `https://wa.me/+79119145730?text=Здравствуйте, меня зовут ${clientNameValue}. Хочу с Вами организовать ${clientClassTypeValue}`
					}
					else if (clientClassTypeValue == 'абонемент на индивидуальные') {
						waLink = `https://wa.me/+79119145730?text=Здравствуйте, меня зовут ${clientNameValue}. Хочу приобрести ${clientClassTypeValue} занятия`
					}
					else if (clientClassTypeValue == 'индивидуальное') {
						waLink = `https://wa.me/+79119145730?text=Здравствуйте, меня зовут ${clientNameValue}. Хочу записаться на ${clientClassTypeValue} занятие`
					}
					else {
						waLink = `https://wa.me/+79119145730?text=Здравствуйте, меня зовут ${clientNameValue}. Хочу записаться на ${clientClassTypeValue} занятия`
					}
					
					window.open(waLink, '_blank');
					break
				
				case 'name-service':
					if (clientServiceTypeValue == 'День Рождения') {
						waLink = `https://wa.me/+79119145730?text=Здравствуйте, меня зовут ${clientNameValue}. Хочу с Вами организовать ${clientServiceTypeValue}`
					}
					else if (clientServiceTypeValue == 'абонемент на индивидуальные') {
						waLink = `https://wa.me/+79119145730?text=Здравствуйте, меня зовут ${clientNameValue}. Хочу приобрести ${clientServiceTypeValue} занятия`
					}
					else if (clientServiceTypeValue == 'индивидуальное') {
						waLink = `https://wa.me/+79119145730?text=Здравствуйте, меня зовут ${clientNameValue}. Хочу записаться на ${clientServiceTypeValue} занятие`
					}
					else {
						waLink = `https://wa.me/+79119145730?text=Здравствуйте, меня зовут ${clientNameValue}. Хочу записаться на ${clientServiceTypeValue} занятия`
					}
					window.open(waLink, '_blank');
					break
		
				case 'name-class':
					if (classType == 'День Рождения') {
						waLink = `https://wa.me/+79119145730?text=Здравствуйте, меня зовут ${clientNameValue}. Хочу с Вами организовать ${classType}`
					}
					else if (classType == 'абонемент на индивидуальные') {
						waLink = `https://wa.me/+79119145730?text=Здравствуйте, меня зовут ${clientNameValue}. Хочу приобрести ${classType} занятия`
					}
					else if (classType == 'индивидуальное') {
						waLink = `https://wa.me/+79119145730?text=Здравствуйте, меня зовут ${clientNameValue}. Хочу записаться на ${classType} занятие`
					}
					else {
						waLink = `https://wa.me/+79119145730?text=Здравствуйте, меня зовут ${clientNameValue}. Хочу записаться на ${classType} занятия`
					}
					// waLink = `https://wa.me/+79119145730?text=Здравствуйте, меня зовут ${clientNameValue}. Хотели бы записаться на ${classType} занятие`
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
