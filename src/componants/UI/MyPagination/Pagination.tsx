import React from 'react';
import {allActions,} from "../../../redux/actions"
import {useStateContext} from '../../../redux/store';

const getPagesArray = (totalPages: number) => {
    let result = []
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }
    return result;
}

export const Pagination = () => {
    const {
        dispatch,
        state: {page, totalPages},
    } = useStateContext();

    let pagesArray = getPagesArray(totalPages)

    return (
        <div className="page__wrapper">
                <span
                    style={{marginRight: '10px', fontSize: 30, cursor: 'pointer'}}
                    onClick={() => dispatch({type: allActions.SET_PAGE, payload: 1})}
                >&#8676;</span>
            {pagesArray.map(p =>
                <span
                    onClick={() => dispatch({type: allActions.SET_PAGE, payload: p})}
                    key={p}
                    className={page === p ? "page page__current" : "page"}>
                        {p}
                    </span>
            )}
            <span
                style={{marginLeft: '10px', fontSize: 30, cursor: 'pointer'}}
                onClick={() => dispatch({
                    type: allActions.SET_PAGE,
                    payload: pagesArray[pagesArray.length - 1]
                })}
            >&#8677;</span>
        </div>
    );
};
