import React, {useEffect} from 'react';

import CardPokemon from "./CardPokemon";

import {useDispatch} from "react-redux"
import {addCardsPokemon, allActions, setEnd, setStart} from "../redux/actions"
import {useTypesSelector} from '../hooks/useTypedSelector';
import { useStateContext } from '../redux/store';


export const Pokemon = () => {
    // const dispatch = useDispatch();
    // const {currentData, cardsPokemon, limit, page, start, end} =
    //     useTypesSelector(state => state.pokemons)

    const {
        dispatch,
        state: {currentData, cardsPokemon, limit, page, start, end},
    } = useStateContext();

    useEffect(() => {
        const start = (page - 1) * limit
        // dispatch(setStart(start))
        dispatch({type: allActions.SET_START, payload: start})
        // dispatch(setEnd(start + limit))
        dispatch({type: allActions.SET_END, payload: start + limit})
    }, [limit, page])


    useEffect(() => {
        // dispatch(addCardsPokemon(currentData))
        dispatch({type: allActions.ADD_CARDS_POKEMON, payload: currentData})
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
