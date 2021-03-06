import {createCard} from './popup.js';
import {getData} from './api-service.js';
import {getSuccessHandler} from './get-success-handler.js';
import {getErrorHandler} from './error-action-handler.js';
import {activateAdForm} from './activate-ad-form.js';
import {filterAdverts} from './filter.js';

const ADVERT_COUNTER = 10;
const CITY_CENTER = {
  lat: 35.6895,
  lng: 139.69171,
};
const MAP_ZOOM = 12;

const addressInput = document.querySelector('#address');
const mapInteractive = L.map('map-canvas');
let mainPinMarker;
let markerGroup;

export const removeMarkerGroup = () => {
  for (const layer in markerGroup._layers) {
    mapInteractive.removeLayer(markerGroup._layers[layer]);
  }
};

export const setPinMarkerStartState = () => {
  mainPinMarker.setLatLng(CITY_CENTER);
  mapInteractive.setView(CITY_CENTER, MAP_ZOOM);
};

export const addMarkersGroup = (arr) => {
  markerGroup = L.layerGroup().addTo(mapInteractive);
  arr
    .filter(filterAdverts)
    .slice(0, ADVERT_COUNTER)
    .forEach((el) => {
      const marker = L.marker(
        {
          lat: el.location.lat,
          lng: el.location.lng,
        },
        {
          icon: L.icon({
            iconUrl: '../img/pin.svg',
            iconSize: [40, 40],
            iconAnchor: [20, 40],
          }),
        },
      );
      marker.addTo(markerGroup).bindPopup(createCard(el), {
        keepInView: true,
      });
    });
};

const setAddress = () => {
  const {lat, lng} = mainPinMarker.getLatLng();
  addressInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

export const initMap = () => {
  mapInteractive
    .on('load', () => {
      activateAdForm();
      getData(getSuccessHandler, getErrorHandler);
    })
    .setView(CITY_CENTER, MAP_ZOOM);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mapInteractive);

  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  mainPinMarker = L.marker(
    CITY_CENTER,
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  setAddress();
  mainPinMarker.addTo(mapInteractive).on('move', () => setAddress());
};
