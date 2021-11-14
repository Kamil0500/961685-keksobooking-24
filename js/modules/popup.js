const housingTypes = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
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
    const element = parent.querySelector(cssClass);
    const span = document.createElement('span');
    span.textContent = ' ₽/ночь';
    element.textContent = data;
    element.appendChild(span);
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


export const createCard = ({offer, author}) => {
  const cardTemplate = document.querySelector('#card').content;
  const card = cardTemplate.querySelector('.popup');
  const newCard = card.cloneNode(true);
  createSimpleMarkup(newCard, '.popup__title', offer.title);
  createSimpleMarkup(newCard, '.popup__text--address', offer.address);
  createSimpleMarkup(newCard, '.popup__type', housingTypes[offer.type]);
  createSimpleMarkup(newCard, '.popup__description', offer.description);
  createAvatarMarkup(newCard, '.popup__avatar', author.avatar);
  createPriceMarkup(newCard, '.popup__text--price', offer.price);
  createCapacityMarkup(newCard, '.popup__text--capacity', offer.rooms, offer.guests);
  createTimesMarkup(newCard, '.popup__text--time', offer.checkin, offer.checkout);
  createFeaturesMarkup(newCard, '.popup__features', offer.features);
  createPhotosMarkup(newCard, '.popup__photos', offer.photos);

  return newCard;
};
