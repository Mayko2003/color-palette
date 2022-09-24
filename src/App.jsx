import { useEffect, useState } from "react";

import { getColorsPalettes } from "./api";

import './App.css'
import { ColorPalettesContext } from "./context";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/home/Home";
import { PaletteDisplay } from "./routes/palette/PaletteDisplay";


export const App = () => {


    const [colorPalettes, setColorPalettes] = useState([]);


    useEffect(() => {

        getColorsPalettes().then((palettes) => {
            setColorPalettes(palettes)

        }).catch((err) => console.log(err));


        return () => {

        }
    }, [])


    return (
        <>
            <ColorPalettesContext.Provider value={{ colorPalettes, setColorPalettes }}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/palette/:id' element={<PaletteDisplay />} />
                </Routes>
            </ColorPalettesContext.Provider>
        </>
    );
}
