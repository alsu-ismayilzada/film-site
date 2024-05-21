// src/components/MovieCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/moviesSlice';
import '../styles/MovieCard.css';

const MovieCard = (props) => {
  const dispatch = useDispatch();

  const handleAddToList = () => {
    dispatch(addMovie({ name: props.name, poster: props.poster }));
  };

  return (
    <div className='movieCard'>
      <div className='left'>
        <img src={props.img} alt='movie' />
      </div>
      <div className='right'>
        <p>{props.name}</p>
        <button onClick={handleAddToList}>Add to List</button>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default MovieCard;
