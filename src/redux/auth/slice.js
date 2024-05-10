import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  refresh,
  updateToken,
  editUser,
} from './operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

function handlePending(state) {
  state.loading = true;
}

function handleRejected(state, action) {
  state.loading = false;
  state.error = action.payload;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      photo: null,
      gender: null,
      weight: null,
      sportDuration: null,
      waterPerDay: null,
    },
    token: null,
    refreshToken: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.error = null;
        state.loading = false;
      })
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.error = null;
        state.loading = false;
      })
      .addCase(login.pending, handlePending)
      .addCase(login.rejected, handleRejected)
      .addCase(logout.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
          photo: null,
          gender: null,
          weight: null,
          sportDuration: null,
          waterPerDay: null,
        };
        state.token = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.error = null;
        state.loading = false;
      })
      .addCase(logout.pending, handlePending)
      .addCase(logout.rejected, handleRejected)
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
        state.loading = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
        state.loading = false;
      })
      .addCase(refresh.rejected, state => {
        state.isRefreshing = false;
        state.loading = false;
        state.error = null;
      })
      .addCase(updateToken.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isRefreshing = false;
        state.error = null;
        state.loading = false;
      })
      .addCase(updateToken.pending, state => {
        state.isRefreshing = true;
        state.loading = true;
      })
      .addCase(updateToken.rejected, state => {
        state.user = {
          name: null,
          email: null,
          photo: null,
          gender: null,
          weight: null,
          sportDuration: null,
          waterPerDay: null,
        };
        state.token = null;
        state.refreshToken = null;
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = null;
        state.loading = false;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(editUser.pending, handlePending)
      .addCase(editUser.rejected, handleRejected);
  },
});

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken'],
};

const persistedReducer = persistReducer(authPersistConfig, authSlice.reducer);
export const authReducer = persistedReducer;
