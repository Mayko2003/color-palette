import { useContext, useEffect } from "react";

import { getColorsPalettes } from "./api";

import './App.css'
import { ColorPalettesContext } from "./context";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/home/Home";
import { PaletteDisplay } from "./routes/palette/PaletteDisplay";
import { Login } from "./routes/login/Login";
import { PaletteCreate } from "./routes/palette/PaletteCreate";



export const App = () => {


    const { setColorPalettes } = useContext(ColorPalettesContext)


    useEffect(() => {

        getColorsPalettes().then((palettes) => {
            setColorPalettes(palettes)

        }).catch((err) => console.log(err));


        return () => {

        }
    }, [setColorPalettes])


    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/palette/:id' element={<PaletteDisplay />} />
                <Route path="/login" element={<Login />} />
                <Route path='/palette/create' element={<PaletteCreate />} />
            </Routes>
        </>
    );
}
