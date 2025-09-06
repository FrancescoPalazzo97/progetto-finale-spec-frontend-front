import { useGlobalContext } from "../hooks/useGlobalContext"

const ButtonSection = ({ game }) => {
    const { compareListData, favoritesData } = useGlobalContext();

    const handleAddToCompareList = () => {
        if (game) {
            if (!compareListData.isInCompareList(game.id)) {
                compareListData.addCompareList(game.id);
            } else {
                compareListData.removeCompareList(game.id);
            }
        }
    };

    const handleAddToFavorites = () => {
        if (game) {
            if (!favoritesData.isInFavorites(game.id)) {
                favoritesData.addFavorites(game.id);
            } else {
                favoritesData.removeFromFavorites(game.id);
            }
        }
    };

    return (
        <div className='absolute bottom-0 right-0 p-2 flex gap-2 z-20'>
            <button onClick={handleAddToCompareList}>
                <i className={`fa-solid fa-code-compare  transition-colors ${compareListData.isInCompareList(game.id) ? 'text-rose-500 hover:text-slate-300' : 'text-slate-300 hover:text-rose-500'}`}></i>
            </button>
            <button onClick={handleAddToFavorites}>
                <i className={`fa-regular fa-heart  transition-colors ${favoritesData.isInFavorites(game.id) ? 'text-rose-500 hover:text-slate-300' : 'text-slate-300 hover:text-rose-500'}`}></i>
            </button>
            <button onClick={() => { }}>
                <i className={`fa-solid fa-cart-shopping  transition-colors text-slate-300 hover:text-rose-500`}></i>
            </button>
        </div>
    )
}

export default ButtonSection
