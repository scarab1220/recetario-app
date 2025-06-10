import { useState } from "react";
import SearchForm from "../components/SearchForm";
import RecipeList from "../components/RecipeList";
import { searchRecipes } from "../services/api";
import { motion } from "framer-motion";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    try {
      const results = await searchRecipes(query);
      if (!results.length) {
        setError("No se encontraron recetas.");
      }
      setRecipes(results);
    } catch (e) {
      setError("Error de conexión. Intenta de nuevo.");
      setRecipes([]);
    }
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SearchForm onSearch={handleSearch} />
      {loading && (
        <motion.p className="text-center">Buscando recetas...</motion.p>
      )}
      {error && (
        <motion.p className="text-center text-red-500">{error}</motion.p>
      )}
      {!loading && !error && recipes.length > 0 && (
        <RecipeList recipes={recipes} />
      )}
      {!loading && !error && recipes.length === 0 && (
        <p className="text-center text-gray-500">
          Busca una receta para comenzar.
        </p>
      )}
    </motion.div>
  );
}

export default Home;

// App principal que integra todo
