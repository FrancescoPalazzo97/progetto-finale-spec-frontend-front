import Card from "../components/Card"
import SearchContainer from "../components/SearchContainer";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Container, ResponsiveGridContainer } from "../components/UI/containers";

const Homepage = () => {

    const { filteredGames } = useGlobalContext();

    if (!filteredGames) return <>Caricamento...</>

    return (
        <main>
            <Container className="relative">
                <SearchContainer />
                {filteredGames.length === 0
                    ? (<h2 className="text-4xl font-bold text-slate-100 text-center py-56">Nessun gioco trovato</h2>)
                    : (
                        <ResponsiveGridContainer className={"gap-x-12 gap-y-10 py-30 px-2"}>
                            {filteredGames.map(g => (
                                <Card key={g.id} game={g} />
                            ))}
                        </ResponsiveGridContainer>
                    )}
            </Container>
        </main>
    )
}

export default Homepage
