import {allTypesActions, initState} from "./typesPokemons"
import {allActions} from "./actionsPokemons"

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
}



export const pokemonsReducer = (state = initialState, action: allTypesActions): initState => {

    switch (action.type) {
        case allActions.FETCH_POKEMONS:
            return {...state, isLoading: action.payload};
        case allActions.FETCH_POKEMONS_ERROR:
            return {...state, error: action.payload};

        case allActions.ADD_POKEMONS:
            return {...state, pokemons: [...state.pokemons, action.payload]};
        case allActions.SET_POKEMONS:
            return {...state, pokemons: action.payload, isLoading: false};
        case allActions.SET_QTY:
            return {...state, qty: action.payload};
        case allActions.SET_LIMIT:
            return {...state, limit: action.payload};

        case allActions.SET_CURRENT_DATA:
            return {...state, currentData: action.payload};
        case allActions.ADD_CARDS_POKEMON:
            return {...state, cardsPokemon: action.payload};
        case allActions.SET_START:
            return {...state, start: action.payload};
        case allActions.SET_END:
            return {...state, end: action.payload};

        case allActions.SET_PAGE:
            return {...state, page: action.payload};
        case allActions.SET_TOTAL_PAGES:
            return {...state, totalPages: action.payload};

        case allActions.SET_TYPES:
            return {...state, types: action.payload};
        case allActions.SET_FILTERS:
            return {...state, filters: action.payload};

        default:
            return state;
    }
}

