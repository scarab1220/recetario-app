import { useEffect, useState } from "react";

export function useFavorites() {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const isFavorite = (id) => favorites.some((r) => r.id === id);

    const toggleFavorite = (recipe) => {
        setFavorites((prev) => 
            isFavorite(recipe.id)
                ? prev.filter((r) => r.id !== recipe.id)
                : [...prev, recipe]
        );
    };

    return { favorites, isFavorite, toggleFavorite };
    }
    