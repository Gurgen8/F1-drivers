import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {LoadableData, TDriverListItem} from '../../types';
import {getDriverInfoThunk} from './thunks';

const initialState: LoadableData<TDriverListItem | null> = {
  data: null,
  error: null,
  status: 'idle',
};

const GetDriverInfoSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(getDriverInfoThunk.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        getDriverInfoThunk.fulfilled,
        (state, action: PayloadAction<TDriverListItem>) => {
          state.status = 'idle';
          state.error = null;
          console.log(action.payload);
          state.data = action.payload;
        },
      )
      .addCase(getDriverInfoThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
  initialState,
  name: 'get/driver-info',
  reducers: {},
});

export default GetDriverInfoSlice.reducer;
