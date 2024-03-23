import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://65fa9ef13909a9a65b1aed29.mockapi.io/api/camper/';

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

export const getOneAdvert = createAsyncThunk(
  'advert/getOneAdvert',

  async (id, thunkApi) => {
    try {
      const response = await axios.get(`/advert/:${id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const operations = {
  getAdverts,
  getOneAdvert,
};

export default operations;
