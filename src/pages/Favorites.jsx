import { useFavorites } from "../hooks/useFavorites";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Favorites() {
  const { favorites } = useFavorites();

  if (!favorites.length)
    return <p className="text-center p-4">No tienes recetas favoritas aún.</p>;

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {favorites.map((recipe) => (
        <Link to={`/receta/${recipe.idMeal}`} key={recipe.idMeal}>
          <motion.div
            className="border rounded shadow p-2 hover:shadow-lg transition"
            variants={card}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2">{recipe.strMeal}</h2>
            <p className="text-sm text-gray-600">Categoría: {recipe.strCategory}</p>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
}

// muestra las recetas favoritas del usuario

