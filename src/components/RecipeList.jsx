import { Link } from 'react-router-dom'

export default function RecipeList({ recipes }) {
  if (!recipes.length) return <p className="text-center">No se encontraron recetas.</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {recipes.map((recipe) => (
        <Link to={`/receta/${recipe.idMeal}`} key={recipe.idMeal}>
          <div className="border rounded shadow p-2 hover:shadow-lg transition">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-40 object-cover rounded" />
            <h2 className="text-lg font-bold mt-2">{recipe.strMeal}</h2>
            <p className="text-sm text-gray-600">Categoría: {recipe.strCategory}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

// Muestra una lista de recetas

