import { createContext } from "react";

export const FavContext = createContext({
    favorites: [],
    setfavorites: () => { }
});