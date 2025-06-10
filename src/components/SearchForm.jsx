import { useState } from "react";
import { motion } from "framer-motion";

export default function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex justify-center gap-2 my-4 bg-white/60 backdrop-blur-md rounded-lg shadow px-4 py-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <input
        type="text"
        className="border rounded px-3 py-2 w-64 bg-white/70 focus:bg-white/90 transition"
        placeholder="Buscar receta..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="bg-blue-600/90 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
        Buscar
      </button>
    </motion.form>
  );
}

// Formulario de búsqueda para recetas
