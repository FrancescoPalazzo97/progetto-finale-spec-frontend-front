import { createContext, useMemo, useState, useEffect, use } from "react";
import { useGames } from "../hooks/useGames";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortBy, setSortBy] = useState('');

    const [compareList, setCompareList] = useLocalStorage("compareList", []);
    const [favoritesIds, setFavoritesIds] = useLocalStorage("favorites", []);

    const [allGames, categories, getAllGames, getGame, getSomeGames] = useGames();

    useEffect(() => {
        getAllGames(search, selectedCategory);
    }, [search, selectedCategory]);

    const isInFavorites = (gameId) => favoritesIds.some(gId => gId === gameId);

    const addFavorites = (gameId) => {
        if (!isInFavorites(gameId)) {
            setFavoritesIds([...favoritesIds, gameId]);
        } else {
            alert("Gioco già presente nei preferiti");
        }
    };

    const removeFromFavorites = (gameId) => {
        setFavoritesIds(favoritesIds.filter(gId => gId !== gameId));
    };

    const favoritesData = {
        favoritesIds,
        isInFavorites,
        addFavorites,
        removeFromFavorites
    }

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

    const filteredGames = useMemo(() => {
        if (!allGames) return null;

        return [...allGames]
            .sort((a, b) => {
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
                        break;
                    default:
                        break;
                }

                return comparison;
            })
    }, [allGames, sortBy]);

    const value = {
        compareListData,
        favoritesData,
        filteredGames,
        getGame,
        getSomeGames,
        search,
        setSearch,
        selectedCategory,
        setSelectedCategory,
        sortBy,
        setSortBy,
        categories
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}