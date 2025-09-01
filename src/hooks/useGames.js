import { useState, useEffect } from "react"
const API_URL = 'http://localhost:3001/games'

export const useGames = () => {
    const [games, setGames] = useState(null);

    async function getGames() {
        const res = await fetch(API_URL);
        const data = await res.json();
        setGames(data);
    }

    useEffect(() => {
        getGames();
    }, [])

    return [games]
}