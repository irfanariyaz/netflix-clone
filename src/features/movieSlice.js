import { createSlice } from "@reduxjs/toolkit";
 
export const movieSlice  =createSlice({
    name:'movie',
    initialState:{
        value:null,
    },
    reducers:{
        setTrailer:(state,action)=>{
            state.value=action.payload
        },
      
    }
})
export const {setTrailer} =movieSlice.actions
export const selectMovie = (state) => state.movie.value;
export default movieSlice.reducer