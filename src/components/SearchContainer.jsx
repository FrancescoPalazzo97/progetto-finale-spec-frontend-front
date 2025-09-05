import SearchBar from "./SearchBar"
import FiltersSection from "./FiltersSection";

const SearchContainer = () => {

    return (
        <div className='group bg-slate-800 border border-slate-600 rounded-2xl p-4 my-4 fixed inset-x-6 md:inset-x-6 lg:left-1/4 lg:right-1/4 xl:inset-x-1/3 flex flex-col gap-5 h-[80px] hover:h-[250px] sm:hover:h-[170px] ease-out duration-200 z-40'>
            <SearchBar />
            <FiltersSection />
        </div>
    )
}

export default SearchContainer
