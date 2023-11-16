import React, {useEffect, useState} from 'react';

import CardPokemon from "./CardPokemon";
import {IPokemons} from "../model";

interface PokemonProps {
    pokemons: IPokemons[]
        limit: number
}

export const Pokemon = ({pokemons, limit}: PokemonProps) => {
    const [cardsPokemon, setCardsPokemon] = useState<IPokemons[]>([])

    useEffect(() => {
        return setCardsPokemon(pokemons);
    }, [pokemons])

    return (
        <div className="row d-flex justify-content-center mb-3">
            {cardsPokemon?.slice(0, limit).map(pokemon =>
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
