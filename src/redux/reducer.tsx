
export const initialState = {
    pokemons: [],
    qty: 16,
    limit: 10,
    currentData: [],

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


export const rootReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case 'pokemons/addPokemons': {
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload],
            };
        };
        case 'pokemons/setPokemons': {
            return {
                ...state,
                pokemons:  action.payload,
            };
        };
        case 'pokemons/setQty': {
            return {
                ...state, qty: action.payload,
            };
        };
        case 'pokemons/setLimit': {
            return {
                ...state, limit: action.payload,
            };
        };
        case 'pokemons/setCurrentData': {
            return {
                ...state, currentData: action.payload,
            };
        };


        case 'pokemons/addCardsPokemon': {
            return {
                ...state, cardsPokemon: action.payload,
            };
        };
        case 'pokemons/setStart': {
            return {
                ...state, start: action.payload,
            };
        };
        case 'pokemons/setEnd': {
            return {
                ...state, end: action.payload,
            };
        };


        case 'pokemons/setPage': {
            return {
                ...state, page: action.payload,
            };
        };
        case 'pokemons/setTotalPages': {
            return {
                ...state, totalPages: action.payload,
            };
        };


        case 'filters/setTypes': {
            return {
                ...state, types: action.payload,
            };
        };
        case 'filters/setFilters': {
            return {
                ...state, filters:  action.payload,
            };
        };


        case 'modal/setModal': {
            return {
                ...state, modal: action.payload,
            };
        };
        case 'modal/setQtyUpdate': {
            return {
                ...state, qtyUpdate: action.payload,
            };
        };

        default:
            return state;
    }
}

