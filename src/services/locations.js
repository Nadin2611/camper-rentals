export const getUniqueLocations = adverts => {
  return [...new Set(adverts.map(advert => advert.location))];
};

export const reverseLocation = location => {
  return location.split(', ').reverse().join(', ');
};
