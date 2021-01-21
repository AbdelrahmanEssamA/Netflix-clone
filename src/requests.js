const API_KEY = "0c453193cd4da19c00a9d99cb1ef2eae";

const requests = {
   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
   //movies
   fetchTopRatedMovie: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_network=123`,
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
   fetchActionShow: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   //tv
   fetchTopRatedShow: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchComedyShow: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorShow: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceShow: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumenShow: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
   fetchNetflixOriginalsTV: `/discover/tv?api_key=${API_KEY}&with_network=123`,
};

export default requests;
