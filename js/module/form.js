const formElement = document.querySelector('.ad-form');
const mapFilterElement = document.querySelector('.map__filters');
const roomsSelectElement = document.querySelector('#room_number');
const guestsSelectElement = document.querySelector('#capacity');
const guestsOptionElements = document.querySelectorAll('#capacity option');
const priceInputElement = document.querySelector('#price');
const typeSelectElement = document.querySelector('#type');
const timeInSelectElement = document.querySelector('#timein');
const timeOutSelectElement = document.querySelector('#timeout');

const minPriceRooms = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const trackTypeInputChange = () => {
  priceInputElement.placeholder = minPriceRooms[typeSelectElement.value];
  priceInputElement.min = minPriceRooms[typeSelectElement.value];
};

const onTypeInputChange = () => {
  trackTypeInputChange();
};

const onTimeInChange = ({target}) => {
  timeOutSelectElement.value = target.value;
};

const onTimeOutChange = ({target}) => {
  timeInSelectElement.value = target.value;
};

const roomsToOptions = {
  1: {
    value: 1,
    items: [2],
  },
  2: {
    value: 2,
    items: [2, 1],
  },
  3: {
    value: 3,
    items: [2, 1, 0],
  },
  100: {
    value: 0,
    items: [3],
  },
};

const onRoomsSelectChange = ({target}) => {
  guestsOptionElements.forEach((option) => (option.disabled = true));
  roomsToOptions[target.value].items.forEach((item) => {
    guestsOptionElements[item].disabled = false;
  });
  guestsSelectElement.value = roomsToOptions[roomsSelectElement.value].value;
};

//активная/неактивная форма.

const formElementDisabled = () => {
  formElement.classList.add('ad-form--disabled');
  mapFilterElement.classList.add('map__filters--disabled');
  const interactiveFormElement = formElement.querySelectorAll('fieldset');
  interactiveFormElement.forEach((interactiveElement) => {
    interactiveElement.disabled = true;
  });
};

const formElementNoDisabled = () => {
  formElement.classList.remove('ad-form--disabled');
  mapFilterElement.classList.remove('map__filters--disabled');
  const interactiveFormElement = formElement.querySelectorAll('fieldset');
  interactiveFormElement.forEach((interactiveElement) => {
    interactiveElement.disabled = false;
  });
};

const validateForm = () => {
  formElementDisabled();
  formElementNoDisabled();
  trackTypeInputChange();
  timeInSelectElement.addEventListener('change', onTimeInChange);
  timeOutSelectElement.addEventListener('change', onTimeOutChange);
  typeSelectElement.addEventListener('change', onTypeInputChange);
  roomsSelectElement.addEventListener('change', onRoomsSelectChange);
};
validateForm();
