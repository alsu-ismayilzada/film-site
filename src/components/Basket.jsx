import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const Basket = () => {
  const lists = useSelector((state) => state.lists);

  return (
    <div>
      {lists.map((list, index) => (
        <MovieList key={index} list={list} />
      ))}
    </div>
  );
};

export default Basket;
