import { createContext, useState } from "react";

export const FavContext = createContext({
    favorites: [],
    setfavorites: () => { }
});

export const FavProvider = ({ children }) => {
    const [favorites, setfavorites] = useState([]);

    return (
        <FavContext.Provider value={{ favorites, setfavorites }}>
            {children}
        </FavContext.Provider>
    );
}