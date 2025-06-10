import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getRecipeById } from '../services/api'
import { useFavorites } from '../hooks/useFavorites'
import { motion } from 'framer-motion'

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null)
  const { isFavorite, toggleFavorite } = useFavorites()

  useEffect(() => {
    getRecipeById(id).then(data => {
      if (data && data.meals && data.meals.length > 0) {
        setRecipe(data.meals[0]);
      } else {
        setRecipe(null);
      }
    });
  }, [id]);

  if (recipe === null) return <p className="text-center">No se encontró la receta.</p>;
  if (!recipe) return <p className="text-center">Cargando receta...</p>

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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-4">{recipe.strMeal}</h1>
      <motion.img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full rounded mb-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <p className="text-sm text-gray-600 mb-2">Categoría: {recipe.strCategory}</p>
      <p className="text-sm text-gray-600 mb-2">Origen: {recipe.strArea}</p>
      <button
        onClick={handleToggle}
        className={`mb-4 px-4 py-2 rounded ${
          isFavorite(recipe.id) ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
        }`}
      >
        {isFavorite(recipe.id) ? 'Eliminar de favoritos' : 'Añadir a favoritos'}
      </button>
      <h2 className="text-xl font-semibold mt-4">Ingredientes</h2>
      <motion.ul
        className="list-disc pl-5"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.05 }
          }
        }}
      >
        {ingredients.map((item, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
      <h2 className="text-xl font-semibold mt-4">Instrucciones</h2>
      <motion.p
        className="whitespace-pre-line"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {recipe.strInstructions}
      </motion.p>
    </motion.div>
  )
}

// src/services/api.js
export async function getRecipeById(id) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  return await res.json();
}