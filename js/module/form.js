const formElement = document.querySelector('.ad-form');
const roomsInputElement = document.querySelector('#room_number');
const guestInputElement = document.querySelector('#capacity');
const priceInputElement = document.querySelector('#price');
const typeInputElement = document.querySelector('#type');
const timeInInput = document.querySelector('#timein');
const timeOutInput = document.querySelector('#timeout');

const minPriceRooms = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const onChangeTypeElement = function () {
  priceInputElement.placeholder = minPriceRooms[typeInputElement.value];
  priceInputElement.min = minPriceRooms[typeInputElement.value];
};
onChangeTypeElement();

const onTimeChange = function (evt) {
  switch (evt.target) {
    case timeInInput:
      timeOutInput.value = timeInInput.value;
      break;
      case timeOutInput:
        timeInInput.value = timeOutInput.value;
        break;
  }
};

const onRoomsChange = function (evt) {
  switch (evt.target) {
    case roomsInputElement:
      guestInputElement.value = roomsInputElement.value;
      break;
      case guestInputElement:
        roomsInputElement.value = guestInputElement.value;
        break;
  }
};

formElement.addEventListener('change', onRoomsChange);
formElement.addEventListener('change', onTimeChange);
typeInputElement.addEventListener('change', onChangeTypeElement);
