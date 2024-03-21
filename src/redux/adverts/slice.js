import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleRejected } from '../helpers';
import { getAdverts, getOneAdvert } from './operations';

const initialState = {
  adverts: [],
  oneAdvert: {},
  isLoading: false,
  error: null,
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAdverts.pending, handlePending)
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        state.adverts = [...state.adverts, ...payload];
        state.isLoading = false;
      })
      .addCase(getAdverts.rejected, handleRejected)
      .addCase(getOneAdvert.pending, handlePending)
      .addCase(getOneAdvert.fulfilled, (state, { payload }) => {
        state.oneAdvert = payload;
        state.isLoading = false;
      })
      .addCase(getOneAdvert.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
