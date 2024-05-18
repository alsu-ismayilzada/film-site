// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import listReducer from './listSlice';
import moviesReducer from './moviesSlice';

export const store = configureStore({
  reducer: {
    lists: listReducer,
    movies: moviesReducer,
  },
});
