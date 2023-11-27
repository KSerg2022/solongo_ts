import React, {useEffect} from "react";

import Pokemon from "./Pokemon";
import Filters from "./Filters";
import {IPokemons} from "../model";
import {Pagination} from "./UI/MyPagination/Pagination";
import {setCurrentData, setPage, setTotalPages} from "../redux/pokemons/actionsPokemons"
import {useTypesSelector} from "../hooks/useTypedSelector";
import {useAppDispatch} from "../hooks/useAppDispatch";


export const Pokemons: React.FC = () => {
    const dispatch = useAppDispatch();
    const {pokemons, currentData, totalPages, limit} =
        useTypesSelector(state => state.pokemons)

    useEffect(() => {
        const qtyPages = Math.ceil(currentData.length / limit)
        dispatch(setTotalPages(qtyPages))
        dispatch(setPage(1))
    }, [limit, currentData])


    function filteredPokemons(filter: string[]) {
        filter.length === 0
            ?
            dispatch(setCurrentData(sortedPokemons(pokemons)))
            :
            dispatch(setCurrentData([...sortedPokemons(pokemons)].filter((pokemon: IPokemons) => everyType(pokemon.types, filter))));
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
