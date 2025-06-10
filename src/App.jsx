import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import RecipeDetail from './components/RecipeDetail'
import Header from './components/Header'
import "./index.css";
import "./App.css";
import Favorites from './pages/Favorites';
import { useState, useEffect } from "react";

export default function App() {
  const [dark, setDark] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-hidden pt-20 bg-white dark:bg-gray-900 transition-colors">
      <button
        className="fixed bottom-4 left-4 z-50 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-2 rounded shadow transition"
        onClick={() => setDark((d) => !d)}
        aria-label="Cambiar tema"
      >
        {dark ? "🌙 Oscuro" : "☀️ Claro"}
      </button>
      <Header dark={dark} setDark={setDark} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/receta/:id" element={<RecipeDetail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}