import CardCompare from "../components/CardCompare"
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useEffect, useState } from "react";
import { Container, GridContainer } from "../components/UI/containers";

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
        <main>
            {games.length === 0
                ? (<h1 className="text-4xl font-bold text-slate-100 mt-10 text-center">La tua lista di confronto è vuota</h1>)
                : (
                    <Container className="relative">
                        <h1 className="text-4xl font-bold text-slate-100 mt-10 text-center">La tua lista di confronto</h1>
                        <GridContainer
                            cols={'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5'}
                            className={"gap-4 py-30 px-2"}
                        >
                            {games.map(game => (
                                <CardCompare key={game.id} game={game} />
                            ))}
                        </GridContainer>
                    </Container>
                )
            }
        </main>
    )
}

export default Compare
