import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RecipeDetail from './components/RecipeDetail'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receta/:id" element={<RecipeDetail />} />
      </Routes>
    </>
  )
}

// Componentes principales