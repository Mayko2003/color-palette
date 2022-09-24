import { createContext } from "react";

export const ColorPalettesContext = createContext({
    colorPalettes: [],
    setColorPalettes: () => { },
});