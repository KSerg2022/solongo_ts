
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
    qtyUpdate: null
}


export const rootReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case 'pokemons/addPokemons': {
            return {
                ...state,
                pokemons: [...state.pokemons, action.pyaload],
            };
        };
        // case 'pokemons/setNullPokemons': {
        //     return {
        //         ...state,
        //         pokemons: [action.pyaload],
        //     };
        // };

        case 'pokemons/setQty': {
            return {
                ...state, qty: state.qty = action.payload,
            };
        };
        case 'pokemons/setLimit': {
            return {
                ...state, limit: state.limit = action.pyaload,
            };
        };
        case 'pokemons/setCurrentData': {
            return {
                ...state, currentData: state.currentData = action.pyaload,
            };
        };


        case 'pokemons/addCardsPokemon': {
            return {
                ...state, cardsPokemon: state.cardsPokemon = action.pyaload,
            };
        };
        case 'pokemons/setStart': {
            return {
                ...state, start: state.start = action.pyaload,
            };
        };
        case 'pokemons/setEnd': {
            return {
                ...state, end: state.end = action.pyaload,
            };
        };


        case 'pokemons/setPage': {
            return {
                ...state, page: state.page = action.pyaload,
            };
        };
        case 'pokemons/setTotalPages': {
            return {
                ...state, totalPages: state.totalPages = action.pyaload,
            };
        };


        case 'filters/setTypes': {
            return {
                ...state, types: state.types = action.pyaload,
            };
        };
        case 'filters/setFilters': {
            return {
                ...state, filters: state.filters = action.pyaload,
            };
        };


        case 'modal/setModal': {
            return {
                ...state, modal: state.modal = action.pyaload,
            };
        };
        case 'pokemons/setQtyUpdate': {
            return {
                ...state, qtyUpdate: state.qtyUpdate = action.pyaload,
            };
        };


        default:
            return state;
    }
}

