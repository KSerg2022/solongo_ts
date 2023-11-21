import React, {useEffect, useState} from "react";

import Pokemon from "./Pokemon";
import Filters from "./Filters";
import {IPokemons} from "../model";
import {Pagination} from "./UI/MyPagination/Pagination";
import {usePagination} from "../hooks/pagination"

import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import {getPokemons, getQty, getCurrentData, getLimit, getTotalPages} from "../redux/selectors"
import {setCurrentData, setTotalPages} from "../redux/actions"


export const Pokemons = () => {
    const dispatch = useDispatch();

    const pokemons = useSelector(getPokemons)
    const currentData = useSelector(getCurrentData)
    const totalPages = useSelector(getTotalPages)
    const limit = useSelector(getLimit)


    useEffect(() => {
        dispatch(setTotalPages(Math.ceil(currentData.length / limit)))
    }, [currentData])

    useEffect(() => {
        const qtyPages = Math.ceil(currentData.length / limit)
        dispatch(setTotalPages(qtyPages))
    }, [limit])


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
                    pokemons={pokemons}
                    onFilter={filteredPokemons}/>

                {totalPages && <Pagination />}
                <div className="container-fluid">
                    <Pokemon />
                </div>
                {totalPages && <Pagination  />}

            </div>
        )
    else
        return (<div className="filters">
            <h5>There are no Pokemon.</h5>
        </div>)
}

export default Pokemons
