import {  createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null
  },
  // name:'movie',
  // initialState:{
  //   movieName:null
  // },
  
  reducers: {
    login: (state,action)=>{
      state.user=action.payload
    },
    logout:(state)=>{
      state.user=null
    },
    // movietrailer:(state)=>{
    //   state.movieName=action.payload
    // },
    },
  
  },
  );

export const { login,logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
// export const selectMovie= (state) =>state.movie.movieName
export default userSlice.reducer;
