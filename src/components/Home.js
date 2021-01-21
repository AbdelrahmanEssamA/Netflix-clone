import React from "react";
import Row from "./Row";
import Banner from "./Banner";
import requests from "../requests";
export default function Home() {
   return (
      <React.Fragment>
         <Banner fetchUrl={requests.fetchNetflixOriginalsTV} />
         <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginalsTV} isLargeRow />
         <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
         <Row title='Top Rated' fetchUrl={requests.fetchTopRatedShow} isLargeRow />
         <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
         <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
         <Row title='Comedy' fetchUrl={requests.fetchComedyShow} />
         <Row title='Action' fetchUrl={requests.fetchActionMovies} />
      </React.Fragment>
   );
}
