import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"

import './css/main.css'
import Header from "./componants/Header";
import Pokemons from "./componants/Pokemons";
import {IPokemons} from "./model";
import {getPokemons, getQty} from "./redux/selectors"
import {addPokemons, setNullPokemons} from "./redux/actions"
import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

export const App = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(getPokemons)
    const qty = useSelector(getQty)

    useEffect(() => {
        // dispatch(setNullPokemons([]))
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

    // console.log('pokemons --', pokemons)
    // console.log('qty --', qty)

    return (
        <div>
            <Header title="Pokemon's list - " />
            <main>
                <Pokemons />
            </main>
        </div>
    );
};

export default App;