export const getUniqueLocations = adverts => {
  return [...new Set(adverts.map(advert => advert.location))];
};

export const formatPrice = price => {
  return price.toFixed(2);
};

export const reverseLocation = location => {
  return location.split(', ').reverse().join(', ');
};

export const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
