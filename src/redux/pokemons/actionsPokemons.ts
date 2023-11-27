import {IPokemons} from '../../model'
import { typesPokemonsActions } from './typesPokemons'



export enum pokemonsActions {
    FETCH_POKEMONS = 'FETCH_POKEMONS',
    FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR',
    ADD_POKEMONS = 'ADD_POKEMONS',
    SET_POKEMONS = 'SET_POKEMONS',
    SET_QTY = 'SET_QTY',
    SET_LIMIT = 'SET_LIMIT',
    SET_CURRENT_DATA = 'SET_CURRENT_DATA',
    ADD_CARDS_POKEMON = 'ADD_CARDS_POKEMON',
    SET_START = 'SET_START',
    SET_END = 'SET_END',
    SET_PAGE = 'SET_PAGE',
    SET_TOTAL_PAGES = 'SET_TOTAL_PAGES',

}

export const fetchPokemons = (isLoading: boolean): typesPokemonsActions => {
    return {
        type: pokemonsActions.FETCH_POKEMONS,
        payload: isLoading
    }
}
export const fetchPokemonsError = (error: string | null ): typesPokemonsActions => {
    return {
        type: pokemonsActions.FETCH_POKEMONS_ERROR,
        payload: error
    }
}


export const addPokemons = (pokemon: IPokemons): typesPokemonsActions => {
    return {
        type: pokemonsActions.ADD_POKEMONS,
        payload: pokemon
    }
}
export const setPokemons = (pokemons: IPokemons[]): typesPokemonsActions => {
    return {
        type: pokemonsActions.SET_POKEMONS,
        payload: pokemons
    }
}
export const setQty = (qty: number): typesPokemonsActions => {
    return {
        type: pokemonsActions.SET_QTY,
        payload: qty
    }
}
export const setLimit = (limit: number): typesPokemonsActions => {
    return {
        type: pokemonsActions.SET_LIMIT,
        payload: limit
    }
}
export const setCurrentData = (currentData: IPokemons[]): typesPokemonsActions => {
    return {
        type: pokemonsActions.SET_CURRENT_DATA,
        payload: currentData
    }
}

export const addCardsPokemon = (cardsPokemon: IPokemons[]): typesPokemonsActions => {
    return {
        type: pokemonsActions.ADD_CARDS_POKEMON,
        payload: cardsPokemon
    }
}
export const setStart = (start: number): typesPokemonsActions => {
    return {
        type: pokemonsActions.SET_START,
        payload: start
    }
}
export const setEnd = (end: number): typesPokemonsActions => {
    return {
        type: pokemonsActions.SET_END,
        payload: end
    }
}

export const setPage = (page: number): typesPokemonsActions => {
    return {
        type: pokemonsActions.SET_PAGE,
        payload: page
    }
}
export const setTotalPages = (totalPages: number): typesPokemonsActions => {
    return {
        type: pokemonsActions.SET_TOTAL_PAGES,
        payload: totalPages
    }
}

