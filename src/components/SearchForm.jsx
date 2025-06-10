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
      className="flex justify-center gap-2 my-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.input
        type="text"
        className="border rounded px-3 py-2 w-64"
        placeholder="Buscar receta..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        whileFocus={{ scale: 1.05, borderColor: "#2563eb" }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <motion.button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Buscar
      </motion.button>
    </motion.form>
  );
}

// Formulario de búsqueda para recetas
