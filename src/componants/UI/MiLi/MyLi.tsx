import React, {useState} from 'react';
import {filtersActions} from "../../../redux/filters/typesFilters"
import {useTypesSelector} from '../../../hooks/useTypedSelector';
import {useAppDispatch} from '../../../hooks/useAppDispatch';

interface MyLiProps {
    type: string
}

export const MyLi = ({type}: MyLiProps) => {
    const dispatch = useAppDispatch();
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
            onClick={() => dispatch({type: filtersActions.SET_FILTERS,
                                    payload: {...filters, [type]: !filters[type]}})}
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