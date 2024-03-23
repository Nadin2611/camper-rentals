import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleRejected } from '../helpers';
import { getAdverts } from './operations';

const loadFavoritesFromLocalStorage =
  JSON.parse(localStorage.getItem('favorites')) || [];

const initialState = {
  adverts: [],
  favorites: loadFavoritesFromLocalStorage,
  isLoading: false,
  error: null,
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      state.favorites.push(payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFromFavorites(state, { payload }) {
      state.favorites = state.favorites.filter(
        advert => advert._id !== payload
      );
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    clearFavorites(state) {
      state.favorites = [];
      localStorage.removeItem('favorites');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAdverts.pending, handlePending)
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        state.adverts = [...state.adverts, ...payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAdverts.rejected, handleRejected);
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } =
  advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
