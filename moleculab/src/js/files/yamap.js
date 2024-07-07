// яндекс карты

let center = [55.76, 37.64];

function init() {
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 10
    });

    // 1. Метка с точкой.
    var myPlacemark1 = new ymaps.Placemark([55.85, 37.45], null, {
        iconLayout: 'default#image',
        iconImageHref: "/img/point.png",
        iconImageSize: [35, 48],
        iconImageOffset: [-15, -44]
    });
    var myPlacemark2 = new ymaps.Placemark([55.7, 37.55], null, {
        iconLayout: 'default#image',
        iconImageHref: "/img/point.png",
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
