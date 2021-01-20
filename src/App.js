import React from "react";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import requests from "./requests";
import "./style/row.css";
import "./style/App.css";
function App() {
   return (
      <div className='app'>
         <Nav />
         <Banner />
         <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
         <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
         <Row title='Top Rated' fetchUrl={requests.fetchTopRated} isLargeRow />
         <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
         <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
         <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
         <Row title='Action' fetchUrl={requests.fetchActionMovies} />
      </div>
   );
}

export default App;
