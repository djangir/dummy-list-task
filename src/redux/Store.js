import { configureStore } from '@reduxjs/toolkit';
import addItemReducer, { data } from './Slice';

export const store = configureStore({
  reducer: addItemReducer,
  preloadedState: data,
});
