import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {LoadableData, TDriverListItem} from '../../types';

import {getDriversListThunk} from './thunks';

const initialState: LoadableData<TDriverListItem[] | null> = {
  data: null,
  error: null,
  status: 'idle',
};

const GetDriverListSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(getDriversListThunk.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        getDriversListThunk.fulfilled,
        (state, action: PayloadAction<TDriverListItem[]>) => {
          state.status = 'idle';
          state.error = null;
          if (state.data) {
            state.data = [...state.data, ...action.payload];
          } else {
            state.data = action.payload;
          }
        },
      )
      .addCase(getDriversListThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
  initialState,
  name: 'get/drivers-list',
  reducers: {
    resetData: state => {
      state.data = null;
    },
  },
});

export const {resetData} = GetDriverListSlice.actions;
export default GetDriverListSlice.reducer;
