import { FavoriteItem } from "./FavoriteItem"

export const FavoritesGrid = ({ favorites }) => {
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
