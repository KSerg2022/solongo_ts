import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"

import './css/main.css'
import Header from "./componants/Header";
import Pokemons from "./componants/Pokemons";
import {IPokemons} from "./model";
import {getPokemons, getQty} from "./redux/selectors"
import {addPokemons, setPokemons} from "./redux/actions"
import axios from "axios";
import { useTypesSelector } from './hooks/useTypedSelector';

const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

export const App = () => {
    const dispatch = useDispatch();
    const {pokemons, qty} = useTypesSelector(state => state.pokemons)

    // const pokemons = useSelector(getPokemons)
    // const qty = useSelector(getQty)

    useEffect(() => {
        if (pokemons.length > qty) {
            dispatch(setPokemons([...pokemons].slice(0, qty)))
        } else {
            let start: number = pokemons.length + 1
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
        }
    }, [qty])

    return (
        <div>
            <Header title="Pokemon's list - "/>
            <main>
                <Pokemons/>
            </main>
        </div>
    );
};

export default App;