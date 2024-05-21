// src/components/MovieList.js
import React from 'react';
import "../styles/MovieList.css"

const MovieList = ({ list }) => {
  return (
    <div className='MovieList'>
      <h2>{list.name}</h2>
      <ul className='list'>
        {list.movies.map((movie, index) => (
          <li key={index}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
