import React, {useState} from 'react';

import {useDispatch} from "react-redux"
import {setFilters} from "../redux/filters/actionsFilters"
import {useTypesSelector} from '../hooks/useTypedSelector';
import {MyLi} from "./UI/MiLi/MyLi"

export const PokTypes = ({types}: any) => {
    const dispatch = useDispatch();
    const {filters} = useTypesSelector(state => state.filters)


    return (
        <ul className="typesList">
            {types.map((type: string, i: number) =>
                <MyLi key={i} type={type}/>
            )}
        </ul>)
};

export default PokTypes;
