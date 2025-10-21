import React from 'react';
import { tmdbService } from '../services/tmdbService';

/**
 * A component that displays a movie card with poster, rating, title, release year, and overview.
 *
 * @param {Object} movie - The movie object containing details like title, poster_path, vote_average, release_date, overview.
 * @param {Function} onClick - The function to call when the card is clicked.
 * @returns {JSX.Element} The rendered movie card component.
 */
const MovieCard = ({ movie, onClick }) => {
  const posterUrl = tmdbService.getImageUrl(movie.poster_path);
  const placeholderImage = 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="relative aspect-[2/3] overflow-hidden bg-gray-200 dark:bg-gray-700">
        <img
          src={posterUrl || placeholderImage}
          alt={movie.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md flex items-center space-x-1">
          <svg
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-semibold">{movie.vote_average?.toFixed(1)}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1 mb-1">
          {movie.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
          {movie.overview || 'No overview available'}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;