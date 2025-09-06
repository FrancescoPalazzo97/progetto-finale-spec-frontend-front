import { useGlobalContext } from "../hooks/useGlobalContext";
import { useDebounce } from "../hooks/useDebounce";
import { useCallback } from "react";

const SearchBar = () => {

    const { setSearch } = useGlobalContext();

    const debouncedSetSearch = useCallback(useDebounce(setSearch, 600), []);

    return (
        <div className="flex">
            <div className="w-full">
                <input
                    type="text"
                    placeholder="Cerca..."
                    className="px-4 py-2 rounded-xl bg-slate-700 border border-slate-600 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent w-full"
                    onChange={e => debouncedSetSearch(e.target.value)}
                />
            </div>
        </div>
    )
}



export default SearchBar