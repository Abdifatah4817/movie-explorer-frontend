import axios from 'axios';


// TODO: move this to .env file later
const API_KEY = 'ff8252ae43f3a5c6eb8dcfbf9ab76f23';
const BASE_URL = 'https://api.themoviedb.org/3';
const imgBaseUrl = 'https://image.tmdb.org/t/p';

// create axios instance with base URL and API key parameters
//the axios is a promise-based HTTP client for the browser and Node.js, so it allows browsers to make HTTP requests to REST endpoints and perform CRUD operations.
const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const tmdbService = {
  // search functionality
  // what is happening is that we are making a GET request to the /search/movie endpoint of the TMDB API
  // so if the user searches for "Inception", we are sending a request to https://api.themoviedb.org/3/search
  // so the searchMovies function takes in a query parameter (the search term) and an optional page parameter (for pagination)
  // the if statement checks if the query is empty or just whitespace, and if so, it logs a warning and returns an empty result set
  //the return value is an object containing the search results and the total number of pages available
  searchMovies: async (query, page = 1) => {
    if (!query || query.trim() === '') {
      console.warn('Search query is empty');
      return { results: [], total_pages: 0 };
    }
    
    // what is happening here is that we are using the axios instance (tmdbApi) to make a GET request to the /search/movie endpoint
    //try is used to catch any errors that may occur during the API request
     // why we use try is to handle potential errors that may arise during the API request, such as network issues or invalid responses
    try {
      const res = await tmdbApi.get('/search/movie', {
        params: { query, page },
      });
      return res.data;
    } catch (err) {
      console.error('Search failed:', err.message);
      // TODO: add retry logic?
      throw err;
    }
  },

//get popular movies: aync is a snippet that defines an asynchronous function to fetch popular movies from the TMDB API

  getPopularMovies: async (page = 1) => {
    const response = await tmdbApi.get('/movie/popular', {
      params: { page },
    });
    return response.data;
  },

  getNowPlayingMovies: async (page = 1) => {
    try {
      const res = await tmdbApi.get('/movie/now_playing', {
        params: { page },
      });
      return res.data;
    } catch (error) {
      console.error('now playing fetch error:', error);
      throw error;
    }
  },


  getTopRatedMovies: async (page = 1) => {
    const response = await tmdbApi.get('/movie/top_rated', {params: { page }});
    return response.data;
  },

  // fetch detailed movie info including genres, runtime, etc
  getMovieDetails: async (movieId) => {
    if(!movieId) {
      throw new Error('Movie ID is required');
    }
    
    try {
      const response = await tmdbApi.get(`/movie/${movieId}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to get details for movie ${movieId}:`, error);
      throw error;
    }
  },

  getMovieCredits: async (movieId) => {
    const res = await tmdbApi.get(`/movie/${movieId}/credits`);
    return res.data;
  },

  getPosterUrl: (path, size = 'w500') => {
    if (!path) return null;
    return `${imgBaseUrl}/${size}${path}`;
  },

  getBackdropUrl: (path, size = 'original') => {
    return path ? `${imgBaseUrl}/${size}${path}` : null;
  },
};

export default tmdbService;