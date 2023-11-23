export enum allModalActions {
    SET_MODAL = 'SET_MODAL',
    SET_QTY_UPDATE = 'SET_QTY_UPDATE'
}

export const setModal = (modal: boolean) => {
    return {
        type: allModalActions.SET_MODAL,
        payload: modal
    }
}
export const setQtyUpdate = (qtyUpdate: any) => {
    return {
        type: allModalActions.SET_QTY_UPDATE,
        payload: qtyUpdate
    }
}