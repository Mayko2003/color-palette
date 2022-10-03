import { createContext, useState } from "react";

export const ColorPalettesContext = createContext({
    colorPalettes: [],
    setColorPalettes: () => { },
});

export const ColorPalettesProvider = ({ children }) => {
    const [colorPalettes, setColorPalettes] = useState([]);

    return (
        <ColorPalettesContext.Provider value={{ colorPalettes, setColorPalettes }}>
            {children}
        </ColorPalettesContext.Provider>
    );
}