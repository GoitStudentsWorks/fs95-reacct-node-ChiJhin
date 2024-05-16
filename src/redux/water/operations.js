import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `https://aquatrack-it-warriors-backend.onrender.com/api/water`;

export const addWater = createAsyncThunk(
  'contacts/addWater',
  async ({ day, amount }, thunkAPI) => {
    try {
      const response = await axios.post('/add', { day, amount });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'contacts/editWater',
  async ({ day, dayWater }, thunkAPI) => {
    try {
      const response = await axios.patch('/update', { day, dayWater });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'contacts/deleteWater',
  async (day, thunkAPI) => {
    try {
      const response = await axios.delete('/update', day);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'contacts/logOut',
  async (day, thunkAPI) => {
    try {
      const response = await axios.delete('/update', day);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const selectDay = createAsyncThunk(
  'contacts/selectDay',
  async (day, thunkAPI) => {
    try {
      const response = await axios.get('/day', day);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const selectMonth = createAsyncThunk(
  'contacts/selectMonth',
  async (month, thunkAPI) => {
    try {
      const response = await axios.get('/month', month);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
