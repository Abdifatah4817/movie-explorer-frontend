import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddMovie from "./pages/AddMovie";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        {/* Navbar always visible */}
        <Navbar />

        {/* Page content */}
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add-movie" element={<AddMovie />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Optional footer */}
        <footer className="bg-gray-800 text-center text-gray-400 py-4">
          <p>© 2025 Movie Explorer | Built by Abdifatah & Team</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
