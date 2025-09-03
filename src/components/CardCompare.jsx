import GameSpecifications from "./GameSpecifications";
import { useGlobalContext } from "../hooks/useGlobalContext";

const CardCompare = ({ game }) => {

    const { compareListData } = useGlobalContext();

    const handleRemoveFromCompareList = () => {
        if (game) {
            compareListData.removeCompareList(game.id);
        }
    }

    if (!game) return <>Caricamento...</>;

    return (
        <div className="my-4 py-8 px-4 bg-slate-800 border border-slate-600 rounded-md text-slate-300 flex flex-col relative">
            <button
                className="absolute top-1 right-1 p-2 hover:bg-slate-700 rounded-full transition-colors"
                onClick={handleRemoveFromCompareList}
            >
                <i className="fa-solid fa-minus text-rose-500"></i>
            </button>
            <h2 className="text-lg font-semibold mb-3 text-center">{game.title}</h2>
            <GameSpecifications game={game} />
        </div>
    )
}

export default CardCompare
