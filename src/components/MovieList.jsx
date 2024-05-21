// src/components/MovieList.js
import React from 'react';

const MovieList = ({ list }) => {
  return (
    <div>
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
