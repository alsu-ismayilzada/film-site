// src/redux/listSlice.js
import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'lists',
  initialState: [],
  reducers: {
    addList: (state, action) => {
      state.push({ name: action.payload, movies: [] });
    },
    addMovieToList: (state, action) => {
      const { listName, movie } = action.payload;
      const list = state.find(list => list.name === listName);
      if (list) {
        list.movies.push(movie);
      }
    },
  },
});

export const { addList, addMovieToList } = listSlice.actions;
export default listSlice.reducer;

