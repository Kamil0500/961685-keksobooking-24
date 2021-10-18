import { getRandomNumber } from '../utils/utils.js';

const AVATARS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];

const DESCRIPTION = 'Жильё со всеми удобствами в центре города';

const TITLES = ['Уютное гнездышко для молодоженов', 'Уютное гнездышко для молодоженов'];

const TYPES = ['Дворец', 'Квартира', 'Дом', 'Бунгало', 'Отель'];

const TIMES = ['12:00', '13:00', '14:00'];
const LAT_MIN = 35.65;
const LAT_MAX = 35.7;
const LNG_MIN = 139.7;
const LNG_MAX = 139.8;

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomElement = (array) => {
  const randomLength = getRandomNumber(0, array.length - 1);
  const randomElement = array[randomLength];
  return randomElement;
};

const getRandomArray = (array) => {
  const randomArray = [];
  const arraylength = getRandomNumber(0, array.length);

  for (let index = 0; index < arraylength; index++) {
    const arrayElement = getRandomElement(array);
    randomArray.push(arrayElement);
  }

  return Array.from(new Set(randomArray));
};

const newArray = () => {
  const location = {
    lat: getRandomNumber(LAT_MIN, LAT_MAX, 5),
    lng: getRandomNumber(LNG_MIN, LNG_MAX, 5),
  };

  return {
    author: {
      avatar: getRandomElement(AVATARS),
    },
    offer: {
      title: getRandomElement(TITLES),
      address: `{${location.lat}, ${location.lng}}`,
      price: getRandomNumber(1000, 10000),
      type: getRandomElement(TYPES),
      rooms: getRandomNumber(1, 5),
      guests: getRandomNumber(1, 5),
      checkin: getRandomElement(TIMES),
      checkout: getRandomElement(TIMES),
      features: getRandomArray(FEATURES),
      description: DESCRIPTION,
      photos: getRandomArray(PHOTOS),
    },
    location,
  };
};

export {newArray};
