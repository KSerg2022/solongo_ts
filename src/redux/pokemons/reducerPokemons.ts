import {typesPokemonsActions, pokemonsState} from "./typesPokemons"
import {pokemonsActions} from "./actionsPokemons"

export const initialPokemonState: pokemonsState = {
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
}

export const pokemonsReducer = (state = initialPokemonState,
                                action: typesPokemonsActions): pokemonsState => {
    switch (action.type) {
        case pokemonsActions.FETCH_POKEMONS:
            return {...state, isLoading: action.payload};
        case pokemonsActions.FETCH_POKEMONS_ERROR:
            return {...state, error: action.payload};

        case pokemonsActions.ADD_POKEMONS:
            return {...state, pokemons: [...state.pokemons, action.payload]};
        case pokemonsActions.SET_POKEMONS:
            return {...state, pokemons: action.payload, isLoading: false};
        case pokemonsActions.SET_QTY:
            return {...state, qty: action.payload};
        case pokemonsActions.SET_LIMIT:
            return {...state, limit: action.payload};

        case pokemonsActions.SET_CURRENT_DATA:
            return {...state, currentData: action.payload};
        case pokemonsActions.ADD_CARDS_POKEMON:
            return {...state, cardsPokemon: action.payload};
        case pokemonsActions.SET_START:
            return {...state, start: action.payload};
        case pokemonsActions.SET_END:
            return {...state, end: action.payload};

        case pokemonsActions.SET_PAGE:
            return {...state, page: action.payload};
        case pokemonsActions.SET_TOTAL_PAGES:
            return {...state, totalPages: action.payload};

        default:
            return state;
    }
}

