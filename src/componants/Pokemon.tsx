import React, {useEffect} from 'react';

import CardPokemon from "./CardPokemon";
import {addCardsPokemon, setEnd, setStart} from "../redux/pokemons/actionsPokemons"
import {useTypesSelector} from '../hooks/useTypedSelector';
import {useAppDispatch} from '../hooks/useAppDispatch';


export const Pokemon = () => {
    const dispatch = useAppDispatch();
    const {currentData, cardsPokemon, limit, page, start, end} =
        useTypesSelector(state => state.pokemons)

    useEffect(() => {
        const start = (page - 1) * limit
        dispatch(setStart(start))
        dispatch(setEnd(start + limit))
    }, [limit, page])


    useEffect(() => {
        dispatch(addCardsPokemon(currentData))
    }, [currentData])

    return (
    // @ts-ignore
        <div className="row d-flex justify-content-center mb-3">
            {/*// @ts-ignore*/}
            {cardsPokemon.slice(start, end).map(pokemon =>
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
