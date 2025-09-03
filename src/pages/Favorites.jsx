import { useGlobalContext } from "../hooks/useGlobalContext";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Favorites = () => {
    const { favoritesData, getSomeGames } = useGlobalContext();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (favoritesData.favoritesIds.length > 0) {
            getSomeGames(favoritesData.favoritesIds)
                .then(games => setFavorites(games))
                .catch(e => console.error(e));
        } else {
            setFavorites([]);
        }
    }, [favoritesData.favoritesIds]);

    return (
        <div>
            {favorites.length === 0 ? (
                <p>Nessun gioco nei preferiti</p>
            ) : (
                <main>
                    <div className="w-[1400px] mx-auto relative">
                        <div className="grid grid-cols-3 gap-x-12 gap-y-10 py-30 px-2">
                            {favorites.map(g => (
                                <Card key={g.id} game={g} />
                            ))}
                        </div>
                    </div>
                </main>
            )}
        </div>
    )
}

export default Favorites
