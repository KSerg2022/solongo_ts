import {useEffect} from 'react';
import axios from "axios";
import {IPokemons} from "../model";

import {useDispatch, useSelector} from "react-redux"
import {getPokemons, getQty} from "../redux/selectors"
import {addPokemons} from "../redux/actions"

const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

export const usePokemons = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(getPokemons)
    const qty = useSelector(getQty)


    useEffect(() => {
        dispatch(addPokemons([]))
        let start: number = 1
        for (; start <= qty; start++) {
            axios.get(baseUrl.concat(String(start))).then((res) => {
                let data: IPokemons = {
                    id: res.data.id,
                    name: res.data.name,
                    img_url: res.data.sprites.other.home.front_default,
                    types: res.data.types.map((e: { type: { name: string; }; }) => e.type.name)
                }
                dispatch(addPokemons(data))

            })
        }
    }, [qty])

    return {pokemons, qty}
}

