import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RecipeDetail from './components/RecipeDetail'
import Header from './components/Header'
import "./index.css";
import Favorites from './pages/Favorites';


export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or system preference
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme') === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receta/:id" element={<RecipeDetail />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>

    </>
  )
}

// Componentes principales