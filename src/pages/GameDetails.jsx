import { useParams } from "react-router-dom"
import { useGlobalContext } from '../hooks/useGlobalContext'
import { useEffect, useState } from "react";
import PlatformAvailability from "../components/PlatformAvailability";
import VoteComponent from "../components/VoteComponent";
import GameSpecifications from "../components/GameSpecifications";
import { MainProductDetails, Container } from "../components/UI/containers";

const GameDetails = () => {
    const { id } = useParams();
    const { getGame, compareListData, favoritesData } = useGlobalContext();
    const [game, setGame] = useState(null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        getGame(id)
            .then(data => setGame(data))
            .catch(e => console.error(e))

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleAddToCompareList = () => {
        if (game) {
            if (!compareListData.isInCompareList(game.id)) {
                compareListData.addCompareList(game.id);
            } else {
                compareListData.removeCompareList(game.id);
            }
        }
    };

    const handleAddToFavorites = () => {
        if (game) {
            if (!favoritesData.isInFavorites(game.id)) {
                favoritesData.addFavorites(game.id);
            } else {
                favoritesData.removeFromFavorites(game.id);
            }
        }
    };

    if (!game) return <>Caricamento...</>;

    return (
        <MainProductDetails>
            <div
                className="bg-cover bg-center h-[35vh] w-full"
                style={{ backgroundImage: `url('${game.bgImageUrl}')` }}
            />
            <Container className={"-mt-20 relative"}>
                <div className="flex gap-4">
                    <div className="w-3/5 my-4">
                        <img
                            src={game.imageUrl}
                            alt={`${game.title}'s cover image`}
                            className="w-full"
                        />
                    </div>
                    <div className="w-2/5 bg-slate-800 border border-slate-600 rounded-md py-8 px-4 my-4 flex flex-col items-center justify-between text-slate-300">
                        <span className="font-semibold text-3xl mb-5">{game.title}</span>
                        <div className="flex flex-col">
                            <span className="mb-3">Disponibile sulle seguenti piattaforme:</span>
                            <PlatformAvailability platforms={game.platform} />
                        </div>
                        <span className="my-6 text-3xl">{game.price}&euro;</span>
                        <div className="flex gap-5">
                            <button
                                className="bg-slate-700 group hover:bg-slate-600 text-slate-300 px-5 py-3 transition-colors rounded-md border-2 border-slate-600"
                                onClick={handleAddToCompareList}
                            >
                                <i className={`fa-solid fa-code-compare ${compareListData.isInCompareList(game.id) ? 'text-rose-500' : ''}`}></i>
                            </button>
                            <button
                                className="bg-slate-700 group hover:bg-slate-600 text-slate-300 hover:text-slate-100 px-5 py-3 transition-colors rounded-md border-2 border-slate-600"
                                onClick={handleAddToFavorites}
                            >
                                <i className={`fa-regular fa-heart ${favoritesData.isInFavorites(game.id) ? 'text-rose-500' : ''}`}></i>
                            </button>
                            <button className="bg-rose-500 px-5 py-3 rounded-md hover:bg-rose-400 transition-colors font-semibold">
                                <i className="fa-solid fa-cart-shopping mr-2"></i>
                                Aggiungi al carrello
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="my-4 py-8 px-4 bg-slate-800 border border-slate-600 rounded-md text-slate-300 w-6/12">
                        <h2 className="font-semibold text-2xl mb-4">Descrizione</h2>
                        <p>{game.description}</p>
                    </div>
                    <div className="my-4 py-8 px-4 bg-slate-800 border border-slate-600 rounded-md text-slate-300 w-2/12">
                        <VoteComponent score={game.metacriticScore} />
                    </div>
                    <div className="my-4 py-8 px-4 bg-slate-800 border border-slate-600 rounded-md text-slate-300 w-4/12">
                        <GameSpecifications game={game} />
                    </div>
                </div>
            </Container>
        </MainProductDetails>
    )
}

export default GameDetails
