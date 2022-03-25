import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const data = {
  value: [],
};

const slice = createSlice({
  name: 'ListData',
  data,
  reducers: {
    addItem(state, action) {
      state.value.unshift(action.payload);
    },
    RemoveItem(state, action) {
      state.value.splice(action.payload, 1);
    },
    updateData(state, action) {
      state.value.splice(action.payload[0], 1, action.payload[1]);
    },
  },
});

export const { addItem, RemoveItem, updateData } = slice.actions;
export default slice.reducer;
