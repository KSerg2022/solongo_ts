// import {filtersActions} from "./actionsFilters"

export enum filtersActions {
    SET_TYPES = 'SET_TYPES',
    SET_FILTERS = 'SET_FILTERS',
}

export interface initFiltersState {
    types: string[],
    filters: { [key: string]: boolean },
}

export type typesFiltersActions =
    {
        type: filtersActions.SET_TYPES, payload: string[]
    }
    |
    {
        type: filtersActions.SET_FILTERS, payload: { [key: string]: boolean }
    }

