let getRandomNumber = function (min, max, number_decimal_places = 0) {
  if (min > max || min < 0 || max <= 0) {
    return false;
  } else {
    let degree_number = 10 ** number_decimal_places;
    return (Math.floor((Math.random() * (max - min) + min) * degree_number) / degree_number);
  }
};
getRandomNumber();
