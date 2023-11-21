import {IPokemons} from "../model";

import {allActions} from "./actions"

interface initState {
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

    modal: boolean,
    qtyUpdate: number,
}


interface actionsType {
    type: string;
    payload?: any;
}

export const initialState: initState = {
    pokemons: [],
    qty: 16,
    limit: 10,
    currentData: [],
    isLoading: true,
    error: null,

    cardsPokemon: [],
    start: 1,
    end: 1,

    page: 1,
    totalPages: 1,

    types: [],
    filters: {},

    modal: false,
    qtyUpdate: 16,
}


export const rootReducer = (state = initialState, action: actionsType): initState => {

    switch (action.type) {
        case 'FETCH_POKEMONS':
            return {...state, isLoading: true, error: null};
        case 'FETCH_POKEMONS_SUCCESS':
            return {...state, isLoading: false, error: null};
        case 'FETCH_POKEMONS_ERROR':
            return {...state, isLoading: true, error: null};

        case allActions.ADD_POKEMONS: {
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload],
            };
        };
        case allActions.SET_POKEMONS: {
            return {
                ...state,
                pokemons:  action.payload,
            };
        };
        case allActions.SET_QTY: {
            return {
                ...state, qty: action.payload,
            };
        };
        case allActions.SET_LIMIT: {
            return {
                ...state, limit: action.payload,
            };
        };
        case allActions.SET_CURRENT_DATA: {
            return {
                ...state, currentData: action.payload,
            };
        };


        case allActions.ADD_CARDS_POKEMON: {
            return {
                ...state, cardsPokemon: action.payload,
            };
        };
        case allActions.SET_START: {
            return {
                ...state, start: action.payload,
            };
        };
        case allActions.SET_END: {
            return {
                ...state, end: action.payload,
            };
        };


        case allActions.SET_PAGE: {
            return {
                ...state, page: action.payload,
            };
        };
        case allActions.SET_TOTAL_PAGES: {
            return {
                ...state, totalPages: action.payload,
            };
        };


        case allActions.SET_TYPES: {
            return {
                ...state, types: action.payload,
            };
        };
        case allActions.SET_FILTERS: {
            return {
                ...state, filters:  action.payload,
            };
        };


        case allActions.SET_MODAL: {
            return {
                ...state, modal: action.payload,
            };
        };
        case allActions.SET_QTY_UPDATE: {
            return {
                ...state, qtyUpdate: action.payload,
            };
        };

        default:
            return state;
    }
}

