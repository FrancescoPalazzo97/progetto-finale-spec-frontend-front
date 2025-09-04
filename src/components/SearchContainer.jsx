import SearchBar from "./SearchBar"
import FiltersSection from "./FiltersSection";
import { useGlobalContext } from "../hooks/useGlobalContext"

const SearchContainer = () => {

    const {
        showFilters,
        setShowFilters,
        selectedCategory,
        setSelectedCategory,
        sortBy,
        setSortBy,
        uniqueCategories
    } = useGlobalContext();

    return (
        <div className='group bg-slate-800 border border-slate-600 rounded-2xl p-4 my-4 fixed left-1/3 right-1/3 flex flex-col justify-between gap-5 h-[80px] hover:h-[160px] ease-out duration-200 z-30'>
            <SearchBar />
            <FiltersSection />
        </div>
    )
}

export default SearchContainer
