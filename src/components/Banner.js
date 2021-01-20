import React, { useState, useEffect } from "react";
import requests from "../requests";
import axios from "../axios";
import "../style/banner.css";
function Banner() {
   const [movie, setMovie] = useState([]);
   useEffect(() => {
      async function fetchData() {
         const request = await axios.get(requests.fetchNetflixOriginals);
         const data = request.data.results;
         const randomNum = Math.floor(Math.random() * data.length - 1);
         setMovie(data[randomNum]);
         return request;
      }
      fetchData();
   }, []);

   function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
   }
   return (
      <header
         className='banner'
         style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url("https://image.tmdb.org/t/p/original/${
               movie?.backdrop_path || "a7a"
            }")`,
            backgroundPosition: "center center",
         }}
      >
         <div className='banner_contents'>
            <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className='banner_buttons'>
               <button className='banner_button btn_white'>Play</button>
               <button className='banner_button'>MoreInfo</button>
            </div>
            <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
         </div>
         <div className='banner_fade' />
      </header>
   );
}

export default Banner;
