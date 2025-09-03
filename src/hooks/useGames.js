import { useState, useEffect } from "react"
import { data } from "react-router-dom";
const API_URL = 'http://localhost:3001/games'

export const useGames = () => {
    const [allGames, setAllGames] = useState(null);

    async function getAllGames() {
        try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error("Errore durante il recupero della lista dei giochi");
            const data = await res.json();
            setAllGames(data);
        } catch (e) {
            console.error(`Errore: `, e)
        }
    };

    useEffect(() => {
        getAllGames();
    }, []);

    async function getGame(id) {
        try {
            const res = await fetch(`${API_URL}/${id}`);
            if (!res.ok) throw new Error("Errore durante il recupero dei dettagli del gioco!!!");
            const data = await res.json();
            if (!data.success) throw new Error(data.message);
            return data.game;
        } catch (e) {
            console.error('Errore: ', e)
        }
    };

    async function getSomeGames(ids) {
        const promises = ids.map(async id => await getGame(id));
        const responses = await Promise.allSettled(promises);

        const fulfilledResponses = [];
        const rejectedResponses = [];

        responses.forEach((res, i) => {
            const gameId = ids[i];
            if (res.status === 'fulfilled') {
                fulfilledResponses.push(res.value);
            } else {
                rejectedResponses.push(gameId);
            };
        });

        if (fulfilledResponses.length > 0) return fulfilledResponses;

        if (rejectedResponses > 0) throw new Error(`Errore nell'eliminazione delle task con id: ${rejectedResponses.join(", ")}`);
    }

    return [allGames, getGame, getSomeGames]
}