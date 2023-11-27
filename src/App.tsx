import React, {useEffect} from 'react';
import axios from "axios";

import './css/main.css'
import Header from "./componants/Header";
import Pokemons from "./componants/Pokemons";
import {IPokemons} from "./model";
import {addPokemons, fetchPokemons, fetchPokemonsError, setPokemons} from "./redux/pokemons/actionsPokemons"
import {useTypesSelector} from './hooks/useTypedSelector';
import {useAppDispatch} from './hooks/useAppDispatch';

const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

export const App = () => {
    const dispatch = useAppDispatch()
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