import React, { useEffect } from 'react';
import Search from "./Search";
import "../styles/Home.css";
import CreateList from './CreateList';
import {useDispatch ,useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { searchMovies } from '../redux/moviesSearchSlice';
import Page from "../images/404-page.png" ;

const Home = () => {
  const inpValue = useSelector((state) => state.inputValue);
  const moviesSearchList = useSelector((state) => state.moviesSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${inpValue}&apikey=7c0a2b78`)
      .then(res => res.json())
      .then(data => {
        if (data.Search) {
          console.log(data.Search);
          dispatch(searchMovies(inpValue));
        }
      });
  }, []); 
   console.log(moviesSearchList.length);
  return (
    <div className='home'>
      <div className='footer'>
        <Search />
        <CreateList />
      </div>
      <div className='movies'>
        {moviesSearchList.length > 0 ? moviesSearchList.map((movie, index) => (
          <MovieCard key={index} img={movie.Poster} name={movie.Title} imdbID={movie.imdbID} />
        )) : (<div className='error'><img src={Page} alt="404"/><div className='errorMessage'>Movie Not Found!</div></div>)}
      </div>
    </div>
  )
}

export default Home;
