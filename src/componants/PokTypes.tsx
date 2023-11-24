import React from 'react';

import {useDispatch} from "react-redux"
import {setFilters} from "../redux/filters/actionsFilters"
import {useTypesSelector} from '../hooks/useTypedSelector';

export const PokTypes = ({types}: any) => {
        const dispatch = useDispatch();
        const {filters} = useTypesSelector(state => state.filters)


    return (
        <ul className="typesList">
            {types.map((type: string) =>
                <li key={type}
                    style={{cursor: 'pointer'}}
                    onClick={() => dispatch(setFilters({...filters, [type]: !filters[type]}))}                >
                    <span className="listItem">{type}</span>
                </li>
            )}
        </ul>)
};

export default PokTypes;
