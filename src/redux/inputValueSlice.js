import { createSlice } from '@reduxjs/toolkit';

const initialState = 'godfather';


const inputValueSlice = createSlice({
  name: 'inputValue',
  initialState,
  reducers: {
    add: (state,action)=>{
        return action.payload;
    }
  }  
})
export const {add} = inputValueSlice.actions;
export default inputValueSlice.reducer;