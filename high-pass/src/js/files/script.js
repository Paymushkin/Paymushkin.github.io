// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
	// Создание карты.
	var myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [55.759328, 37.623471],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 13
	});
	var myPlacemark = new ymaps.Placemark([55.770254, 37.635063], {}, {
		iconLayout: 'default#image',
		iconImageHref: '/img/map/pin.png',
		iconImageSize: [12, 12],
		iconImageOffset: [-3, -42]
	});
	myMap.geoObjects.add(myPlacemark);
}

const searchBtn = document.getElementById('search'),
	header = document.getElementById('header')
searchBtn.addEventListener('click', ()=> {
	header.classList.toggle('active')
})