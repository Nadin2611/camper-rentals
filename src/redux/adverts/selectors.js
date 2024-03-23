export const selectAdverts = state => state.adverts.adverts;

export const selectOneAdvert = state => state.adverts.oneAdvert;

export const selectFavoriteIds = state => state.adverts.adverts.favorites;

export const selectAdvertsLoading = state => state.adverts.isLoading;

export const selectAdvertsError = state => state.adverts.error;
