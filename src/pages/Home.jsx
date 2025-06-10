import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchForm from "../components/SearchForm";
import RecipeList from "../components/RecipeList";
import { searchRecipes } from "../services/api";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    try {
      const results = await searchRecipes(query);
      setRecipes(results);
    } catch (err) {
      setError("No hay conexión o ha ocurrido un error. Intenta de nuevo.");
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.p
            key="loading"
            className="text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            Buscando recetas...
          </motion.p>
        ) : error ? (
          <motion.p
            key="error"
            className="text-center text-red-600 bg-white/70 rounded-xl p-4 mx-auto w-fit shadow-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.p>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <RecipeList recipes={recipes} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

// App principal que integra todo
