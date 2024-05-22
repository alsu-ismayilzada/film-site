
import React from 'react';
import "../styles/MovieList.css";
import { useDispatch} from 'react-redux';
import {deleteList} from "../redux/listSlice";

const MovieList = ({ list, listIndex }) => {
  const dispatch = useDispatch();
// console.log(list);
// console.log(listIndex);
   const handleDeleteList = (key) =>{
    console.log(key);
      dispatch(deleteList(key));
   }
  return (
    <div className='MovieList'>
      <div className='header'><h2>ListName: {list.name}</h2><button onClick={() => handleDeleteList(listIndex)}>Delete list</button></div>
      <hr></hr>
      <ul className='list'>
        {list.movies.map((movie, index) => (
          <li key={index}><img src={movie.poster} alt="poster" /><div className='movieName'>{movie.name}</div></li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
