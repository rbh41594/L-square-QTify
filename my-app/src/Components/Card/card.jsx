import React from 'react';
import { Tooltip, Chip } from '@mui/material'

export function Card ({data, type}) {
    const { image, follows, title, slug, songs} = data;

    <Tooltip title={`${songs.length} songs`} placement='top' arrow>
        <a href={`album/${slug}`}>
            <div className='wrapper'>
                <div className='card'>
                    <img src={image} alt="album-image" loading='lazy' />
                    <div className='banner'>
                        <Chip 
                        label={`${follows} Follows`}
                        size='small'
                        className='chip'
                        />
                    </div>
                </div>
                <div className='title'>
                    <p>{title}</p>
                </div>
            </div>
        </a>
    </Tooltip>

}