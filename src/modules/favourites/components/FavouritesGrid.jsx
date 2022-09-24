import { FavouriteItem } from "./FavouriteItem"

export const FavouritesGrid = ({ favourites }) => {
    return (
        <div className="col-2">
            <h3>My Palettes</h3>
            {
                favourites.map((favourite) => {
                    return (
                        <FavouriteItem key={favourite.id} favourite={favourite} />
                    )
                })
            }
        </div>
    )
}
