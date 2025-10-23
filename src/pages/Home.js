import React, { useState, useEffect, useCallback } from 'react';
import { tmdbService } from '../services/tmdbService';
import MovieCard from '../components/MovieCard';
import SearchForm from '../components/SearchForm';
import Loading from '../components/Loading';
import Button from '../components/Button';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('popular');
  const [error, setError] = useState(null);
  const [selectedTrailer, setSelectedTrailer] = useState(null); // 👈 for trailer popup

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let data;
      if (searchQuery) {
        data = await tmdbService.searchMovies(searchQuery);
      } else {
        switch (category) {
          case 'popular':
            data = await tmdbService.getPopularMovies();
            break;
          case 'now_playing':
            data = await tmdbService.getNowPlayingMovies();
            break;
          case 'top_rated':
            data = await tmdbService.getTopRatedMovies();
            break;
          default:
            data = await tmdbService.getPopularMovies();
        }
      }
      setMovies(data.results || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('Failed to load movies. Please check your API key and try again.');
    } finally {
      setLoading(false);
    }
  }, [searchQuery, category]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setLoading(true);
    setError(null);
    try {
      const data = await tmdbService.searchMovies(query);
      setMovies(data.results || []);
    } catch (error) {
      console.error('Error searching movies:', error);
      setError('Failed to search movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSearchQuery('');
  };

  // 👇 Updated movie click — opens trailer
  const handleMovieClick = async (movie) => {
    try {
      const trailer = await tmdbService.getMovieTrailer(movie.id);
      if (trailer) {
        setSelectedTrailer(`https://www.youtube.com/embed/${trailer.key}`);
      } else {
        alert('No trailer available for this movie.');
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
      alert('Failed to load trailer.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Discover Amazing Movies
          </h1>
          <p className="text-xl text-primary-100 text-center mb-8">
            Search through thousands of movies and find your next favorite
          </p>
          <SearchForm onSearch={handleSearch} initialQuery={searchQuery} />
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          <Button
            variant={category === 'popular' ? 'primary' : 'outline'}
            onClick={() => handleCategoryChange('popular')}
            size="sm"
          >
            Popular
          </Button>
          <Button
            variant={category === 'now_playing' ? 'primary' : 'outline'}
            onClick={() => handleCategoryChange('now_playing')}
            size="sm"
          >
            Now Playing
          </Button>
          <Button
            variant={category === 'top_rated' ? 'primary' : 'outline'}
            onClick={() => handleCategoryChange('top_rated')}
            size="sm"
          >
            Top Rated
          </Button>
        </div>

        {/* Movies Grid */}
        {loading ? (
          <Loading message="Loading movies..." />
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 dark:text-red-400 text-lg">{error}</p>
          </div>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => handleMovieClick(movie)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No movies found. Try a different search.
            </p>
          </div>
        )}
      </div>

      {/* 👇 Trailer Popup Overlay */}
      {selectedTrailer && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-11/12 max-w-3xl">
            <iframe
              src={selectedTrailer}
              title="Movie Trailer"
              width="100%"
              height="500"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setSelectedTrailer(null)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
