import React, {useEffect} from 'react';
import axios from "axios";

import './css/main.css'
import Header from "./componants/Header";
import Pokemons from "./componants/Pokemons";
import {IPokemons} from "./model";
import {allActions} from "./redux/actions"
import {useStateContext} from './redux/store';

const baseUrl = "https://pokeapi.co/api/v2/pokemon/"


export const App = () => {
    const {
        dispatch,
        state: {pokemons, qty, isLoading, error},
    } = useStateContext();


    useEffect(() => {
        dispatch({type: allActions.FETCH_POKEMONS, payload: true})
        if (pokemons.length > qty) {
            dispatch({type: allActions.SET_POKEMONS, payload: [...pokemons].slice(0, qty)})
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
                    dispatch({type: allActions.ADD_POKEMONS, payload: data})
                }).catch(() => {
                        dispatch({
                            type: allActions.FETCH_POKEMONS_ERROR,
                            payload: 'Произошла ошибка!!!!'
                        });
                    }
                )
            }
        }
        dispatch({type: allActions.FETCH_POKEMONS, payload: false})
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