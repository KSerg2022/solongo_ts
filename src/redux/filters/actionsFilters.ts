import { typesFiltersActions } from "./typesFilters"

export enum filtersActions {
    SET_TYPES = 'SET_TYPES',
    SET_FILTERS = 'SET_FILTERS',
}

export const setTypes = (types: string[]): typesFiltersActions => {
    return {
        type: filtersActions.SET_TYPES,
        payload: types
    }
}
export const setFilters = (filters: { [key: string]: boolean }): typesFiltersActions => {
    return {
        type: filtersActions.SET_FILTERS,
        payload: filters
    }
}
