import { useGlobalContext } from "../hooks/useGlobalContext";
import { useDebounce } from "../hooks/useDebounce";
import { useCallback } from "react";

const SearchBar = () => {

    const { setSearch } = useGlobalContext();

    const debouncedSetSearch = useCallback(useDebounce(setSearch, 600), []);

    return (
        <div className="flex">
            <div className="relative w-11/12">
                <input
                    type="text"
                    placeholder="Cerca..."
                    className="px-4 py-2 rounded-l-xl bg-slate-700 border border-slate-600 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent w-full"
                    onChange={e => debouncedSetSearch(e.target.value)}
                />
            </div>
            <button className="bg-rose-500 hover:bg-rose-400 text-white cursor-pointer px-4 py-2 rounded-r-xl font-medium transition w-1/12">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}



export default SearchBar