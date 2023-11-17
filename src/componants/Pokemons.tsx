import React, {useEffect, useState} from "react";

import Pokemon from "./Pokemon";
import Filters from "./Filters";
import {IPokemons} from "../model";
import {Pagination} from "./UI/MyPagination/Pagination";

interface PokemonsProps {
    pokemons: IPokemons[]
    limit: number
    page: number
    setPage: (number: number) => void
    totalPages: number
    setTotalPages: (number: number) => void
}

export const Pokemons = ({pokemons, limit, page, setPage, totalPages, setTotalPages}: PokemonsProps) => {
    const [baseData, setBaseData] = useState<IPokemons[]>([])
    const [currentData, setCurrentData] = useState<IPokemons[]>([])

    useEffect(() => {
        setBaseData(pokemons)
    }, [pokemons])

    useEffect(() => {
        setTotalPages(Math.ceil(currentData.length / limit))
    }, [currentData])


    useEffect(() => {
        const qtyPages = Math.ceil(currentData.length / limit)
        setTotalPages(qtyPages)
    }, [limit])


    function filteredPokemons(filter: string[]) {
        filter.length === 0
            ?
            setCurrentData(pokemons)
            :
            setCurrentData([...baseData].filter((pokemon: IPokemons) => everyType(pokemon.types, filter)));
    }
    function everyType(types: string | any[], filter: any[]) {
        return filter.every((e: any) => types.includes(e))
    }

    if (baseData.length > 0)
        return (
            <div>
                <Filters
                    pokemons={baseData}
                    onFilter={filteredPokemons}/>

                <Pagination totalPages={totalPages} page={page} setPage={setPage}/>
                <div className="container-fluid">
                    <Pokemon
                        limit={limit}
                        page={page}
                        pokemons={currentData}/>
                </div>

            </div>
        )
    else
        return (<div className="filters">
            <h5>There are no Pokemon.</h5>
        </div>)
}

export default Pokemons
