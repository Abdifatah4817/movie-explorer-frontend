const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US&page=1`);
  return res.json();
};

export const tmdbService = {
  // 🔹 Get popular movies
  getPopularMovies: () => fetchMovies('/movie/popular'),

  // 🔹 Get now-playing movies
  getNowPlayingMovies: () => fetchMovies('/movie/now_playing'),

  // 🔹 Get top-rated movies
  getTopRatedMovies: () => fetchMovies('/movie/top_rated'),

  // 🔹 Search for a movie
  searchMovies: async (query) => {
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`
    );
    return res.json();
  },

  // 🔹 Get detailed info about one movie
  getMovieDetails: async (movieId) => {
    const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return res.json();
  },

  // 🔹 Get official YouTube trailer for a movie
  getMovieTrailer: async (movieId) => {
    const res = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`);
    const data = await res.json();
    return data.results.find(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );
  },

  // 🔹 Get full image URL from TMDB
  getImageUrl: (path, size = 'w500') => {
    if (!path) return null;
    return `https://image.tmdb.org/t/p/${size}${path}`;
  },
};
