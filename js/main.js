const getRandomNumber = function (min, max, decimalPlaces = 0) {
  if (min > max || min < 0 || max <= 0) {

    return false;
  }

  return +(Math.random() * (max - min) + min).toFixed(decimalPlaces);
};

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

const TITLES = [
  'Квартира',
  'Дом',
  'Комната',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];

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

const countObject = 10;

const getRandomElement = (element) => {

 return element [(Math.floor(Math.random() * (element.length - 1)))]
};


const newArray = () => {
  const location = {
    lat: getRandomNumber(35.65000, 35.70000, 5),
    lng: getRandomNumber(139.70000, 139.80000, 5),
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
      checkin: getRandomElement(CHECKINS),
      checkout: getRandomElement(CHECKOUTS),
      features: getRandomElement(FEATURES),
      description: 'Жильё со всеми удобствами в центре города',
      photos: getRandomElement(PHOTOS),
    },
    location
  };
};

const countArray = Array.from({length: countObject}, newArray);

console.log(countArray);
