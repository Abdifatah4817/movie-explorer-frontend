import React from 'react';

/**
 * A loading component that displays a spinning animation and an optional message.
 *
 * @param {string} [message='Loading...'] - The message to display below the spinner.
 * @returns {JSX.Element} The rendered loading component.
 */
const Loading = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-600"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">{message}</p>
    </div>
  );
};

export default Loading;