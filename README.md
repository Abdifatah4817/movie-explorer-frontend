# Movie Explorer 🎬

A modern, responsive single-page application (SPA) built with React for discovering, searching, and managing movies using The Movie Database (TMDB) API.

## Features

- 🎬 **Movie Search & Discovery**: Search through thousands of movies from TMDB's extensive database
- 📱 **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- 🔐 **User Authentication**: Secure Firebase authentication with email/password and Google sign-in
- 🌙 **Theme Switching**: Light/dark mode toggle with persistent preferences via localStorage
- 🎯 **Multiple Categories**: Browse popular, now playing, and top-rated movies
- ➕ **Add Movies**: Authenticated users can add movies to their personal list
- 🧩 **Reusable Components**: Clean, organized code with modular components
- 🎨 **Modern UI**: Beautiful interface styled with Tailwind CSS

## Technologies Used

### Frontend
- **React 18**: Modern JavaScript framework
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Context API**: State management

### Backend & APIs
- **Firebase**: User authentication (Email/Password & Google)
- **TMDB API**: Live movie data
- **Axios**: HTTP client for API requests

## Project Structure

```
movie-explorer/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.js
│   │   ├── Loading.js
│   │   ├── MovieCard.js
│   │   ├── Navbar.js
│   │   ├── SearchForm.js
│   │   └── ThemeToggle.js
│   ├── context/
│   │   ├── AuthContext.js
│   │   └── ThemeContext.js
│   ├── pages/
│   │   ├── About.js
│   │   ├── AddMovie.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   └── Signup.js
│   ├── services/
│   │   └── tmdbService.js
│   ├── App.js
│   ├── firebase.js
│   └── index.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- TMDB API Key
- Firebase project

### 1. Get Your TMDB API Key

1. Visit [The Movie Database](https://www.themoviedb.org/)
2. Create an account or log in
3. Go to Settings > API
4. Request an API key (it's free!)
5. Copy your API key

### 2. Set Up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password
   - Enable Google (optional but recommended)
4. Get your Firebase configuration:
   - Go to Project Settings > General
   - Scroll down to "Your apps"
   - Copy the configuration object

### 3. Configure the Application

1. Open `src/firebase.js` and replace the placeholder values with your Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

2. Open `src/services/tmdbService.js` and replace the API key:

```javascript
const API_KEY = 'YOUR_TMDB_API_KEY';
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Run the Application

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner

## Key Components

### Navbar
- Responsive navigation with mobile menu
- Theme toggle
- Authentication status display
- Links to all routes

### MovieCard
- Displays movie poster, title, rating, and overview
- Hover effects and smooth transitions
- Click handler for movie details

### SearchForm
- Search input with submit button
- Real-time search capability
- Responsive design

### ThemeToggle
- Switches between light and dark modes
- Persists preference to localStorage
- Smooth transition animations

### Button
- Reusable button with multiple variants (primary, secondary, outline, danger, ghost)
- Multiple sizes (sm, md, lg)
- Disabled state support

## Routes

- `/` - Home page with movie discovery
- `/login` - User login page
- `/signup` - User registration page
- `/add` - Add movie to personal list (requires authentication)
- `/about` - About page with project information

## Features in Detail

### Authentication
- Email/password authentication via Firebase
- Google social login
- Protected routes for authenticated users
- Persistent authentication state

### Theme System
- Light and dark mode support
- Uses Tailwind's dark mode classes
- Persists user preference in localStorage
- System preference detection

### Movie Discovery
- Search movies by title
- Browse by categories (Popular, Now Playing, Top Rated)
- View movie details including ratings, overview, and release date
- Responsive grid layout

## Environment Variables (Optional)

For better security in production, consider using environment variables:

Create a `.env` file in the root directory:

```env
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

Then update your config files to use `process.env.REACT_APP_*` variables.

## Troubleshooting

### TMDB API Issues
- Ensure your API key is correct
- Check if you've exceeded the rate limit (40 requests per 10 seconds)
- Verify the API key is active in your TMDB account

### Firebase Authentication Issues
- Verify Firebase configuration is correct
- Ensure Authentication is enabled in Firebase Console
- Check if Google Sign-in is properly configured

### Build Issues
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`

## Future Enhancements

- Movie watchlist functionality
- User ratings and reviews
- Movie recommendations
- Advanced filtering options
- Video trailers integration
- Social sharing features

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## License

This project is open source and available under the MIT License.

## Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [Firebase](https://firebase.google.com/) for authentication services
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [React](https://reactjs.org/) for the awesome framework

---

Built with ❤️ using React, Firebase, and TMDB API
