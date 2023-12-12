import React, {useEffect} from 'react';

import CardPokemon from "./CardPokemon";
import {allActions} from "../redux/actions"
import {useStateContext} from '../redux/store';


export const Pokemon = () => {
    const {
        dispatch,
        state: {currentData, cardsPokemon, limit, page, start, end},
    } = useStateContext();

    useEffect(() => {
        const start = (page - 1) * limit
        dispatch({type: allActions.SET_START, payload: start})
        dispatch({type: allActions.SET_END, payload: start + limit})
    }, [limit, page])


    useEffect(() => {
        dispatch({type: allActions.ADD_CARDS_POKEMON, payload: currentData})
    }, [currentData])

    return (
        <div className="row d-flex justify-content-center mb-3">
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
