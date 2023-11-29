import {typesFiltersActions, initFiltersState, filtersActions} from "./typesFilters"
// import {filtersActions} from "./actionsFilters"

export const initiaFilterslState: initFiltersState = {
    types: [],
    filters: {},
}


export const filtersReducer = (state = initiaFilterslState,
                               action: typesFiltersActions): initFiltersState => {
    switch (action.type) {

        case filtersActions.SET_TYPES:
            return {...state, types: action.payload};
        case filtersActions.SET_FILTERS:
            return {...state, filters: action.payload};

        default:
            return state;
    }
}

