import React from 'react';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {useTypesSelector} from '../../../hooks/useTypedSelector';
import {setPage,} from "../../../redux/pokemons/actionsPokemons"

const getPagesArray = (totalPages: number) => {
        let result = []
        for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }
        return result;
}

export const Pagination = () => {
    const dispatch = useAppDispatch();
    const {page, totalPages} = useTypesSelector(state => state.pokemons.pagination)

    let pagesArray = getPagesArray(totalPages)

    return (
        <div className="page__wrapper">
                <span
                    style={{marginRight: '10px', fontSize: 30, cursor: 'pointer'}}
                    // onClick={() => setPage(1)}
                    onClick={() => dispatch(setPage(1))}
                >&#8676;</span>
            {pagesArray.map(p =>
                <span
                    // onClick={() => setPage(p)}
                    onClick={() => dispatch(setPage(p))}
                    key={p}
                    className={page === p ? "page page__current" : "page"}>
                        {p}
                    </span>
            )}
                    <span
                        style={{marginLeft: '10px', fontSize: 30, cursor: 'pointer'}}
                        // onClick={() => setPage(pagesArray[pagesArray.length - 1])}
                        onClick={() => dispatch(setPage(pagesArray[pagesArray.length - 1]))}
                    >&#8677;</span>
        </div>
    );
};
