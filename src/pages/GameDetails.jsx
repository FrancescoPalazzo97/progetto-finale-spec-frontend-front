import { useParams } from "react-router-dom"
import { useGlobalContext } from '../hooks/useGlobalContext'
import { useEffect, useState } from "react";
import PlatformAvailability from "../components/PlatformAvailability";

const GameDetails = () => {
    const { id } = useParams();
    const { getGame } = useGlobalContext();
    const [game, setGame] = useState(null);

    useEffect(() => {
        getGame(id)
            .then(data => setGame(data))
            .catch(e => console.error(e))
    }, []);

    if (!game) return <>Caricamento...</>
    console.log(game.bgImageUrl)
    return (
        <main>
            <div
                className="bg-cover bg-center h-[35vh] w-full"
                style={{ backgroundImage: `url('${game.bgImageUrl}')` }}
            />
            <div className="w-[1400px] flex gap-4 mx-auto">
                <div className="w-2/5 my-4">
                    <img
                        src={game.imageUrl}
                        alt={`${game.title}'s cover image`}
                        className="w-full"
                    />
                </div>
                <div className="w-3/5 bg-slate-800 border border-slate-600 rounded-md p-4 my-4 flex flex-col items-center text-slate-300">
                    <span className="font-semibold text-3xl">{game.title}</span>
                    <span>Disponibile sulle seguenti piattaforme:</span>
                    <div>
                        <PlatformAvailability platforms={game.platform} />
                    </div>
                    <span>{game.price}</span>
                </div>
            </div>

        </main>
    )
}

export default GameDetails
