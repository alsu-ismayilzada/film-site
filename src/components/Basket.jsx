import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { NavLink } from 'react-router-dom';
import "../styles/Basket.css"

const Basket = () => {
  const lists = useSelector((state) => state.lists);

  return (
    <div className='Basket'>
      <div className='left'>
        {lists.map((list, index) => (
        <MovieList key={index} list={list} listIndex={index} />
        ))}
      </div>
      <NavLink to='/' className='goHomeBtn'>
        Go to Home
      </NavLink>
    </div>
  );
};

export default Basket;
