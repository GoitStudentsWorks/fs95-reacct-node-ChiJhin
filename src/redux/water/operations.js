import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `http://localhost:3000/api/`;

export const addWater = createAsyncThunk(
  'water/addWater',
  async (value, thunkAPI) => {
    try {
      const now = new Date();
      const date =
        now.getFullYear() + '.' + now.getMonth() + '.' + now.getDate();
      const time = now.getHours() + ':' + now.getMinutes();
      const response = await axios.post('/', { value, date, time });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'water/editWater',
  async (water, thunkAPI) => {
    try {
      const response = await axios.put(`/${water._id}`, water);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (water, thunkAPI) => {
    try {
      const response = await axios.delete(`/${water._id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//day = "dd.mm.yyyy"
export const selectDay = createAsyncThunk(
  'water/selectDay',
  async (day, thunkAPI) => {
    try {
      const response = await axios.get('/', day);
      return { day: day, dayWater: response.data };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//month = "mm.yyyy"
export const selectMonth = createAsyncThunk(
  'water/selectMonth',
  async (month, thunkAPI) => {
    try {
      const response = await axios.get('/', month);
      return { month: month, monthWater: response.data };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
