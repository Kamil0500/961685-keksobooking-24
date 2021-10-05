const getRandomNumber = function (min, max, decimalPlaces = 0) {
  if (min > max || min < 0 || max <= 0) {

    return false;
  }
  return (Math.random() * (max - min) + min).toFixed(decimalPlaces);
};

getRandomNumber();

const avatar = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png'
];

const title = [
  'Квартира',
  'Дом',
  'Комната'
];

const address = ['location.lat', 'location.lng'];
const price = [5000, 10000, 50000];

const type = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const rooms = [1, 2, 3, 4, 5];
const guests = [1, 2, 3, 4, 5];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const description = ['Просторная, уютная, со всеми удобствами'];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const lat = [35.65000, 35.70000];
const lng = [139.70000, 139.80000];


const countObject = 10;

const getRandomElement = (element) => {
 return element [(Math.floor(Math.random() * (element.length -1)))]
};

let getLocation = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const newArray = () => {
  return {
    author: getRandomElement(avatar),
    offer: getRandomElement(title) + ' ' + getRandomElement(address) + ' ' + getRandomElement(price) + ' ' + getRandomElement(type) + ' ' + getRandomElement(rooms) + ' ' + getRandomElement(guests) + ' ' + getRandomElement(checkin) + ' ' + getRandomElement(checkout) + ' ' +  getRandomElement(features) + ' ' + getRandomElement(description),
    photo: getRandomElement(photos),
    location: getRandomElement(lat) + ' ' + getRandomElement(lng)
  };
};

const countArray = Array.from({length: countObject}, newArray);

console.log(countArray);
