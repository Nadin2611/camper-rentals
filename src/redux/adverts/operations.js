import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65fef275b2a18489b386ca2a.mockapi.io/api/';

export const getAdverts = createAsyncThunk(
  '/adverts',
  async (credentials, thunkAPI) => {
    const { limit = 4, page = 1 } = credentials;
    try {
      const { data } = await axios.get(`/adverts?page=${page}&limit=${limit}`);
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
