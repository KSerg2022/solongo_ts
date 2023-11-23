import {IPokemons} from "../../model";

import {allModalActions} from "./actionsModal"

export interface initStateModal {
    modal: boolean,
    qtyUpdate: number,
}


interface setModalAction {
    type: allModalActions.SET_MODAL
    payload : boolean
}
interface setQtyUpdateAction {
    type: allModalActions.SET_QTY_UPDATE
    payload : number
}

export type allTypesModalActions =
    setModalAction |
    setQtyUpdateAction
