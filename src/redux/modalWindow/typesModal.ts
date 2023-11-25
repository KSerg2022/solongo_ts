import {IPokemons} from "../../model";

import {modalActions} from "./actionsModal"

export interface initStateModal {
    modal: boolean,
    qtyUpdate: number,
}


interface setModalAction {
    type: modalActions.SET_MODAL
    payload : boolean
}
interface setQtyUpdateAction {
    type: modalActions.SET_QTY_UPDATE
    payload : number
}

export type typesModalActions =
    setModalAction |
    setQtyUpdateAction
