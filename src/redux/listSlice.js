// src/redux/listSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const listSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addList: (state, action) => {
      state.push({ name: action.payload.name, movies: action.payload.movies });
    },
  },
});

export const { addList } = listSlice.actions;
export default listSlice.reducer;
