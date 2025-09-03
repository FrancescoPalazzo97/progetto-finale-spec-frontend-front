import { createContext, useState } from "react";
import { useGames } from "../hooks/useGames";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [search, setSearch] = useState('')
    const [showFilters, setShowFilters] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortBy, setSortBy] = useState('');

    const [compareList, setCompareList] = useLocalStorage("compareList", []);
    const [favorites, setFavorites] = useLocalStorage("favorites", []);

    const [allGames, getGame, getSomeGames, game] = useGames();

    const isInCompareList = (gameId) => compareList.some(gId => gId === gameId);

    const addCompareList = (gameId) => {
        if (!isInCompareList(gameId)) {
            setCompareList([...compareList, gameId]);
        } else {
            alert("Gioco già presente nella lista di confronto");
        }
    }

    const removeCompareList = (gameId) => {
        setCompareList(compareList.filter(gId => gId !== gameId));
    }

    const compareListData = {
        compareList,
        isInCompareList,
        addCompareList,
        removeCompareList
    }

    let filteredGames = null;

    if (allGames) {
        filteredGames = allGames.filter(g => {
            const matchesSearch = g.title.toLowerCase().includes(search.trim().toLowerCase());
            const matchesCategory = selectedCategory === '' || g.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        if (sortBy) {
            filteredGames.sort((a, b) => {
                let comparison = 0;

                switch (sortBy) {
                    case 'title-asc':
                        comparison = a.title.localeCompare(b.title);
                        break;
                    case 'title-desc':
                        comparison = b.title.localeCompare(a.title);
                        break;
                    case 'category-asc':
                        comparison = a.category.localeCompare(b.category);
                        break;
                    case 'category-desc':
                        comparison = b.category.localeCompare(a.category);
                    default:
                        break;
                }

                return comparison;
            });
        }
    }

    const uniqueCategories = allGames ? [...new Set(allGames.map(game => game.category))].sort() : [];

    const value = {
        compareListData,
        filteredGames,
        getGame,
        getSomeGames,
        game,
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