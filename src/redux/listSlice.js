import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const listSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addList: (state, action) => {
      state.push({ name: action.payload.name, movies: action.payload.movies });
    },
    addMovieToList: (state, action) => {
      const { listName, movie } = action.payload;
      const list = state.find(list => list.name === listName);
      if (list) {
        const movieExists = list.movies.some(m => m.name === movie.name);
        if (!movieExists) {
          list.movies.push(movie);
        }
      }
    },
  },
});

export const { addList, addMovieToList } = listSlice.actions;
export default listSlice.reducer;
