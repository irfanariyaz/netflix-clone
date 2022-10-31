import {  createSlice } from '@reduxjs/toolkit';

export const subscriptionSlice = createSlice({
  name:'subscription',
  initialState:{
    user:'no plan'
  },
 
  
  reducers: {
    userSubscriptionPlan: (state,action)=>{
      state.user=action.payload
    },
    
    },
  
  },
  );

export const { userSubscriptionPlan} = subscriptionSlice.actions;
export const selectPlan = (state) => state.subscription.user;
// export const selectMovie= (state) =>state.movie.movieName
export default subscriptionSlice.reducer;
