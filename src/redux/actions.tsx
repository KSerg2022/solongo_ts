import {IPokemons} from '../model'

// const addPokemons = {
//     type: 'pokemons/addPokemons',
//     payload: {
//         id: '',
//         name: '',
//         img_url: '',
//         types: []
//     }
// }

export const addPokemons = (pokemon: IPokemons | []) => {
    return {
        type: 'pokemons/addPokemons',
        payload: pokemon
    }
}
export const setPokemons = (pokemons: IPokemons[]) => {
    return {
        type: 'pokemons/setPokemons',
        payload: pokemons
    }
}
export const setQty = (qty: number) => {
    return {
        type: 'pokemons/setQty',
        payload: qty
    }
}
export const setLimit = (limit: number) => {
    return {
        type: 'pokemons/setLimit',
        payload: limit
    }
}
export const setCurrentData = (currentData: IPokemons[]) => {
    return {
        type: 'pokemons/setCurrentData',
        payload: currentData
    }
}


export const addCardsPokemon = (cardsPokemon: IPokemons[]) => {
    return {
        type: 'pokemons/addCardsPokemon',
        payload: cardsPokemon
    }
}
export const setStart = (start: number) => {
    return {
        type: 'pokemons/setStart',
        payload: start
    }
}
export const setEnd = (end: number) => {
    return {
        type: 'pokemons/setEnd',
        payload: end
    }
}


export const setPage = (page: number) => {
    return {
        type: 'pokemons/setPage',
        payload: page
    }
}
export const setTotalPages = (totalPages: number) => {
    return {
        type: 'pokemons/setTotalPages',
        payload: totalPages
    }
}


export const setTypes = (types: string[]) => {
    return {
        type: 'filters/setTypes',
        payload: types
    }
}
export const setFilters = (filters: { [key: string]: boolean }) => {
    return {
        type: 'filters/setFilters',
        payload: filters
    }
}

export const setModal = (modal: boolean) => {
    return {
        type: 'modal/setModal',
        payload: modal
    }
}
export const setQtyUpdate = (qtyUpdate: any) => {
    return {
        type: 'modal/setQtyUpdate',
        payload: qtyUpdate
    }
}