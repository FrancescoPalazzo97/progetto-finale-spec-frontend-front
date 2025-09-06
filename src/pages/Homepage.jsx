import Card from "../components/Card"
import SearchContainer from "../components/SearchContainer";
import { useGamesContext } from "../hooks/useGamesContext";
import { Container, GridContainer } from "../components/UI/containers";

const Homepage = () => {

    const { filteredGames } = useGamesContext();

    if (!filteredGames) return <>Caricamento...</>

    return (
        <Container className="relative">
            <SearchContainer />
            {filteredGames.length === 0
                ? (<h2 className="text-4xl font-bold text-slate-100 text-center py-56">Nessun gioco trovato</h2>)
                : (
                    <GridContainer
                        cols={'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'}
                        className={"gap-x-12 gap-y-10 py-30 px-2"}
                    >
                        {filteredGames.map(g => (
                            <Card key={g.id} game={g} />
                        ))}
                    </GridContainer>
                )}
        </Container>
    )
}

export default Homepage
