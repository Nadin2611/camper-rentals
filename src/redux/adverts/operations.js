import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://65fa9ef13909a9a65b1aed29.mockapi.io/api/camper/';

// axios.defaults.baseURL = 'http://localhost:3000/api/camper/';

export const getAdverts = createAsyncThunk(
  '/adverts',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operations = {
  getAdverts,
};

export default operations;
