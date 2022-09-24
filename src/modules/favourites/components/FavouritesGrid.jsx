import { FavouriteItem } from "./FavouriteItem"

export const FavouritesGrid = ({ favourites }) => {
    return (
        <div className="col-md-2">
            <h3 className="fst-italic">My Palettes</h3>
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
