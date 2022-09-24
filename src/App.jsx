import { PalettesGrid } from "./modules/palettes";
import { TagsGrid } from "./modules/tags";
import { FavouritesGrid } from "./modules/favourites";
import { Header } from "./modules/layouts";
import { useEffect, useState } from "react";

import { getColorsPalettes, getTags } from "./api";

import { FavContext } from "./context/FavContext";

import './App.css'

export const App = () => {


    const [colorPalettes, setColorPalettes] = useState([]);
    const [tags, setTags] = useState([]);
    const [favourites, setFavourites] = useState([]);


    useEffect(() => {

        getColorsPalettes().then((palettes) => {
            setColorPalettes(palettes)
            setFavourites((palettes) => palettes.filter((palette) => palette.liked))

        }).catch((err) => console.log(err));

        getTags().then((tags) => setTags(tags)).catch((err) => console.log(err));


        return () => {

        }
    }, [])


    return (
        <>
            <FavContext.Provider value={{ favourites, setFavourites }}>
                <Header />
                <div className="row my-5 mx-1">
                    <TagsGrid tags={tags} />
                    <PalettesGrid palettes={colorPalettes} />
                    <FavouritesGrid favourites={favourites} />
                </div>
            </FavContext.Provider>
        </>
    );
}
