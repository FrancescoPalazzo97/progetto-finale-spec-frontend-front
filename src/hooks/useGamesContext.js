import { useContext } from "react";
import { GamesContext } from "../contexts/products/GamesContext";

export const useGamesContext = () => useContext(GamesContext);