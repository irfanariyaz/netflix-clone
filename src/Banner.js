import React, { useEffect, useState } from 'react'
import "./banner.css"
import axios  from './axios'
import requests from './Requests'

function Banner() {

  const [movie,setMovie] = useState([])

  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length-1)
        ]
      )
      
      return request
      
}
fetchData()
  },[])
  console.log("movie",movie.name)
    function truncatte(string,n){
        return string?.length > n ? string.substr(0,n-1) + " ..." :string 
    }
    
  return (
    <header className='banner'
    style={
      {
        
      backgroundImage:`url("https://www.themoviedb.org/t/p/original${movie?.backdrop_path}")`,
      backgroundSize:"cover",
      backgroundPosition: "center center",
     
    }

      
    }>
        <div className="banner__contents">
            <h1 className="banner__title">Movie name</h1>
            <div className="banner__buttons">
            <button className="banner__button">Play</button>               
            <button className="banner__button">My List</button>               
            </div>
            <h1 className="banner__description">
                {truncatte('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga doloribus cumque, quisquam, officiis sed ullam nisi earum natus amet, dolorem rerum et commodi ad delectus. Ea adipisci reprehenderit excepturi quam, odio provident ducimus modi tempore tempora quidem mollitia perferendis nemo, fugit repellat cumque obcaecati molestiae dolor ipsam ab fuga deleniti fugiat cum! Aperiam totam ipsum qui repudiandae nihil voluptatibus sed. Ab reprehenderit enim consequuntur sunt eos blanditiis autem quis. Cupiditate perferendis ducimus explicabo, ut temporibus, atque maxime dolorem et ex illo quidem quasi! Ea, nisi aut molestias exercitationem architecto esse omnis cum nemo voluptatum labore enim eos? Eligendi optio sint odio, molestias porro possimus illum aperiam deserunt minima, esse eos saepe at ipsum, in praesentium alias odit animi doloremque omnis aspernatur sit molestiae fuga ab tenetur! Officiis praesentium dicta deleniti facere unde nihil fugiat quod doloremque, ex excepturi enim? Perspiciatis magni quam sit voluptas tempore. Autem libero ad, maxime aliquam cum, iure dolores quae qui voluptatum, aut blanditiis excepturi est dolor deleniti in. Explicabo minus perspiciatis accusamus, suscipit nesciunt iure, optio accusantium excepturi labore ipsa veritatis quod dicta ab animi quia! Perspiciatis temporibus nobis aut laudantium quisquam tenetur minima culpa excepturi dolorum amet optio facilis, debitis mollitia? Autem illo earum ipsam velit amet quod suscipit odit similique facilis reiciendis porro temporibus voluptates, delectus iusto. Doloremque id autem pariatur quia quaerat tempore consequatur ipsa nostrum impedit. Sint, placeat cupiditate eos numquam repudiandae totam atque ipsam beatae officia tempore omnis quaerat enim dicta autem laboriosam repellendus recusandae ea expedita assumenda. Laborum, quasi. Dignissimos cupiditate eum repudiandae, repellat ipsa eos molestiae reiciendis consectetur in mollitia molestias alias accusantium at, commodi est adipisci atque corporis earum ab fugiat doloremque deleniti impedit nemo magnam? Sint non nisi reiciendis voluptates provident aperiam, corrupti voluptatibus rem vero quo perferendis dignissimos enim, tempore, fuga illo molestias fugiat eius.',150)}</h1>
        </div>
        <div className="banner__fade" ></div>
    </header>
  )
}

export default Banner