import {createStore} from "redux"
import {devToolsEnhancer} from "@redux-devtools/extension"
import {combineReducers} from "redux"
import {pokemonsReducer} from "./pokemons/reducerPokemons"
import {modalReducer} from "./modalWindow/reducerModal"
import {filtersReducer} from "./filters/reducerFilters"


export const rootReducer = combineReducers({
    pokemons: pokemonsReducer,
    modal: modalReducer,
    filters: filtersReducer
})

export type RootState = ReturnType<typeof rootReducer>


const enhancer = devToolsEnhancer()

export const store = createStore(rootReducer, enhancer)

export type AppDispatch = typeof store.dispatch
