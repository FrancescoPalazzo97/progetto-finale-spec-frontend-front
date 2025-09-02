import Card from "../components/Card"
import FiltersSection from "../components/FiltersSection";
import SearchContainer from "../components/SearchContainer";
import { useGlobalContext } from "../hooks/useGlobalContext"

const Homepage = () => {

    const { filteredGames } = useGlobalContext();

    if (!filteredGames) return <>Caricamento...</>

    return (
        <main>
            <div className="w-[1400px] mx-auto relative">
                <SearchContainer />
                <div className="grid grid-cols-3 gap-x-12 gap-y-10 py-30 px-2">
                    {filteredGames.map(g => (
                        <Card key={g.id} game={g} />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Homepage
