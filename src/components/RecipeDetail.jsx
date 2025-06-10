import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getRecipeById } from '../services/api'
import { useFavorites } from '../hooks/useFavorites'
import { motion } from 'framer-motion'

export default function RecipeDetail() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const { isFavorite, toggleFavorite } = useFavorites()

  useEffect(() => {
    getRecipeById(id).then(setRecipe)
  }, [id])

  if (!recipe) return (
    <motion.p
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Cargando receta...
    </motion.p>
  )

  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ing = recipe[`strIngredient${i}`]
    const measure = recipe[`strMeasure${i}`]
    if (ing && ing.trim()) {
      ingredients.push(`${measure} ${ing}`)
    }
  }

  const handleToggle = () => {
    toggleFavorite(recipe)
    alert(isFavorite(recipe.id) ? 'Receta eliminada de favoritos' : 'Receta añadida a favoritos')
  }

  return (
    <motion.div
      className="max-w-3xl mx-auto p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {recipe.strMeal}
      </motion.h1>
      <motion.img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full rounded mb-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      />
      <motion.p
        className="text-sm text-gray-600 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Categoría: {recipe.strCategory}
      </motion.p>
      <motion.p
        className="text-sm text-gray-600 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        Origen: {recipe.strArea}
      </motion.p>
      <motion.button
        onClick={handleToggle}
        className={`mb-4 px-4 py-2 rounded ${
          isFavorite(recipe.id) ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {isFavorite(recipe.id) ? 'Eliminar de favoritos' : 'Añadir a favoritos'}
      </motion.button>
      <motion.h2
        className="text-xl font-semibold mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Ingredientes
      </motion.h2>
      <motion.ul
        className="list-disc pl-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
      >
        {ingredients.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.03 }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
      <motion.h2
        className="text-xl font-semibold mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        Instrucciones
      </motion.h2>
      <motion.p
        className="whitespace-pre-line"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
      >
        {recipe.strInstructions}
      </motion.p>
    </motion.div>
  )
}