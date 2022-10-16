import axios from './axios'
import React, { useEffect, useState } from 'react'
import "./row.css"

import { setTrailer } from './features/movieSlice'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

function Row({title,fetchurl,islargeRow=false}) {

    const dispatch = useDispatch()
    const [movies,setMovies] = useState([])
   
    const base_url ="https://www.themoviedb.org/t/p/original"

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchurl)
            setMovies(request.data.results)
            return request
        }
       
        fetchData();

    },[fetchurl])
    console.log(movies)
    console.log("clicked row")
    const linkStyle = {
        width: "100%",
        // textDecoration: "none",
        // color: 'blue'
      };
  return (
    
    <div className='row'>
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(
                    (movie)=>
                    ((islargeRow && movie.poster_path) ||
                    (!islargeRow && movie.backdrop_path)) && (
                        
                        <Link  to={`/movie-${movie.name}`}  key={movie.id} style={linkStyle}>
                        <img className={`row_poster ${islargeRow && "row_posterLarge"}`} 
                        src={`${base_url}${islargeRow?movie.poster_path :movie.backdrop_path }`} 
                        alt={movie.name} 
                        onClick={()=>dispatch(setTrailer(movie))} /> 
                         </Link>
                        
                        
                    )
                    
                )}
            </div>
            
    </div>
  )
}

export default Row