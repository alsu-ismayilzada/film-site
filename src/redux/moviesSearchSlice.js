// moviesSearchSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const searchMovies = createAsyncThunk(
  'moviesSearch/search',
  async (searchTerm) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=7c0a2b78&s=${searchTerm}`);
    const data = await response.json();
    return data.Search; // Assuming the response has a 'Search' property containing an array of movies
  }
);

const initialState = [];

const moviesSearchSlice = createSlice({
  name: 'moviesSearch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.fulfilled, (state, action) => {
        return action.payload; // Replace the state with the fetched movies
      });
  }
});

export default moviesSearchSlice.reducer;
