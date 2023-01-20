import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: {
      status: false,
    },
  },
  reducers: {
    filterStatusChanged(state) {
      return {
        ...state,
        filter: {
          status: !state.filter.status,
        },
      };
    },
  },
});

export const {
  filterStatusChanged,
} = filterSlice.actions;
export default filterSlice.reducer;
