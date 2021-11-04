import { setEnabledFormState } from './set-page-state.js';
import { createCard } from './generation-elements.js';
import { newArray } from './fake-data.js';

const resetButton = document.querySelector('.ad-form__reset');
export const addFormElement = document.querySelector('.ad-form');
const address = addFormElement.querySelector('#address');
const mapInteractive = L.map('map-canvas');
let mainPinMarker;
let markerGroup;

const CITY_CENTER = {
  lat: 35.9865,
  lng: 139.69171,
};

const COUNT_OBJECT = 10;
const cardArray = Array.from({ length: COUNT_OBJECT }, newArray);

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng (CITY_CENTER);
  mapInteractive.setView(CITY_CENTER, 12);
});

const addMarkersGroup = () => {
  markerGroup = L.layerGroup().addTo(mapInteractive);
  cardArray.forEach((el) => {
    const lat = el.location.lat;
    const lng = el.location.lng;

    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );

    marker.addTo(markerGroup).bindPopup(createCard(el), {
      keepInView: true,
    });
  });
};

export const initMap = () => {
  mapInteractive.on('load', () => {
    setEnabledFormState(addFormElement);
    addMarkersGroup();
  }).setView(CITY_CENTER, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(mapInteractive);

  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  mainPinMarker = L.marker(CITY_CENTER,
    {
      draggable: true,
      icon: mainPinIcon,
    });

  mainPinMarker.addTo(mapInteractive);

  address.value = `${CITY_CENTER.lat.toFixed(5)}, ${CITY_CENTER.lng.toFixed(5)}`;

  mainPinMarker.on('moveend', (evt) => {
    address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
  });
};
