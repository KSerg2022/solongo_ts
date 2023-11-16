import React, {useEffect, useState} from "react";

import Pokemon from "./Pokemon";
import Filters from "./Filters";
import {IPokemons} from "../model";

interface PokemonsProps {
    pokemons: IPokemons[]
    limit: number
}

export const Pokemons = ({pokemons, limit}: PokemonsProps) => {
    const [baseData, setBaseData] = useState<IPokemons[]>([])
    const [currentData, setCurrentData] = useState<IPokemons[]>([])

    useEffect(() => {
        setBaseData(pokemons)
        setCurrentData(pokemons)
    }, [pokemons])

    function filteredPokemons(filter: string[]) {
        filter.length === 0
            ? setCurrentData(pokemons)
            : setCurrentData([...baseData].filter((pokemon) => everyType(pokemon.types, filter)))
    }

    function everyType(types: string | any[], filter: any[]) {
        return filter.every((e: any) => types.includes(e))
    }

    if (baseData.length > 0)
        return (
            <div>
                <Filters pokemons={baseData} onFilter={filteredPokemons}/>
                <div className="container-fluid">
                    <Pokemon limit={limit} pokemons={currentData}/>
                </div>
            </div>
        )
    else
        return (<div className="filters">
            <h5>There are no Pokemon.</h5>
        </div>)
}

export default Pokemons
