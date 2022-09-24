import { PalettesGrid } from "../../modules/palettes";
import { TagsGrid } from "../../modules/tags";
import { FavouritesGrid } from "../../modules/favourites";
import { useEffect, useState, useContext } from "react";

import { getColorsPalettes, getTags } from "../../api";

import { FavContext, FilterContext, ColorPalettesContext } from "../../context";
import { SearchBar } from "../../modules/layouts/components/SearchBar";


export const Home = () => {


    const { colorPalettes, setColorPalettes } = useContext(ColorPalettesContext);
    const [tags, setTags] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [filters, setFilters] = useState({
        searchField: '',
        tagFilter: []
    })



    useEffect(() => {

        getColorsPalettes().then((palettes) => {
            setColorPalettes(palettes)
            setFavourites((palettes) => palettes.filter((palette) => palette.liked))

        }).catch((err) => console.log(err));

        getTags().then((tags) => setTags(tags)).catch((err) => console.log(err));


        return () => {

        }
    }, [setColorPalettes])

    const filteredColorPalettes = colorPalettes.filter(palette => {

        const matchSearch = palette.name.toLowerCase().includes(filters.searchField.toLowerCase());

        if (!matchSearch) return false;

        if (filters.tagFilter.length === 0) {
            return true;
        }

        const paletteTags = palette.tags.filter(tag => filters.tagFilter.includes(tag))

        return paletteTags.length === filters.tagFilter.length
    })

    const colorPaletteWithLikes = filteredColorPalettes.map(palette => {
        const foundIndex = favourites.findIndex(fav => fav.id === palette.id);

        if (foundIndex === -1) {
            return palette
        }

        return { ...palette, liked: true }
    })



    return (
        <>
            <FavContext.Provider value={{ favourites, setFavourites }}>
                <FilterContext.Provider value={{ filters, setFilters }}>
                    <div className="mt-5">
                        <SearchBar />
                    </div>
                    <div className="row mb-5 mt-3 mx-1">
                        <TagsGrid tags={tags} />
                        <PalettesGrid palettes={colorPaletteWithLikes} />
                        <FavouritesGrid favourites={favourites} />
                    </div>
                </FilterContext.Provider>
            </FavContext.Provider>
        </>
    );
}
