// Search.js
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../redux/moviesSearchSlice';
import {add} from '../redux/inputValueSlice';

const Search = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.inputValue);

  const handleSearch = () => {
    dispatch(searchMovies(inputValue.trim()));
  };

  const handleChange = (e) => {
    dispatch(add(e.target.value));
  };

  return (
    <div className='search'>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button className='searchBtn' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
