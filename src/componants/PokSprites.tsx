import React from 'react';

interface PokSpritesProps {
    sprites: string
}

export const PokSprites = ({sprites}: PokSpritesProps) => {
    return (
        <div className="img-pokemon">
            <img src={sprites} alt="avatar" width="150" height="auto"/>
        </div>

    );
};

export default PokSprites;
