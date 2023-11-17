import React, {useEffect, useState} from 'react';

import CardPokemon from "./CardPokemon";
import {IPokemons} from "../model";

interface PokemonProps {
    pokemons: IPokemons[]
    limit: number
    page: number
}

export const Pokemon = ({pokemons, limit, page}: PokemonProps) => {
    const [cardsPokemon, setCardsPokemon] = useState<IPokemons[]>([])
    const [start, setStart] = useState<number>(1)
    const [end, setEnd] = useState<number>(1)

    useEffect(() => {
        const start = (page - 1) * limit
        setStart(start);
        setEnd(start + limit)
    }, [limit, page])

    useEffect(() => {
        setCardsPokemon(pokemons);
    }, [pokemons])

    return (
        <div className="row d-flex justify-content-center mb-3">
            {cardsPokemon?.slice(start, end).map(pokemon =>
                <CardPokemon
                    key={pokemon.id}
                    sprites={pokemon.img_url}
                    id={pokemon.id}
                    name={pokemon.name}
                    types={pokemon.types}
                />
            )
            }
        </div>
    )
};

export default Pokemon;
