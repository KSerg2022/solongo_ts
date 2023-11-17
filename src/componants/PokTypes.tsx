import React from 'react';



export const PokTypes = ({types}: any) => {
    return (
        <ul className="typesList">
            {types.map((type: string) =>
                <li key={type}>
                    <span className="listItem">{type}</span>
                </li>
            )}
        </ul>)
};

export default PokTypes;
