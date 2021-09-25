const GET_RANDOM_NUMBER = function (min, max, numberDecimalPlaces = 0) {
  if (min > max || min < 0 || max <= 0) {
    return false;
  } else {
    const DEGREE_NUMBER = 10 ** numberDecimalPlaces;
    return (Math.floor((Math.random() * (max - min) + min) * DEGREE_NUMBER) / DEGREE_NUMBER);
  }
};
GET_RANDOM_NUMBER();
