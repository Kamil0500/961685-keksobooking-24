const form = document.querySelector('.ad-form');
const rooms = form.querySelector('#room_number');
const guests = form.querySelector('#capacity');
const price = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

const ofGuestsAndRooms = () => {
  if (rooms.value !== '100' && guests.value === '0') {
    guests.setCustomValidity('Мало гостей');
  } else if (rooms.value < guests.value) {
    guests.setCustomValidity('Много гостей');
  } else if (rooms.value === '100' && guests.value !== '0') {
    guests.setCustomValidity('Не для гостей');
  } else {
    guests.setCustomValidity('');
  }
};

rooms.addEventListener('change', () => {
  ofGuestsAndRooms();
});

guests.addEventListener('change', () => {
  ofGuestsAndRooms();
});

form.addEventListener('click', () => {
  ofGuestsAndRooms();
});

const onTimeIn = function (evt) {
  timeIn.value = evt.target.value;
};
const onTimeOut = function (evt) {
  timeOut.value = evt.target.value;
};

form.addEventListener('change', onTimeIn);
form.addEventListener('change', onTimeOut);
