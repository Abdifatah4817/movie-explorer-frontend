const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US&page=1`);
  return res.json();
};

export const tmdbService = {
  getPopularMovies: () => fetchMovies('/movie/popular'),
  
  getNowPlayingMovies: () => fetchMovies('/movie/now_playing'),
  
  getTopRatedMovies: () => fetchMovies('/movie/top_rated'),
  
  searchMovies: async (query) => {
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`
    );
    return res.json();
  },
  
  getMovieDetails: async (movieId) => {
    const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return res.json();
  },
  
  getImageUrl: (path, size = 'w500') => {
    if (!path) return null;
    return `https://image.tmdb.org/t/p/${size}${path}`;
  }
};
