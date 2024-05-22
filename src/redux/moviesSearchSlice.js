// moviesSearchSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const searchMovies = createAsyncThunk(
  'moviesSearch/search',
  async (searchTerm) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=7c0a2b78&s=${searchTerm}`);
    const data = await response.json();
    return data.Search; 
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
        return action.payload; 
      });
  }
});

export default moviesSearchSlice.reducer;
