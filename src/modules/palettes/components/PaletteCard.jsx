import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { FavContext } from '../../../context/FavContext';
import { Link } from 'react-router-dom';

export const PaletteCard = ({ pallete }) => {

    const { id, name, colors, liked } = pallete;
    const { favorites, setfavorites } = useContext(FavContext);
    const [isfavorite, setIsfavorite] = useState(liked);

    const handlefavorite = () => {
        setIsfavorite((isfavorite) => !isfavorite);
        const index = favorites.findIndex((fav) => fav.id === pallete.id);
        if (index !== -1) {
            setfavorites((favorites) => favorites.filter((fav) => fav.id !== pallete.id));
        } else {
            setfavorites([...favorites, pallete]);
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
                        {isfavorite ?
                            <FaHeart className="text-danger" onClick={handlefavorite} style={{ width: '2em', height: '2em' }} /> :
                            <FaRegHeart className="text-dark" onClick={handlefavorite} style={{ width: '2em', height: '2em' }} />
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
