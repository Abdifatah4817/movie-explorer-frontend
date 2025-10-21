import React from "react";
import Button from "./components/Button";
import{Link} from "react-router-dom";


// About Page Component 
// Provides detailed information about the Movie Explorer application
// including features, technologies used, and setup instructions.
// Styled with Tailwind CSS for a clean and responsive design.
// Accessible and user-friendly layout.

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Movie Explorer
          </h1>

        // Application Description
        // explains the purpose and features of the Movie Explorer app


          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Movie Explorer is a modern single-page application built with React that allows users
              to discover, search, and manage their favorite movies using The Movie Database (TMDB) API.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
              Features
            </h2>

            // List of Features
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>Search thousands of movies from TMDB's extensive database</li>
              <li>Browse popular, now playing, and top-rated movies</li>
              <li>Secure user authentication with Firebase (Email/Password & Google Sign-In)</li>
              <li>Responsive design optimized for mobile, tablet, and desktop</li>
              <li>Dark mode support with persistent theme preferences</li>
              <li>Add movies to your personal list (authenticated users)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
              Technologies Used
            </h2>

            // Technologies List
            //explains the main technologies and libraries used in the project

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• React 18</li>
                  <li>• React Router DOM</li>
                  <li>• Tailwind CSS</li>
                  <li>• Context API</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend & APIs</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Firebase Authentication</li>
                  <li>• TMDB API</li>
                  <li>• Axios</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
              Getting Started
            </h2>
            <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Configuration Required
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                To run this application, you'll need to configure:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <strong>TMDB API Key:</strong> Get it from{' '}
                  <a
                    href="https://www.themoviedb.org/settings/api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 underline"
                  >
                    TMDB API Settings
                  </a>
                </li>
                <li>
                  <strong>Firebase Configuration:</strong> Create a project at{' '}
                  <a
                    href="https://console.firebase.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 underline"
                  >
                    Firebase Console
                  </a>
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
              Project Structure
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The application follows a clean and organized structure with reusable components,
              context providers for global state management, and service layers for API interactions.
            </p>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Key Components
              </h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• <strong>Navbar:</strong> Responsive navigation with mobile menu</li>
                <li>• <strong>MovieCard:</strong> Reusable card component for displaying movies</li>
                <li>• <strong>SearchForm:</strong> Search interface for finding movies</li>
                <li>• <strong>ThemeToggle:</strong> Light/dark mode switcher</li>
                <li>• <strong>Button:</strong> Flexible button component with multiple variants</li>
              </ul>
            </div>

            <div className="mt-8 text-center">
              <Link to="/">
                <Button size="lg">Start Exploring Movies</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;