const GameSpecifications = ({ game }) => {
    return (
        <ul>
            <li><strong>Genere:</strong> {game.category}</li>
            <li><strong>Data di rilascio:</strong> {game.releaseDate}</li>
            <li><strong>Sviluppatore:</strong> {game.developer}</li>
            <li><strong>Publisher:</strong> {game.publisher}</li>
            <li><strong>Age Rating:</strong> {game.ageRating}</li>
            <li><strong>Multiplayer:</strong> <i className={`fa-solid ${game.multiplayer ? "fa-check text-emerald-500" : "fa-xmark text-red-500"}`}></i></li>
            <li><strong>Max Players:</strong> {game.maxPlayers}</li>
        </ul>
    )
}

export default GameSpecifications
