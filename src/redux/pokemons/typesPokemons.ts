import {IPokemons} from "../../model";

import {pokemonsActions} from "./actionsPokemons"

export interface initPokemonsState {
    pokemons: IPokemons[],
    qty: number,
    limit: number,
    currentData: IPokemons[],
    isLoading: boolean,
    error: null | string,

    cardsPokemon: IPokemons[],
    start: number,
    end: number,

    page: number,
    totalPages: number,
}

interface fetchPokemonsAction {
    type: pokemonsActions.FETCH_POKEMONS
    payload: boolean
}
interface fetchPokemonsErrorAction {
    type: pokemonsActions.FETCH_POKEMONS_ERROR
    payload: string
}

interface addPokemonsAction {
    type: pokemonsActions.ADD_POKEMONS
    payload: IPokemons
}
interface setPokemonsAction {
    type: pokemonsActions.SET_POKEMONS
    payload : IPokemons[]
}
interface setQtyAction {
    type: pokemonsActions.SET_QTY
    payload : number
}
interface setLimitAction {
    type: pokemonsActions.SET_LIMIT
    payload : number
}
interface setCurrentDataAction {
    type: pokemonsActions.SET_CURRENT_DATA
    payload : IPokemons[]
}

interface addCardsPokemonAction {
    type: pokemonsActions.ADD_CARDS_POKEMON
    payload : IPokemons[]
}
interface setStartAction {
    type: pokemonsActions.SET_START
    payload : number
}
interface setEndAction {
    type: pokemonsActions.SET_END
    payload : number
}

interface setPageAction {
    type: pokemonsActions.SET_PAGE
    payload : number
}
interface setTotalPageAction {
    type: pokemonsActions.SET_TOTAL_PAGES
    payload : number
}

export type typesPokemonsActions =
    fetchPokemonsAction |
    fetchPokemonsErrorAction |
    addPokemonsAction |
    setPokemonsAction |
    setQtyAction |
    setLimitAction |
    setCurrentDataAction |
    addCardsPokemonAction |
    setStartAction |
    setEndAction |
    setPageAction |
    setTotalPageAction
