import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2 my-4">
      <input
        type="text"
        className="border rounded px-3 py-2 w-64"
        placeholder="Buscar receta..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Buscar</button>
    </form>
  );
}

// Formulario de búsqueda para recetas
