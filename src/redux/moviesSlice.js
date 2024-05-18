// src/redux/moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
