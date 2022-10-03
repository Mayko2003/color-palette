import { PalettesGrid } from "../../modules/palettes";
import { TagsGrid } from "../../modules/tags";
import { FavoritesGrid } from "../../modules/favorites";
import { useContext } from "react";

//import { getColorsPalettes, getTags } from "../../api";

import { FavContext, FilterContext, ColorPalettesContext } from "../../context";
import { SearchBar } from "../../modules/layouts/components/SearchBar";


export const Home = () => {


    const { colorPalettes } = useContext(ColorPalettesContext);

    const { favorites } = useContext(FavContext);

    const { filters } = useContext(FilterContext);

    const filteredColorPalettes = colorPalettes.filter(palette => {


        const matchSearch = palette.name.toLowerCase().includes(filters.searchFields.toLowerCase());

        if (!matchSearch) return false;

        if (filters.tagFilters.length === 0) {
            return true;
        }

        const paletteTags = palette.tags.filter(tag => filters.tagFilters.includes(tag))

        return paletteTags.length === filters.tagFilters.length
    })

    const colorPaletteWithLikes = filteredColorPalettes.map(palette => {
        const foundIndex = favorites.findIndex(fav => fav.id === palette.id);

        if (foundIndex === -1) {
            return palette
        }

        return { ...palette, liked: true }
    })


    return (
        <>
            <div className="mt-5">
                <SearchBar />
            </div>
            <div className="row mb-5 mt-3 mx-1">
                <TagsGrid />
                <PalettesGrid palettes={colorPaletteWithLikes}/>
                <FavoritesGrid />
            </div>
        </>
    );
}
