import { useState } from "react";
import SearchForm from "../components/SearchForm";
import RecipeList from "../components/RecipeList";
import { searchRecipes } from "../services/api";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    const results = await searchRecipes(query);
    setRecipes(results);
    setLoading(false);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading ? <p className="text-center">Buscando recetas...</p> : <RecipeList recipes={recipes} />}
    </div>
  );
}

export default App;

// App principal que integra todo
