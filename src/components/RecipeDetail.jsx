import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getRecipeById } from '../services/api'
import useFavorites from '../hooks/useFavorites'

export default function RecipeDetail() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const { isFavorite, toggleFavorite } = useFavorites()

  useEffect(() => {
    getRecipeById(id).then(setRecipe)
  }, [id])

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
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded mb-4" />
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
      <ul className="list-disc pl-5">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4">Instrucciones</h2>
      <p className="whitespace-pre-line">{recipe.strInstructions}</p>
    </div>
  )
}