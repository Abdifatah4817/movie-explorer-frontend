import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            About Movie Explorer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover and explore movies
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-6">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              What's this?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A simple movie browsing app built with React. Search through thousands of movies,
              check out what's popular or top rated, and keep track of what you want to watch.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Features
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Search movies by title</li>
              <li>• Browse popular, now playing, and top-rated collections</li>
              <li>• User authentication with Firebase</li>
              <li>• Dark mode support</li>
              <li>• Add your own movies (work in progress)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Built with
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Frontend</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">React, React Router, Tailwind CSS</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Services</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">Firebase Auth, TMDB API</p>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center">
          <Button
            variant="primary"
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
