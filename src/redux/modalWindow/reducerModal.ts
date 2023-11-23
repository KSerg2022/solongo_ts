import {allTypesModalActions, initStateModal} from "./typesModal"
import {allModalActions} from "./actionsModal"

export const initialState: initStateModal = {
    modal: false,
    qtyUpdate: 16,
}


export const modalReducer = (state = initialState,
                             action: allTypesModalActions): initStateModal => {

    switch (action.type) {
        case allModalActions.SET_MODAL:
            return {...state, modal: action.payload};
        case allModalActions.SET_QTY_UPDATE:
            return {...state, qtyUpdate: action.payload};

        default:
            return state;
    }
}

