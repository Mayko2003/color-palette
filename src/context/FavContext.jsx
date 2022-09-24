import { createContext } from "react";

export const FavContext = createContext({
    favourites: [],
    setFavourites: () => { }
});