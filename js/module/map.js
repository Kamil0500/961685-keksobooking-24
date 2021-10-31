import {cardArray, cardList} from './generation-elements.js';
const resetButton = document.querySelector('.ad-form__reset');
const address = document.querySelector('#address');

const map = L.map('map-canvas').on('load', () => {})
.setView({
  lat: 35.7,
  lng: 139.7,
}, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker ({
  lat: 35.7,
  lng: 139.7,
},
{
  draggable: true,
  icon: mainPinIcon,
});
mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: 35.7,
    lng: 139.7,
  });
  map.setView({
    lat: 35.7,
    lng: 139.7,
  }, 12);
});

const points = cardArray;

const createCustomPopup = () => {
  const balloonTemplate = cardList;
  const popupElement = balloonTemplate.cloneNode(true);

  return popupElement;
};

points.forEach((element) => {
  const pin = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat: element.location.lat,
      lng: element.location.lng,
    },
    {
      icon:pin,
    },
  );

  marker
    .addTo(map)
    .bindPopup(createCustomPopup);
});
