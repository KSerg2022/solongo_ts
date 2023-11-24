import {IPokemons} from "../../model";

import {filtersActions} from "./actionsFilters"

export interface initFiltersState {
    types: string[],
    filters: {},
}

interface setTypesAction {
    type: filtersActions.SET_TYPES
    payload : string[]
}
interface setFiltersAction {
    type: filtersActions.SET_FILTERS
    payload : {}
}

export type typesFiltersActions =
    setTypesAction |
    setFiltersAction
