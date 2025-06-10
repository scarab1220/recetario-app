import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function RecipeList({ recipes }) {
  if (!recipes.length) return <p className="text-center">No se encontraron recetas.</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <AnimatePresence>
        {recipes.map((recipe) => (
          <motion.div
            key={recipe.idMeal}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={`/receta/${recipe.idMeal}`}>
              <div className="border rounded shadow p-2 hover:shadow-lg transition">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-40 object-cover rounded" />
                <h2 className="text-lg font-bold mt-2">{recipe.strMeal}</h2>
                <p className="text-sm text-gray-600">Categoría: {recipe.strCategory}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

// Muestra una lista de recetas

