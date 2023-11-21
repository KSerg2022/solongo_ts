import {IPokemons} from '../model'

// const addPokemons = {
//     type: 'pokemons/addPokemons',
//     pyaload: {
//         id: '',
//         name: '',
//         img_url: '',
//         types: []
//     }
// }

export const addPokemons = (pokemon: IPokemons | []) => {
    return {
        type: 'pokemons/addPokemons',
        pyaload: pokemon
    }
}
// export const setNullPokemons = (pokemon = []) => {
//     return {
//         type: 'pokemons/setNullPokemons',
//         pyaload: pokemon
//     }
// }
export const setQty = (qty: number) => {
    return {
        type: 'pokemons/setQty',
        pyaload: qty
    }
}
export const setLimit = (limit: number) => {
    return {
        type: 'pokemons/setLimit',
        pyaload: limit
    }
}
export const setCurrentData = (currentData: IPokemons[]) => {
    return {
        type: 'pokemons/setCurrentData',
        pyaload: currentData
    }
}


export const addCardsPokemon = (cardsPokemon: IPokemons[]) => {
    return {
        type: 'pokemons/addCardsPokemon',
        pyaload: cardsPokemon
    }
}
export const setStart = (start: number) => {
    return {
        type: 'pokemons/setStart',
        pyaload: start
    }
}
export const setEnd = (end: number) => {
    return {
        type: 'pokemons/setEnd',
        pyaload: end
    }
}


export const setPage = (page: number) => {
    return {
        type: 'pokemons/setPage',
        pyaload: page
    }
}
export const setTotalPages = (totalPages: number) => {
    return {
        type: 'pokemons/setTotalPages',
        pyaload: totalPages
    }
}


export const setTypes = (types: string[]) => {
    return {
        type: 'filters/setTypes',
        pyaload: types
    }
}
export const setFilters = (filters: { [key: string]: boolean }) => {
    return {
        type: 'filters/setFilters',
        pyaload: filters
    }
}

export const setModal = (modal: boolean) => {
    return {
        type: 'modal/setModal',
        pyaload: modal
    }
}
export const setQtyUpdate = (qtyUpdate: number) => {
    return {
        type: 'modal/setQtyUpdate',
        pyaload: qtyUpdate
    }
}