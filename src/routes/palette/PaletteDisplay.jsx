import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { getColorsPalettes } from '../../api';
import { enableHash, copyToClipboard, handleOnMouseLeave } from '../../helpers'
import { ColorPalettesContext } from '../../context';
import { getLuma } from '../../modules/palettes/helpers/getLuma';

export const PaletteDisplay = () => {

    const { id } = useParams();
    const { colorPalettes, setColorPalettes } = useContext(ColorPalettesContext);

    let colorHeight = 6

    const [palette] = colorPalettes.filter(
        (palette) => palette.id === Number(id)
    );

    useEffect(() => {
        if (!palette) {
            getColorsPalettes().then((palettes) => {
                setColorPalettes(palettes);
            }).catch((err) => console.log(err));
        }
        else{
            
            const elements = document.querySelectorAll('.color');
            // eslint-disable-next-line no-undef
            elements.forEach((element) =>  bootstrap.Tooltip.getOrCreateInstance(element));

        }
        //console.log('useeff')
        return ()=>{}
    }, [setColorPalettes, palette]);


    return (
        <>
            {
                palette ?
                    (
                        <div className='d-flex justify-content-center my-5'>
                            <div className='card shadow-lg border-circle w-25 px-0'>
                                <div>
                                    {
                                        palette.colors.map((color) => {
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
                                <div className='card-body'>
                                    <h3 className='card-title'>{palette.name}</h3>
                                    <span className='card-subtitle text-secondary'>{palette.id}</span>
                                    <br />
                                    {
                                        palette.tags.map((tag) => {
                                            return (
                                                <span key={tag} className='badge bg-secondary me-1'>{tag}</span>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    ) :
                    (
                        <div className="spinner-border mx-auto" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )
            }
        </>

    )
}
