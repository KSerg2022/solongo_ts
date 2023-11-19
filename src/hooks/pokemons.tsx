import {useEffect, useState} from 'react';
import axios from "axios";

import {IPokemons} from "../model";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

export const usePokemons = () => {
    const [pokemons, setPokemons] = useState<IPokemons[]>([])
    const [qty, setQty] = useState<number>(16)

    useEffect(() => {
        setPokemons(prevState => prevState = [])
        let start: number = 1
        for (; start <= qty; start++) {
            axios.get(baseUrl.concat(String(start))).then((res) => {
                let data: IPokemons = {
                    id: res.data.id,
                    name: res.data.name,
                    img_url: res.data.sprites.other.home.front_default,
                    types: res.data.types.map((e: { type: { name: string; }; }) => e.type.name)
                }
                setPokemons(prevState => [...prevState, data])
            })
        }
    }, [qty])

    return {pokemons, qty, setQty}
}

