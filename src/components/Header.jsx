import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header
      className="bg-teal-600/60 text-white py-4 flex justify-between items-center rounded-3xl mx-4 mt-4 backdrop-blur-md shadow-lg"
    >
      <h1 className="text-xl font-semibold ml-4">
        <Link to="/">Recetas App</Link>
      </h1>
      <nav className="space-x-4 mr-4 flex items-center">
        <Link
          to="/"
          aria-label="Inicio"
          className="flex items-center justify-center rounded-full p-2 transition hover:text-cyan-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-4 0h4" />
          </svg>
        </Link>
        <Link
          to="/favoritos"
          aria-label="Favoritos"
          className="flex items-center justify-center rounded-full p-2 transition hover:text-cyan-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
          </svg>
        </Link>
      </nav>
    </header>
  );
}
