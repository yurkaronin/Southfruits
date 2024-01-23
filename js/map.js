
if (document.querySelector('.js-map')) {
  let center = [45.107222, 39.099101];
  console.log(document.querySelector('.js-map'));

  function init() {
    let mapElement = document.querySelector('.js-map');
    let map = new ymaps.Map(mapElement, {
      center: center,
      zoom: 17
    });

    let placeMark = new ymaps.Placemark([45.107222, 39.099101], {
      hintContent: 'Южные фрукты',
      balloonContentHeader: 'Южные фрукты',
      balloonContentFooter: '350056 , Краснодарский край, город Краснодар, п. Индустриальный, Перспективная территория, д. 699, помещение 8.'
    }, {
      iconLayout: 'default#image',
      iconImageHref: './img/map/balun.svg',
      iconImageSize: [88, 100],
      iconImageOffset: [-44, -100]
    });

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.behaviors.disable(['scrollZoom']);

    map.geoObjects.add(placeMark);

    placeMark.events.add('mouseenter', function (e) {
      e.get('target').options.set('iconImageHref', './img/map/balun-hover.svg');
    });

    placeMark.events.add('mouseleave', function (e) {
      e.get('target').options.set('iconImageHref', './img/map/balun.svg');
    });
  }

  ymaps.ready(init);
};

