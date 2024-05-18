// src/components/CreateList.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addList } from '../redux/listSlice';
import '../styles/CreateList.css';

const CreateList = () => {
  const [listName, setListName] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    if (listName) {
      dispatch(addList(listName));
      setListName('');
    }
  };

  return (
    <div className='create-list'>
      <input
        type='text'
        value={listName}
        onChange={(e) => setListName(e.target.value)}
      />
      <button className='saveBtn' onClick={handleSave}>
        Save
      </button>
      <NavLink to='/basket' className='goBtn'>
        Go to Basket
      </NavLink>
    </div>
  );
};

export default CreateList;
