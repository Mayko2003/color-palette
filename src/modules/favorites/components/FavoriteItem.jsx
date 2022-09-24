import React from 'react'

export const FavoriteItem = ({ favorite }) => {

    const { name, colors } = favorite;
    return (
        <div className='card mb-2 shadow-lg rounded'>

            <div className='card-body'>
                <span>{name}</span>
                <div className='d-flex'>
                    {
                        colors.map((color) => {
                            return (
                                <div key={color} style={{ background: color, width: '2em', height: '2em' }} className='rounded-circle'>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
