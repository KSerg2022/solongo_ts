import {typesModalActions, initModalState, modalActions} from "./typesModal"
// import {modalActions} from "./actionsModal"

export const initialModalState: initModalState = {
    modal: false,
    qtyUpdate: 16,
}


export const modalReducer = (state = initialModalState,
                             action: typesModalActions): initModalState => {

    switch (action.type) {
        case modalActions.SET_MODAL:
            return {...state, modal: action.payload};
        case modalActions.SET_QTY_UPDATE:
            return {...state, qtyUpdate: action.payload};

        default:
            return state;
    }
}

