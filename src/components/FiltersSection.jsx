import { useGlobalContext } from "../hooks/useGlobalContext"

const FiltersSection = () => {
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
        <>
            <div className={`fixed ${showFilters ? 'opacity-100' : 'opacity-0'} duration-500 top-24 left-4 bg-slate-800 border border-slate-600 rounded-md p-4 my-4`}>
                <button
                    className="absolute top-1 right-1 cursor-pointer"
                    onClick={() => setShowFilters(false)}
                >
                    <i class="fa-solid fa-xmark text-red-500"></i>
                </button>
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <label htmlFor="category-filter" className="block text-slate-300 text-sm font-medium mb-2">
                            Filtra per categoria:
                        </label>
                        <select
                            id="category-filter"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full px-4 py-2 rounded-md bg-slate-700 border border-slate-600 text-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        >
                            <option value="">Tutte le categorie</option>
                            {uniqueCategories.map(category => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex-1">
                        <label htmlFor="sort-select" className="block text-slate-300 text-sm font-medium mb-2">
                            Ordina per:
                        </label>
                        <select
                            id="sort-select"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-full px-4 py-2 rounded-md bg-slate-700 border border-slate-600 text-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        >
                            <option value="">Nessun ordinamento</option>
                            <option value="title-asc">Titolo (A-Z)</option>
                            <option value="title-desc">Titolo (Z-A)</option>
                            <option value="category-asc">Categoria (A-Z)</option>
                            <option value="category-desc">Categoria (Z-A)</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FiltersSection
