// src/components/MovieCard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieToList } from '../redux/listSlice';
import '../styles/MovieCard.css';

const MovieCard = (props) => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);

  const handleAddToList = () => {
    const listName = lists.length > 0 ? lists[lists.length - 1].name : null;
    if (listName) {
      dispatch(addMovieToList({ listName, movie: props.name }));
    }
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
