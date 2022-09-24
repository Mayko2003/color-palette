import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { FavContext } from '../../../context/FavContext';
import { Link } from 'react-router-dom';

export const PaletteCard = ({ pallete }) => {

    const { id, name, colors, liked } = pallete;
    const { favourites, setFavourites } = useContext(FavContext);
    const [isFavourite, setIsFavourite] = useState(liked);

    const handleFavourite = () => {
        setIsFavourite((isFavourite) => !isFavourite);
        const index = favourites.findIndex((fav) => fav.id === pallete.id);
        if (index !== -1) {
            setFavourites((favourites) => favourites.filter((fav) => fav.id !== pallete.id));
        } else {
            setFavourites([...favourites, pallete]);
        }
    }

    return (
        <div className="card mx-auto mb-3 shadow-lg rounded" style={{ width: "18em" }}>
            <div>
                {
                    colors.map((color) => {
                        return (
                            <div key={color} style={{ background: color }} className='p-3'>
                                <span>{color}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className='d-flex'>
                    <div className='me-auto my-auto'>
                        {isFavourite ?
                            <FaHeart className="text-danger" onClick={handleFavourite} style={{ width: '2em', height: '2em' }} /> :
                            <FaRegHeart className="text-dark" onClick={handleFavourite} style={{ width: '2em', height: '2em' }} />
                        }
                    </div>
                    <Link className='btn btn-outline-dark mt-1' to={`/palette/${id}`}>
                        Show More
                    </Link>

                </div>

            </div>
        </div>
    )
}
