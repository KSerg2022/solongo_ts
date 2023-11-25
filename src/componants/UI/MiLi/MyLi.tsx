import React, {useState} from 'react';

import {useDispatch} from "react-redux"
import {setFilters} from "../../../redux/filters/actionsFilters"
import {useTypesSelector} from '../../../hooks/useTypedSelector';

interface MyLiProps {
    type: string
}

export const MyLi = ({type}: MyLiProps) => {
    const dispatch = useDispatch();
    const {filters} = useTypesSelector(state => state.filters)
    const [style, setStyle] = useState('')

    const overStyle = () => {
        setStyle(prev => "listLi-over")
    }
    const leaveStyle = () => {
        setStyle(prev => "")
    }

    return (
        <li
            style={{cursor: 'pointer'}}
            onClick={() => dispatch(setFilters({...filters, [type]: !filters[type]}))}
            className={style}
        >
                    <span
                        className={filters[type] ? "listItem-active" : "listItem"}
                        onMouseOver={overStyle}
                        onMouseLeave={leaveStyle}
                    >{type}</span>
        </li>
    );
};

export default MyLi;