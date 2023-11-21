
import {IPokemons} from '../model'

export const getPokemons = (state: { pokemons: IPokemons[] }) => state.pokemons

export const getQty = (state: { qty: number }) => state.qty
// export const getLimit = useSelector<typeof initialState>(state => state.limit)
export const getLimit = (state: { limit: number }) => state.limit
// export const getCurrentData = useSelector<typeof initialState>(state => state.currentData)
export const getCurrentData = (state: {currentData: IPokemons[]}) => state.currentData

// export const getCardsPokemon = useSelector<typeof initialState>(state => state.cardsPokemon)
export const getCardsPokemon = (state: {cardsPokemon: IPokemons[]}) => state.cardsPokemon
// export const getStart = useSelector<typeof initialState>(state => state.start)
export const getStart = (state: {start: number}) => state.start
// export const getEnd = useSelector<typeof initialState>(state => state.end)
export const getEnd = (state: {end: number}) => state.end

// export const getPage = useSelector<typeof initialState>(state => state.page)
export const getPage = (state: {page: number}) => state.page
// export const getTotalPages = useSelector<typeof initialState>(state => state.totalPages)
export const getTotalPages = (state: {totalPages: number}) => state.totalPages

// export const getTypes = useSelector<typeof initialState>(state => state.types)
export const getTypes = (state: {types: string[]}) => state.types
// export const getFilters = useSelector<typeof initialState>(state => state.filters)
export const getFilters = (state: {filters: {}}) => state.filters
//
// export const getModal = useSelector<typeof initialState>(state => state.modal)
export const getModal = (state: {modal: boolean}) => state.modal
// export const getQtyUpdate = useSelector<typeof initialState>(state => state.qtyUpdate)
export const getQtyUpdate = (state: {qtyUpdate: number}) => state.qtyUpdate
