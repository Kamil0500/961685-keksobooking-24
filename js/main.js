const getRandomNumber = function (min, max, decimalPlaces = 0) {
  if (min > max || min < 0 || max <= 0) {
    console.log("Введён неверный диапазон чисел");
    return false;
  }
  return (Math.random() * (max - min) + min).toFixed(decimalPlaces);
};

getRandomNumber();
