const titleInput = document.querySelector('#title');
const housingTypeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');
const roomQuantitySelect = document.querySelector('#room_number');
const guestQuantitySelect = document.querySelector('#capacity');
const guestQuantityOption = document.querySelectorAll('#capacity option');
const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');

const typeToPrice = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',
};

const roomsToOptions = {
  '1': {
    value: 1,
    items: [2],
  },
  '2': {
    value: 2,
    items: [2, 1],
  },
  '3': {
    value: 3,
    items: [2, 1, 0],
  },
  '100': {
    value: 0,
    items: [3],
  },
  'default': {
    value: 0,
    items: [3, 2, 1, 0],
  },
};

const titleInputHandler = ({target}) => {
  if (target.value.length < target.minLength) {
    target.setCustomValidity(`Ещё ${target.minLength - target.value.length } симв.`);
  } else if (target.value.length > target.maxLength) {
    target.setCustomValidity(`Удалите лишние ${target.value.length - target.maxLength} симв.`);
  } else {
    target.setCustomValidity('');
  }
  target.reportValidity();
};

const timeOutSelectHandler = ({target}) => {
  timeInSelect.value = target.value;
};

const timeInSelectHandler = ({target}) => {
  timeOutSelect.value = target.value;
};

const priceInputHandler = ({target}) => {
  if (target.validity.rangeOverflow) {
    target.setCustomValidity('Максимальное значение - 1 000 000');
  } else if (target.validity.valueMissing) {
    target.setCustomValidity('Обязательное поле');
  } else {
    target.setCustomValidity('');
  }
  target.reportValidity();
};

export const changePriceInputState = () => {
  priceInput.min = typeToPrice[housingTypeSelect.value];
  priceInput.placeholder = typeToPrice[housingTypeSelect.value];
};

export const changeRoomQuantityInputState = () => {
  if(!roomsToOptions[roomQuantitySelect.value]) {
    return roomQuantitySelect.value = 'default';
  }
  guestQuantityOption.forEach((option) => {
    option.disabled = true;
  });
  roomsToOptions[roomQuantitySelect.value].items.forEach((item) => {
    guestQuantityOption[item].disabled = false;
  });
  guestQuantitySelect.value = roomsToOptions[roomQuantitySelect.value].value;
};

const housingTypeSelectHandler = () => {
  changePriceInputState();
  priceInput.setCustomValidity('Изменился диапазон допустимых цен');
  priceInput.reportValidity();
};

const roomQuantitySelectHandler = () => {
  changeRoomQuantityInputState();
};

export const initFormValidation = () => {
  changePriceInputState(housingTypeSelect);
  changeRoomQuantityInputState(roomQuantitySelect);
  titleInput.addEventListener('input', titleInputHandler);
  housingTypeSelect.addEventListener('change', housingTypeSelectHandler);
  priceInput.addEventListener('input', priceInputHandler);
  roomQuantitySelect.addEventListener('change', roomQuantitySelectHandler);
  timeInSelect.addEventListener('change', timeInSelectHandler);
  timeOutSelect.addEventListener('change', timeOutSelectHandler);
};
