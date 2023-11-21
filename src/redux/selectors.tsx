
import {IPokemons} from '../model'

export const getPokemons = (state: { pokemons: IPokemons[] }) => state.pokemons
export const getQty = (state: { qty: number }) => state.qty
export const getLimit = (state: { limit: number }) => state.limit
export const getCurrentData = (state: {currentData: IPokemons[]}) => state.currentData

export const getCardsPokemon = (state: {cardsPokemon: IPokemons[]}) => state.cardsPokemon
export const getStart = (state: {start: number}) => state.start
export const getEnd = (state: {end: number}) => state.end

export const getPage = (state: {page: number}) => state.page
export const getTotalPages = (state: {totalPages: number}) => state.totalPages

export const getTypes = (state: {types: string[]}) => state.types
export const getFilters = (state: {filters: {}}) => state.filters

export const getModal = (state: {modal: boolean}) => state.modal
export const getQtyUpdate = (state: {qtyUpdate: number}) => state.qtyUpdate
