import {removeMarkerGroup} from './map.js';

const FILTERING_DELAY = 500;
const filterForm = document.querySelector('.map__filters');
const housingTypeFilter = filterForm.querySelector('#housing-type');
const housingPriceFilter = filterForm.querySelector('#housing-price');
const roomsQuantityFilter = filterForm.querySelector('#housing-rooms');
const guestsQuantityFilter = filterForm.querySelector('#housing-guests');
const featuresFilter = filterForm.querySelector('#housing-features');

const PriceTypes = {
  'LOW': 10000,
  'HIGH': 50000,
};

let timer;

const getFilterByHousingPrice = (price) => {
  switch (housingPriceFilter.value) {
    case 'low':
      return price < PriceTypes['LOW'];
    case 'middle':
      return price >= PriceTypes['LOW'] && price <= PriceTypes['HIGH'];
    case 'high':
      return price > PriceTypes['HIGH'];
    default:
      return true;
  }
};

const getFilterByRooms = (rooms) => roomsQuantityFilter.value === 'any' || rooms === +roomsQuantityFilter.value;
const getFilterByGuests = (guests) => guestsQuantityFilter.value === 'any' || guests === +guestsQuantityFilter.value;
const getFilterByHousingType = (type) => housingTypeFilter.value === 'any' || type === housingTypeFilter.value;

const getFilterByFeatures = (features) => {
  if (features) {
    const selectedFeatures = featuresFilter.querySelectorAll('input:checked');
    return [...selectedFeatures].every((element) => features.includes(element.value));
  }
  return false;
};

export const filterAdverts = ({offer}) =>
  getFilterByRooms(offer.rooms) &&
  getFilterByGuests(offer.guests) &&
  getFilterByHousingType(offer.type) &&
  getFilterByHousingPrice(offer.price) &&
  getFilterByFeatures(offer.features);

export const setResRanking = (res) =>
  res
    .reduce((acc, item) => {
      const rank = item.offer.features && item.offer.features.length ? item.offer.features.length : 0;
      item.rank = rank;
      acc.push(item);
      return acc;
    }, [])
    .sort((a, b) => b.rank - a.rank);



export const setFilterFormChange = (cb) => {
  filterForm.addEventListener('change', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      removeMarkerGroup();
      cb();
    }, FILTERING_DELAY);
  });
};
