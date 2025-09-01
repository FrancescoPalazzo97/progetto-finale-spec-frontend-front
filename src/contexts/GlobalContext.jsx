import { createContext, useState } from "react";
import { useGames } from "../hooks/useGames";
const API_URL = 'http://localhost:3001/games'

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [search, setSearch] = useState('')
    const [showFilters, setShowFilters] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortBy, setSortBy] = useState('');

    const [games] = useGames();

    let filteredGames = null;

    if (games) {
        filteredGames = games.filter(g => {
            const matchesSearch = g.title.toLowerCase().includes(search.trim().toLowerCase());
            const matchesCategory = selectedCategory === '' || g.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        if (sortBy) {
            filteredGames.sort((a, b) => {
                let comparison = 0;

                if (sortBy === 'title-asc') {
                    comparison = a.title.localeCompare(b.title);
                } else if (sortBy === 'title-desc') {
                    comparison = b.title.localeCompare(a.title);
                } else if (sortBy === 'category-asc') {
                    comparison = a.category.localeCompare(b.category);
                } else if (sortBy === 'category-desc') {
                    comparison = b.category.localeCompare(a.category);
                }

                return comparison;
            });
        }
    }

    const uniqueCategories = games ? [...new Set(games.map(game => game.category))].sort() : [];

    const value = {
        filteredGames,
        search,
        setSearch,
        showFilters,
        setShowFilters,
        selectedCategory,
        setSelectedCategory,
        sortBy,
        setSortBy,
        uniqueCategories
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}