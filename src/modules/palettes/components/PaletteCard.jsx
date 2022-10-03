import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useContext, useState, useEffect } from 'react';
import { FavContext } from '../../../context/FavContext';
import { Link } from 'react-router-dom';
import { getLuma } from '../helpers/getLuma';
import { enableHash, copyToClipboard, handleOnMouseLeave } from '../../../helpers'

export const PaletteCard = ({ palette }) => {

    const { id, name, colors, liked } = palette;
    const { favorites, setfavorites } = useContext(FavContext);
    const [isfavorite, setIsfavorite] = useState(liked);

    let colorHeight = 6

    const handlefavorite = () => {
        setIsfavorite((isfavorite) => !isfavorite);
        const index = favorites.findIndex((fav) => fav.id === palette.id);
        if (index !== -1) {
            setfavorites((favorites) => favorites.filter((fav) => fav.id !== palette.id));
        } else {
            setfavorites([...favorites, palette]);
        }
    }


    useEffect(() => {
        const elements = document.querySelectorAll('.color');
        // eslint-disable-next-line no-undef
        elements.forEach((element) => new bootstrap.Tooltip(element, {
            placement: 'auto'
        }));
    }, [])

    return (
        <div className="rounded-3 card mx-auto mb-3 shadow-lg px-0" style={{ width: "18em" }}>

            <div>

                {
                    colors.map((color) => {
                        const luma = getLuma(color)
                        colorHeight--
                        return (
                            <div
                                data-bs-toggle="tooltip"
                                title="Copy to clipboard"
                                key={color}
                                style={{ background: color, height: `${colorHeight}.5em` }}
                                className='color d-flex justify-content-center pb-0'
                                onClick={({ target }) => copyToClipboard(target, color)}
                                onMouseOver={({ target }) => enableHash(target)}
                                onMouseLeave={({ target }) => handleOnMouseLeave(target)}
                            >
                                <span className={`my-auto d-none ${luma <= 128 ? 'text-light' : 'text-dark'}`}>{color}</span>
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
