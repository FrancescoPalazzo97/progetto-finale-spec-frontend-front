import { createContext } from "react";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {

    const value = {};

    return (
        <MoviesContext.Provider value={value}>
            {children}
        </MoviesContext.Provider>
    );
}
