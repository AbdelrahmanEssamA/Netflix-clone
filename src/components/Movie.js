import React from "react";
import Row from "./Row";
import Banner from "./Banner";
import requests from "../requests";
function Movie() {
   return (
      <React.Fragment>
         <Banner fetchUrl={requests.fetchTopRatedMovie} />
         <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
         <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
         <Row title='Top Rated' fetchUrl={requests.fetchTopRatedMovie} isLargeRow />
         <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
         <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
         <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
         <Row title='Action' fetchUrl={requests.fetchActionMovies} />
      </React.Fragment>
   );
}

export default Movie;
