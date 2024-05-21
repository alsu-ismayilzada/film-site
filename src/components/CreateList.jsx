// src/components/CreateList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addList } from '../redux/listSlice';
import { clearMovies } from '../redux/moviesSlice';
import { deleteElement } from '../redux/moviesSlice';
import '../styles/CreateList.css';

const CreateList = () => {
  const [listName, setListName] = useState('');
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleSaveList = () => {
    if (listName) {
      dispatch(addList({ name: listName, movies }));
      movies.map((movie, index) => {
        dispatch(clearMovies(index));
        })
      setListName('');
    }
  };

  const handleDeleteElement = (index) =>{
    dispatch(deleteElement(index));
  };

  return (
    <div className='create-list'>
      
      <input
        type='text'
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        placeholder='New List Name'
      />
      <ul className='movie-list'>
      {movies.map((movie, index) => (
        <div className='list-element'><li key={index}>{movie.name}</li><div className='deleteBtn' onClick={()=> handleDeleteElement(movie.index)}>x</div></div>
      ))}
    </ul>
      <button className='saveBtn' onClick={handleSaveList}>
        Save
      </button>
      <NavLink to='/basket' className='goBtn'>
        Go to Basket
      </NavLink>
    </div>
  );
};

export default CreateList;
