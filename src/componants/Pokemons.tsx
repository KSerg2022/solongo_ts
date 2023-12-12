import React, {useEffect} from "react";

import Pokemon from "./Pokemon";
import Filters from "./Filters";
import {IPokemons} from "../model";
import {Pagination} from "./UI/MyPagination/Pagination";

import {useDispatch} from "react-redux"
import {allActions, setCurrentData, setPage, setTotalPages} from "../redux/actions"
import {useTypesSelector} from "../hooks/useTypedSelector";
import { useStateContext } from "../redux/store";


// @ts-ignore
export const Pokemons: React.FC = () => {
    // const dispatch = useDispatch();
    // const {pokemons, currentData, totalPages, limit, isLoading, error} =
    //     useTypesSelector(state => state.pokemons)
        const {
        dispatch,
        state: {pokemons, currentData, totalPages, limit, isLoading, error},
    } = useStateContext();



    useEffect(() => {
        const qtyPages = Math.ceil(currentData.length / limit)
        // dispatch(setTotalPages(qtyPages))
        dispatch({type: allActions.SET_TOTAL_PAGES, payload: qtyPages})
        // dispatch(setPage(1))
        dispatch({type: allActions.SET_PAGE, payload: 1})
    }, [limit, currentData])


    function filteredPokemons(filter: string[]) {
        filter.length === 0
            ?
            // dispatch(setCurrentData(sortedPokemons(pokemons)))
            dispatch({type: allActions.SET_CURRENT_DATA, payload: pokemons})
            :
            // dispatch(setCurrentData([...sortedPokemons(pokemons)].filter((pokemon: IPokemons) => everyType(pokemon.types, filter))));
            dispatch({type: allActions.SET_CURRENT_DATA,
                payload: [...sortedPokemons(pokemons)].filter((pokemon: IPokemons) => everyType(pokemon.types, filter))})
    }

    function everyType(types: string | any[], filter: any[]) {
        return filter.every((e: any) => types.includes(e))
    }

    const sortedPokemons = (pokemons: IPokemons[]): IPokemons[] => {
        return pokemons.sort(function (a: IPokemons, b: IPokemons) {
            // @ts-ignore
            return a.id - b.id
        })
    }

    if (pokemons.length > 0)
        return (
            <div>
                <Filters
                    onFilter={filteredPokemons}/>

                {totalPages && <Pagination/>}
                <div className="container-fluid">
                    <Pokemon/>
                </div>
                {totalPages && <Pagination/>}

            </div>
        )
    else
        return (<div className="filters">
            <h5>There are no Pokemon.</h5>
        </div>)
}

export default Pokemons
