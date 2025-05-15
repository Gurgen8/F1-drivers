import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {LoadableData, TDriverListItem} from '../../types';

import {getDriversListThunk} from './thunks';

const initialState: LoadableData<{
  data: TDriverListItem[];
  total: number;
}> = {
  data: {data: [], total: 0},
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
        (
          state,
          action: PayloadAction<{
            data: TDriverListItem[];
            total: number;
          }>,
        ) => {
          state.status = 'idle';
          state.error = null;
          if (state.data.data.length) {
            state.data.data = [...state.data.data, ...action.payload.data];
          } else {
            state.data = {
              data: action.payload.data,
              total: action.payload.total,
            };
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
      state.data = {data: [], total: 0};
    },
  },
});

export const {resetData} = GetDriverListSlice.actions;
export default GetDriverListSlice.reducer;
