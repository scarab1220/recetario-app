import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      className="bg-teal-600/80 backdrop-blur-md text-white py-4 flex justify-between items-center shadow-lg fixed w-full top-0 left-0 z-20"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-xl font-semibold ml-4">
        <Link to="/">Recetas App</Link>
      </h1>
      <nav className='space-x-4 mr-4'>
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/favoritos" className="hover:underline">Favoritos</Link>
      </nav>
    </motion.header>
  );
}
