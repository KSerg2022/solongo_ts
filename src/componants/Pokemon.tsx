import React, {useEffect} from 'react';

import CardPokemon from "./CardPokemon";

import {useDispatch, useSelector} from "react-redux"
import {getCardsPokemon, getCurrentData, getEnd, getLimit, getPage, getStart} from "../redux/selectors"
import {addCardsPokemon, setEnd, setStart} from "../redux/actions"


export const Pokemon = () => {
    const dispatch = useDispatch();

    const currentData = useSelector(getCurrentData)
    const cardsPokemon = useSelector(getCardsPokemon)
    const limit = useSelector(getLimit)
    const page = useSelector(getPage)
    const start = useSelector(getStart)
    const end = useSelector(getEnd)


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
