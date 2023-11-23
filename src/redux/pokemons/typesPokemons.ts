import {IPokemons} from "../../model";

import {allActions} from "./actionsPokemons"

export interface initState {
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

    types: string[],
    filters: {},
}

interface fetchPokemonsAction {
    type: allActions.FETCH_POKEMONS
    payload: boolean
}
interface fetchPokemonsErrorAction {
    type: allActions.FETCH_POKEMONS_ERROR
    payload: string
}

interface addPokemonsAction {
    type: allActions.ADD_POKEMONS
    payload: IPokemons
}
interface setPokemonsAction {
    type: allActions.SET_POKEMONS
    payload : IPokemons[]
}
interface setQtyAction {
    type: allActions.SET_QTY
    payload : number
}
interface setLimitAction {
    type: allActions.SET_LIMIT
    payload : number
}
interface setCurrentDataAction {
    type: allActions.SET_CURRENT_DATA
    payload : IPokemons[]
}

interface addCardsPokemonAction {
    type: allActions.ADD_CARDS_POKEMON
    payload : IPokemons[]
}
interface setStartAction {
    type: allActions.SET_START
    payload : number
}
interface setEndAction {
    type: allActions.SET_END
    payload : number
}

interface setPageAction {
    type: allActions.SET_PAGE
    payload : number
}
interface setTotalPageAction {
    type: allActions.SET_TOTAL_PAGES
    payload : number
}

interface setTypesAction {
    type: allActions.SET_TYPES
    payload : string[]
}
interface setFiltersAction {
    type: allActions.SET_FILTERS
    payload : {}
}

export type allTypesActions =
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
    setTotalPageAction |
    setTypesAction |
    setFiltersAction
