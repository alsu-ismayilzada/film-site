import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { NavLink } from 'react-router-dom';
import "../styles/Basket.css"

const Basket = () => {
  const lists = useSelector((state) => state.lists);

  return (
    <div className='Basket'>
      <div className='right'><NavLink to='/' className='goHomeBtn'>
        Go to Home
      </NavLink>
      </div>
      <div className='left'>
        {lists.map((list, index) => (
        <MovieList key={index} list={list} listIndex={index} />
        ))}
      </div>
      
    </div>
  );
};

export default Basket;
