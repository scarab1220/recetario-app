import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-teal-600 text-white py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold ml-4">
        <Link to="/">Recetas App</Link>
      </h1>
      <nav className='space-x-4 mr-4'>
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/favoritos" className="hover:underline">Favoritos</Link>
      </nav>
    </header>
  );
}
