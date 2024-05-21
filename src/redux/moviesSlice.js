// src/redux/moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    clearMovies: () => {
      return [];
    },
  },
});

export const { addMovie, clearMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
