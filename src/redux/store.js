import { configureStore } from '@reduxjs/toolkit';

import { advertsReducer } from './adverts/slice';

const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});

export default store;
