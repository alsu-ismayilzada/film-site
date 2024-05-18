import React, { useState } from 'react'
import Search from "./Search"
import "../styles/Home.css"
import CreateList from './CreateList'
import MovieCard from './MovieCard'

const Home = () => {
 const[movies, setMovies] = useState([]);


 fetch ("https://www.omdbapi.com/?s=godfather&apikey=7c0a2b78")
.then(res => res.json())
.then(data =>{
    console.log(data);
    if (data.Search) {
      setMovies(data.Search);
    }

    });
    

  return (
    <div className='home'>
      <Search/>
      <CreateList/>
      <div className='movies'>
        {movies.map((movie, index) => (
      <MovieCard key={index} img={movie.Poster} name={movie.Title} />
      
      ))}
        
      </div>
    </div>
  )
}

export default Home