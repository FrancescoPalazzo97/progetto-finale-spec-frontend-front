import { useGlobalContext } from "../hooks/useGlobalContext";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Container, GridContainer } from "../components/UI/containers";

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
        <main>
            {favorites.length === 0 ? (
                <h1 className="text-4xl font-bold text-slate-100 text-center mt-10">La tua lista di preferiti è vuota</h1>
            ) : (
                <Container className="relative">
                    <h1 className="text-4xl font-bold text-slate-100 text-center mt-10">La tua lista di preferiti</h1>
                    <GridContainer
                        cols={'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'}
                        className={"gap-x-12 gap-y-10 py-20 px-2"}
                    >
                        {favorites.map(g => (
                            <Card key={g.id} game={g} />
                        ))}
                    </GridContainer>
                </Container>
            )}
        </main>
    )
}

export default Favorites
