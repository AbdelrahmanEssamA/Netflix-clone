import React, { useState, useEffect } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
   const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState("");
   const opts = {
      height: "390",
      width: "99%",
      playerVars: {
         autoplay: 0,
      },
   };

   useEffect(() => {
      async function fetchData() {
         const request = await axios.get(fetchUrl);
         setMovies(request.data.results);
         return request;
      }
      fetchData();
   }, [fetchUrl]);
   /*   https://linnea.com.ar/wp-content/uploads/2018/09/404PosterNotFoundReverse.jpg*/
   const getMovies = () => {
      const base_url = "http://image.tmdb.org/t/p/w400";
      return movies.map((movie) => (
         <img
            key={movie.id}
            src={base_url + (isLargeRow ? movie?.poster_path : movie?.backdrop_path || "")}
            alt={movie.name}
            className={`poster ${isLargeRow && "posterLarge"}`}
            onClick={() => handleClick(movie)}
         />
      ));
   };

   const handleClick = (movie) => {
      if (trailerUrl) {
         setTrailerUrl("");
      } else {
         movieTrailer(movie?.title || "")
            .then((url) => {
               //https://www.youtube.com/watch?v=8Qn_spdM5Zg
               const urlParams = new URLSearchParams(new URL(url).search);
               setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
      }
   };

   return (
      <React.Fragment>
         <h1 className='title'>{title}</h1>
         <div className='row'>
            <div className='posters'>{getMovies()}</div>
            <div style={{ padding: "20px" }}>
               {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
         </div>
      </React.Fragment>
   );
}

export default Row;
