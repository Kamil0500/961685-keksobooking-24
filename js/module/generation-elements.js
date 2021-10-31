import { newArray } from './fake-data.js';

const COUNT_OBJECT = 10;
export const cardList = document.querySelector('#card').content.querySelector('.popup');
export const cardArray = Array.from({ length: COUNT_OBJECT }, newArray);
const cardListFragment = document.createDocumentFragment();

cardArray.forEach((element) => {
  element.location;
});

const TYPES = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
  'hotel': 'Отель',
};

const createSimpleMarkup = (parent, cssClass, data) => {
  if (data) {
    parent.querySelector(cssClass).textContent = data;
    return;
  }
  parent.querySelector(cssClass).remove();
};

const createAvatarMarkup = (parent, cssClass, data) => {
  if (data) {
    parent.querySelector(cssClass).src = data;
    return;
  }
  parent.querySelector(cssClass).remove();
};

const createPriceMarkup = (parent, cssClass, data) => {
  if (data) {
    parent.querySelector(cssClass).innerHTML = `${data} <span>₽/ночь</span>`;
    return;
  }
  parent.querySelector(cssClass).remove;
};

const createCapacityMarkup = (parent, cssClass, roomsData, guestsData) => {
  if (!roomsData && !guestsData) {
    parent.querySelector(cssClass).remove();
    return;
  }
  const roomsString = roomsData ? `${roomsData} комнаты ` : '';
  const guestsString = guestsData ? `для ${guestsData} гостей` : '';
  parent.querySelector(cssClass).textContent = `${roomsString}${guestsString}`;
};

const createTimesMarkup = (parent, cssClass, checkInData, checkOutData) => {
  if (!checkInData && !checkOutData) {
    parent.querySelector(cssClass).remove();
    return;
  }
  const checkInString = checkInData ? `Заезд после ${checkInData} ` : '';
  const checkOutString = checkOutData ? `Выезд до ${checkOutData}` : '';
  const separator = checkInData && checkOutData ? ', ' : '';
  parent.querySelector(cssClass).textContent = `${checkInString}${separator}${checkOutString}`;
};

const createFeaturesMarkup = (parent, cssClass, featuresData) => {
  if (typeof featuresData !== 'object' || !featuresData.length) {
    parent.querySelector(cssClass).remove();
    return;
  }
  let features = '';
  featuresData.forEach((element) => {
    features += `<li class='popup__feature popup__feature--${element}'></li>`;
  });

  parent.querySelector(cssClass).innerHTML = features;
};

const createPhotosMarkup = (parent, cssClass, photosData) => {
  if (typeof photosData !== 'object' || !photosData.length) {
    parent.querySelector(cssClass).remove();
    return;
  }
  let photos = '';
  photosData.forEach((element) => {
    photos += `<img src='${element}' class='popup__photo' width='45' height='40' alt='Фотография жилья'>`;
  });

  parent.querySelector(cssClass).innerHTML = photos;
};


cardArray.forEach(({offer, author}, index) => {
  const cardListClone = cardList.cloneNode(true);
  createSimpleMarkup(cardListClone, '.popup__title', offer.title);
  createSimpleMarkup(cardListClone, '.popup__text--address', offer.address);
  createSimpleMarkup(cardListClone, '.popup__type', TYPES[offer.type]);
  createSimpleMarkup(cardListClone, '.popup__description', offer.description);
  createAvatarMarkup(cardListClone, '.popup__avatar', author.avatar);
  createPriceMarkup(cardListClone, '.popup__text--price', offer.price);
  createCapacityMarkup(cardListClone, '.popup__text--capacity', offer.rooms, offer.guests);
  createTimesMarkup(cardListClone, '.popup__text--time', offer.checkin, offer.checkout);
  createFeaturesMarkup(cardListClone, '.popup__features', offer.features);
  createPhotosMarkup(cardListClone, '.popup__photos', offer.photos);
  if (index) {
    cardListClone.style.display = 'none';
  }
  cardListFragment.appendChild(cardListClone);
});


export {cardListFragment};
