import CardCompare from "../components/CardCompare"
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useEffect, useState } from "react";

const Compare = () => {
    const { compareListData, getSomeGames } = useGlobalContext();
    const [games, setGames] = useState([]);

    useEffect(() => {
        if (compareListData.compareList.length > 0) {
            console.log(compareListData.compareList);
            getSomeGames(compareListData.compareList)
                .then(data => setGames(data))
                .catch(e => console.error(e));
        } else {
            setGames([]);
        }
    }, [compareListData.compareList]);

    return (
        <div className="flex flex-wrap">
            {games.map(game => (
                <div key={game.id} className="w-1/5 p-4">
                    <CardCompare game={game} />
                </div>
            ))}
        </div>
    )
}

export default Compare
