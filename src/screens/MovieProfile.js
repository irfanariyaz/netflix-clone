import React from 'react'
import "./MovieProfile.css"
import { useSelector} from 'react-redux'
import {selectMovie} from '../features/movieSlice'
import { useNavigate } from "react-router-dom";
import star from "../images/star2.png"
// import{useDispatch} from 'react-redux'
// import{movietrailer} from './features/userSlice'

function MovieProfile() {
  const navigate = useNavigate()
  const movie = useSelector(selectMovie)
  // const dispatch = useDispatch()
  // dispatch(movietrailer({
  //   name:name
  // }))
  console.log(movie)
  return (
    <div className='movieProfile' style={{
      backgroundImage:`url("https://www.themoviedb.org/t/p/original${movie?.backdrop_path}")`,
      backgroundSize:"cover",
      backgroundPosition: "center center",
    }}>
       <img onClick={()=>navigate("/")}className='loginscreen__logo' src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt="" />
      <img onClick={()=>navigate("/profile")} className='loginscreen__avatar'src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
      <div className="movieProfile__gradient"></div>
      <div className="movieProfile__body">
      
            <h1>{movie.name?movie.name :movie.original_title}</h1>
            <div className="movieProfile__rating">
            <h4> {movie.vote_average}</h4>
              <img className='star' src={star} alt="" />
              
            {/* <h4>{movie.first_air_date?movie.first_air_date:'2022'}</h4> */}
              
            </div>
            <p>{movie.overview}</p>
            <div className="movieProfile__buttons">
              <button className='movieProfile__button'>Play</button>
              <button onClick={()=>navigate("/")}className='movieProfile__button'>Go Back</button>
            </div>
      </div>
    </div>
  
  )
}

export default MovieProfile