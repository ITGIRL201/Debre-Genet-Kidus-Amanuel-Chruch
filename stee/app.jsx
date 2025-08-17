// App.jsx

import { useState } from "react";

export default function Welcome ({ onEnter }) {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-churchGold to-deepGold flex flex-col items-center justify-center text-white z-50 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-6 animate-bounce">Welcome — Peace be with you ✨</h2>
      <button 
        onClick={onEnter} 
        className="px-6 py-3 bg-white text-churchGold rounded-2xl shadow-lg hover:scale-105 transition"
      >
        Enter Site
      </button>
    </div>
  );
}
import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen">
      {!entered && <Welcome onEnter={() => setEntered(true)} />}

      {entered && (
        <div>
          {/* Navbar */}
          <header className="flex justify-between items-center p-6 bg-white shadow-md">
            <h1 className="text-2xl font-bold text-churchGold">Debre Genet Kidus Amanuel EOTC</h1>
            <nav className="space-x-4">
              <a href="#home" className="hover:text-deepGold">Home</a>
              <a href="#books" className="hover:text-deepGold">Books</a>
              <a href="#songs" className="hover:text-deepGold">Songs</a>
              <a href="#videos" className="hover:text-deepGold">Videos</a>
              <a href="#contact" className="hover:text-deepGold">Contact</a>
            </nav>
          </header>

          {/* Sections */}
          <section id="books" className="p-10 grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
              <h2 className="text-xl font-bold text-churchGold">Holy Books</h2>
              <ul className="mt-3 list-disc list-inside">
                <li>Book of Psalms</li>
                <li>Book of Hymns</li>
                <li>Gospel Readings</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
              <h2 className="text-xl font-bold text-churchGold">Songs</h2>
              <ul className="mt-3 list-disc list-inside">
                <li>Moged Simetagn</li>
                <li>Kidus Amanuel</li>
                <li>Mezmur Praise</li>
              </ul>
            </div>
          </section>

          {/* Videos side by side */}
          <section id="videos" className="p-10 grid grid-cols-2 gap-6">
            <div className="aspect-video bg-black rounded-xl overflow-hidden shadow">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/example1" 
                title="Video 1"
                allowFullScreen
              />
            </div>
            <div className="aspect-video bg-black rounded-xl overflow-hidden shadow">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/example2" 
                title="Video 2"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-300 font-sans">
      {showWelcome && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-yellow-200/90 z-50 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.h2
            className="text-3xl font-bold text-yellow-900 mb-6"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
          >
            Welcome — Peace be with you ✨
          </motion.h2>
          <button
            onClick={() => setShowWelcome(false)}
            className="bg-yellow-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-700 transition"
          >
            Enter Site
          </button>
        </motion.div>
      )}

      {/* Navbar */}
      <header className="bg-yellow-600 text-white shadow-lg p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Church Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-bold">Debre Genet Kidus Amanuel EOTC</h1>
        </div>
        <nav className="space-x-6">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#books" className="hover:underline">
            Books
          </a>
          <a href="#songs" className="hover:underline">
            Songs
          </a>
          <a href="#videos" className="hover:underline">
            Videos
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="text-center py-20 bg-gradient-to-r from-yellow-200 to-yellow-400"
      >
        <h2 className="text-4xl font-bold text-yellow-900 mb-4">
          Welcome to Debre Genet Kidus Amanuel EOTC
        </h2>
        <p className="text-lg text-yellow-800">
          Serving the community with love, unity, and faith ✝️
        </p>
      </section>

      {/* Books Section */}
      <section id="books" className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-yellow-700 mb-10">
          📖 Books
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-yellow-100 shadow-md rounded-lg"
          >
            Book 1
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-yellow-100 shadow-md rounded-lg"
          >
            Book 2
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-yellow-100 shadow-md rounded-lg"
          >
            Book 3
          </motion.div>
        </div>
      </section>

      {/* Songs Section */}
      <section id="songs" className="py-16 bg-yellow-50">
        <h2 className="text-3xl font-bold text-center text-yellow-700 mb-10">
          🎵 Songs
        </h2>
        <div className="flex justify-center space-x-6">
          <audio controls src="/songs/moged.mp3" className="rounded-lg"></audio>
          <audio controls src="/songs/mezmur2.mp3" className="rounded-lg"></audio>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-yellow-700 mb-10">
          🎥 Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10">
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="Church Video"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.youtube.com/embed/ysz5S6PUM-U"
            title="Church Video 2"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white"
      >
        <h2 className="text-3xl font-bold text-center mb-10">📞 Contact Us</h2>
        <form className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg text-black">
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-4 p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 border rounded-lg"
          />
          <textarea
            placeholder="Message"
            className="w-full mb-4 p-3 border rounded-lg"
          ></textarea>
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition w-full">
            Send
          </button>
        </form>
      </section>
    </div>
  );
}

