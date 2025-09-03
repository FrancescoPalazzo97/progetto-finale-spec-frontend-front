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
        }
    }, [compareListData.compareList]);

    return (
        <div>
            {games.map(game => (
                <CardCompare key={game.id} game={game} />
            ))}
        </div>
    )
}

export default Compare
