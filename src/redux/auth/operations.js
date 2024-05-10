import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = '/users';

// add JWT
function setAuthHeader(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

// remove JWT
function clearAuthHeader() {
  axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/register', credentials);
      // add token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      // add token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // remove  token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  // Reading the token from the state via getState()
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    // If there is no token, exit without performing any request
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    // If there is a token, add it to the HTTP header and perform the request
    setAuthHeader(persistedToken);
    const res = await axios.get('/users/current');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateToken = createAsyncThunk(
  'auth/updateToken',
  async (_, thunkAPI) => {
    try {
      // add refreshToken to the HTTP header
      const state = thunkAPI.getState();
      const refreshToken = state.auth.refreshToken;
      setAuthHeader(refreshToken);
      const res = await axios.get('/users/newpair');
      // add token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editUser = createAsyncThunk(
  'auth/editUser',
  async (user, thunkAPI) => {
    try {
      const res = await axios.patch('/users/update', user);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
