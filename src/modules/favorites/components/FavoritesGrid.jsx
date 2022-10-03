import { FavContext } from "../../../context";
import { FavoriteItem } from "./FavoriteItem"
import { useContext } from "react";


export const FavoritesGrid = () => {

    const { favorites } = useContext(FavContext);

    return (
        <div className="col-md-2">
            <h3 className="fst-italic">My Palettes</h3>
            {
                favorites.map((favorite) => {
                    return (
                        <FavoriteItem key={favorite.id} favorite={favorite} />
                    )
                })
            }
        </div>
    )
}
