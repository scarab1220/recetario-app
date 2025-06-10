import { useFavorites } from '../hooks/useFavorites';
import { Link } from 'react-router-dom';

export default function Favorites() {
    const { favorites } = useFavorites();

    if (favorites.length === 0) {
        return <p className="text-center p-4">No tienes recetas favoritas.</p>;
    }
}

return (
    
)