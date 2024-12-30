
// function mapAdd() {
// 	let tag = document.createElement('script');
// 	tag.src = "https://maps.google.com/maps/api/js?sensor=false&amp;key=&callback=mapInit";
// 	let firstScriptTag = document.getElementsByTagName('script')[0];
// 	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// }
// function mapInit(n = 1) {
// 	google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
// 		var map = this;
// 		var ov = new google.maps.OverlayView();
// 		ov.onAdd = function () {
// 			var proj = this.getProjection();
// 			var aPoint = proj.fromLatLngToContainerPixel(latlng);
// 			aPoint.x = aPoint.x + offsetX;
// 			aPoint.y = aPoint.y + offsetY;
// 			map.panTo(proj.fromContainerPixelToLatLng(aPoint));
// 			//map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
// 		}
// 		ov.draw = function () { };
// 		ov.setMap(this);
// 	};
// 	var markers = new Array();
// 	var infowindow = new google.maps.InfoWindow({
// 		//pixelOffset: new google.maps.Size(-230,250)
// 	});
// 	var locations = [
// 		[new google.maps.LatLng(53.819055, 27.8813694)],
// 		[new google.maps.LatLng(53.700055, 27.5513694)],
// 		[new google.maps.LatLng(53.809055, 27.5813694)],
// 		[new google.maps.LatLng(53.859055, 27.5013694)],
// 	]
// 	var options = {
// 		zoom: 10,
// 		panControl: false,
// 		mapTypeControl: false,
// 		center: locations[0][0],
// 		styles: [{ "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#e0efef" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "hue": "#1900ff" }, { "color": "#c0e8e8" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 100 }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "lightness": 700 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#7dcdcd" }] }],
// 		scrollwheel: false,
// 		mapTypeId: google.maps.MapTypeId.ROADMAP
// 	};
// 	var map = new google.maps.Map(document.getElementById('map'), options);
// 	var icon = {
// 		url: 'img/icons/map.svg',
// 		scaledSize: new google.maps.Size(18, 20),
// 		anchor: new google.maps.Point(9, 10)
// 	}
// 	for (var i = 0; i < locations.length; i++) {
// 		var marker = new google.maps.Marker({
// 			icon: icon,
// 			position: locations[i][0],
// 			map: map,
// 		});
// 		google.maps.event.addListener(marker, 'click', (function (marker, i) {
// 			return function () {
// 				for (var m = 0; m < markers.length; m++) {
// 					markers[m].setIcon(icon);
// 				}
// 				var cnt = i + 1;
// 				//infowindow.setContent(document.querySelector('.events-map__item_' + cnt).innerHTML);
// 				//infowindow.open(map, marker);
// 				marker.setIcon(icon);
// 				map.setCenterWithOffset(marker.getPosition(), 0, 0);
// 				setTimeout(function () {

// 				}, 10);
// 			}
// 		})(marker, i));
// 		markers.push(marker);
// 	}
// 	if (n) {
// 		var nc = n - 1;
// 		setTimeout(function () {
// 			google.maps.event.trigger(markers[nc], 'click');
// 		}, 500);
// 	}
// }
// if (document.querySelector('#map')) {
// 	mapAdd();
// }


// YA
// ymaps.ready(init);

// function init() {
// 	var center = [56.136, 40.390];
// 	var myMap1 = new ymaps.Map('map-office', {
// 		center: center,
// 		zoom: 10
// 	});
// 	var myMap2 = new ymaps.Map('map2', {
// 		center: center,
// 		zoom: 10
// 	});
// 	var myPlacemark1 = new ymaps.Placemark(center, {
// 		// Свойства.
// 		// Содержимое иконки, балуна и хинта.
// 		iconContent: '1',
// 		balloonContent: 'Балун',
// 		hintContent: 'Стандартный значок метки'
// 	}, {
// 		// Опции.
// 		// Стандартная фиолетовая иконка.
// 		preset: 'twirl#violetIcon'
// 	});
// 	var myPlacemark2 = new ymaps.Placemark(center, {
// 		// Свойства.
// 		// Содержимое иконки, балуна и хинта.
// 		iconContent: '2',
// 		balloonContent: 'Балун',
// 		hintContent: 'Стандартный значок метки'
// 	}, {
// 		// Опции.
// 		// Стандартная фиолетовая иконка.
// 		preset: 'twirl#violetIcon'
// 	});
// 	myMap1.geoObjects.add(myPlacemark1);
// 	myMap2.geoObjects.add(myPlacemark2);
// }

let center = [55.81, 37.64];
function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 10
	});
	// 1. Метка с точкой.
	var myPlacemark1 = new ymaps.Placemark([55.836236, 37.550783], null, {
		iconLayout: 'default#image',
		iconImageHref: "img/point-1.png",
		iconImageSize: [35, 48],
		iconImageOffset: [-15, -44]
	});
	var myPlacemark2 = new ymaps.Placemark([55.783154, 37.717528], null, {
		iconLayout: 'default#image',
		iconImageHref: "img/point-2.png",
		iconImageSize: [35, 48],
		iconImageOffset: [-15, -44]
	});
	map.geoObjects.add(myPlacemark1).add(myPlacemark2);
	// map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	// map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	// map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}
ymaps.ready(init);