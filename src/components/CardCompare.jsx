import { useState, useEffect } from "react";

const CardCompare = ({ game }) => {

    if (!game) return <>Caricamento...</>;

    return (
        <div>
            <h2>{game.title}</h2>
            <p>{game.description}</p>
        </div>
    )
}

export default CardCompare
