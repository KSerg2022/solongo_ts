export enum allActions {
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
    SET_TYPES = 'SET_TYPES',
    SET_FILTERS = 'SET_FILTERS',
    SET_MODAL = 'SET_MODAL',
    SET_QTY_UPDATE = 'SET_QTY_UPDATE'
}
//
// export const fetchPokemons = (isloading: boolean) => {
//     return {
//         type: allActions.FETCH_POKEMONS,
//         payload: isloading
//     }
// }
// export const fetchPokemonsError = (error: string | null) => {
//     return {
//         type: allActions.FETCH_POKEMONS_ERROR,
//         payload: error
//     }
// }
//
//
// export const addPokemons = (pokemon: IPokemons | []) => {
//     return {
//         type: allActions.ADD_POKEMONS,
//         payload: pokemon
//     }
// }
// export const setPokemons = (pokemons: IPokemons[]) => {
//     return {
//         type: allActions.SET_POKEMONS,
//         payload: pokemons
//     }
// }
// export const setQty = (qty: number) => {
//     return {
//         type: allActions.SET_QTY,
//         payload: qty
//     }
// }
// export const setLimit = (limit: number) => {
//     return {
//         type: allActions.SET_LIMIT,
//         payload: limit
//     }
// }
// export const setCurrentData = (currentData: IPokemons[]) => {
//     return {
//         type: allActions.SET_CURRENT_DATA,
//         payload: currentData
//     }
// }
//
// export const addCardsPokemon = (cardsPokemon: IPokemons[]) => {
//     return {
//         type: allActions.ADD_CARDS_POKEMON,
//         payload: cardsPokemon
//     }
// }
// export const setStart = (start: number) => {
//     return {
//         type: allActions.SET_START,
//         payload: start
//     }
// }
// export const setEnd = (end: number) => {
//     return {
//         type: allActions.SET_END,
//         payload: end
//     }
// }
//
// export const setPage = (page: number) => {
//     return {
//         type: allActions.SET_PAGE,
//         payload: page
//     }
// }
// export const setTotalPages = (totalPages: number) => {
//     return {
//         type: allActions.SET_TOTAL_PAGES,
//         payload: totalPages
//     }
// }
//
// export const setTypes = (types: string[]) => {
//     return {
//         type: allActions.SET_TYPES,
//         payload: types
//     }
// }
// export const setFilters = (filters: { [key: string]: boolean }) => {
//     return {
//         type: allActions.SET_FILTERS,
//         payload: filters
//     }
// }
//
// export const setModal = (modal: boolean) => {
//     return {
//         type: allActions.SET_MODAL,
//         payload: modal
//     }
// }
// export const setQtyUpdate = (qtyUpdate: any) => {
//     return {
//         type: allActions.SET_QTY_UPDATE,
//         payload: qtyUpdate
//     }
// }