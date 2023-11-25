import React, {useEffect} from 'react';
import {useDispatch} from "react-redux"
import axios from "axios";

import './css/main.css'
import Header from "./componants/Header";
import Pokemons from "./componants/Pokemons";
import {IPokemons} from "./model";
import {addPokemons, setPokemons, fetchPokemons, fetchPokemonsError} from "./redux/pokemons/actionsPokemons"
import {useTypesSelector} from './hooks/useTypedSelector';

const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

export const App = () => {
    const dispatch = useDispatch();
    const {pokemons, qty, isLoading, error} = useTypesSelector(state => state.pokemons)

    useEffect(() => {
        dispatch(fetchPokemons(true))
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
                }).catch(() => {
                        dispatch(fetchPokemonsError('Произошла ошибка!!!!'));
                    }
                )
            }
        }
        dispatch(fetchPokemons(false))
    }, [qty])

    if (isLoading) {
        return (
            <div className="filters">
                <h2>Loading....</h2>
            </div>)
    }
    if (error) {
        return (
            <div className="filters">
                <h2>{error}</h2>
            </div>)
    }

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