export const getRandomNumber = (min, max, decimalPlaces = 0) => {
  if (min > max || min < 0 || max <= 0) {

    return false;
  }

  return +(Math.random() * (max - min) + min).toFixed(decimalPlaces);
};
