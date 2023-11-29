
export enum modalActions {
    SET_MODAL = 'SET_MODAL',
    SET_QTY_UPDATE = 'SET_QTY_UPDATE'
}


export interface initModalState {
    modal: boolean,
    qtyUpdate: number,
}


// interface setModalAction {
//     type: modalActions.SET_MODAL
//     payload : boolean
// }
// interface setQtyUpdateAction {
//     type: modalActions.SET_QTY_UPDATE
//     payload : number
// }
//
// export type typesModalActions =
//     setModalAction |
//     setQtyUpdateAction

export type typesModalActions =
    { type: modalActions.SET_MODAL, payload: boolean }
    | { type: modalActions.SET_QTY_UPDATE, payload: number }