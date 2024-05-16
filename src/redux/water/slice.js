import { createSlice } from '@reduxjs/toolkit';
import {
  addWater,
  editWater,
  deleteWater,
  selectDay,
  selectMonth,
} from './operations';

function handlePending(state) {
  state.loading = true;
}

function handleRejected(state, action) {
  state.loading = false;
  state.error = action.payload;
}

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    dayWater: [],
    monthWater: [],
    day: null,
    month: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      //add
      .addCase(addWater.pending, handlePending)
      .addCase(addWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.dayWater.push(action.payload);
      })
      .addCase(addWater.rejected, handleRejected)
      //edit
      .addCase(editWater.pending, handlePending)
      .addCase(editWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.dayWater = state.dayWater.map((el) =>
          el._id === action.payload._id ? action.payload : el
        );
      })
      .addCase(editWater.rejected, handleRejected)
      //delete
      .addCase(deleteWater.pending, handlePending)
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        const index = state.dayWater.findIndex(
          (el) => el._id === action.payload._id
        );
        if (index !== -1) {
          state.dayWater.splice(index, 1);
        }
      })
      .addCase(deleteWater.rejected, handleRejected)
      //day
      .addCase(selectDay.pending, handlePending)
      .addCase(selectDay.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.dayWater = action.payload.dayWater;
        state.day = action.payload.day;
      })
      .addCase(selectDay.rejected, handleRejected)
      //month
      .addCase(selectMonth.pending, handlePending)
      .addCase(selectMonth.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.dayWater = [];
        state.day = null;
        state.month = action.payload.month;
        state.monthWater = action.payload.monthWater;
      })
      .addCase(selectMonth.rejected, handleRejected);
  },
});

export const waterReducer = waterSlice.reducer;
