import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DayToString, TimeToString } from '../../utils/dates';

axios.defaults.baseURL = `https://aquatrack-it-warriors-backend.onrender.com/api/`;

export const addWater = createAsyncThunk(
  'water/addWater',
  async (value, thunkAPI) => {
    try {
      const now = new Date();
      const date = DayToString(now);

      const time = TimeToString(now);
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
export const chooseDay = createAsyncThunk(
  'water/chooseDay',
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
export const chooseMonth = createAsyncThunk(
  'water/chooseMonth',
  async (month, thunkAPI) => {
    try {
      const response = await axios.get('/', month);
      return { month: month, monthWater: response.data };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
