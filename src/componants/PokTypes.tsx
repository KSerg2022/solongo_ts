import React from 'react';
import {MyLi} from "./UI/MiLi/MyLi"

export const PokTypes = ({types}: any) => {

    return (
        <ul className="typesList">
            {types.map((type: string, i: number) =>
                <MyLi key={i} type={type}/>
            )}
        </ul>)
};

export default PokTypes;
