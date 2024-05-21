import { configureStore } from '@reduxjs/toolkit';
import listReducer from './listSlice';
import moviesReducer from './moviesSlice';
import movieSearcReducer from "./moviesSearchSlice";
import inputValueReducer from './inputValueSlice';

export const store = configureStore({
  reducer: {
    lists: listReducer,
    movies: moviesReducer,
    moviesSearch: movieSearcReducer,
    inputValue: inputValueReducer,
  },
});
