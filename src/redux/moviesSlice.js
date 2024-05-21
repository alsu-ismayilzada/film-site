import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const movieExists = state.some(movie => movie.name === action.payload.name);
      if (!movieExists) {
        state.push(action.payload);
      }
    },
    clearMovies: (state,action) => {
      state.splice(action,1);
    },
    deleteElement: (state, action) => {
      state.splice(action.payload,1);
    },
  }
});

export const { addMovie, clearMovies,deleteElement } = moviesSlice.actions;
export default moviesSlice.reducer;
