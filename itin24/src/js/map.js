if ($("#map").length > 0) {


  ymaps.ready(init);

  function init() {
    var contactsMap = new ymaps.Map("map", {
      center: [55.429415, 37.276958],
      zoom: 17,
      controls: []
    });


    closeBalloon = function () {
      contactsMap.balloon.close();
    };


    var contactsPlacemark = new ymaps.Placemark(
      [55.429471, 37.275072],
      {},
      {
        iconLayout: "default#imageWithContent",
        iconImageHref: "../img/geo-icon.svg",
        iconImageSize: [36, 50],
        iconImageOffset: [-10, -70],
        // balloonLayout: MyBalloonLayout,
        hideIconOnBalloonOpen: false
      }
    );
    contactsMap.geoObjects.add(contactsPlacemark);
    contactsMap.controls.add(zoomControl);
    contactsMap.behaviors.disable("scrollZoom");
    contactsMap.behaviors.disable('drag');
  }


}
