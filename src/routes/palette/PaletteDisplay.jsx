import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'


import { ColorPalettesContext } from '../../context';

export const PaletteDisplay = () => {

    const { id } = useParams();
    const { colorPalettes } = useContext(ColorPalettesContext);


    const [palette] = colorPalettes.filter(
        (palette) => palette.id === Number(id)
    );


    return (
        <div className='d-flex justify-content-center my-5'>
            <div className='card shadow-lg border-circle w-25 p-3'>
                <div>
                    {
                        palette.colors.map((color) => {
                            return (
                                <div key={color} style={{ background: color }} className='p-3'>
                                    <span>{color}</span>
                                </div>
                            );
                        })
                    }
                </div>
                <div className='card-body'>
                    <h3 className='card-title'>{palette.name}</h3>
                    <span className='card-subtitle text-secondary'>{palette.id}</span>
                    <br />
                    {/* <span className='badge bg-secondary'>{palette.tags.join(' - ')}</span> */}
                    {
                        palette.tags.map((tag) => {
                            return (
                                <span className='badge bg-secondary me-1'>{tag}</span>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}
