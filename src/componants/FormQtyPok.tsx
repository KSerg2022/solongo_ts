import React from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import {setQty} from "../redux/pokemons/actionsPokemons"
// import {setModal, setQtyUpdate} from "../redux/modalWindow/actionsModal"
import {modalActions} from "../redux/modalWindow/typesModal"
import {useTypesSelector} from '../hooks/useTypedSelector';
import {useAppDispatch} from '../hooks/useAppDispatch';


const FormQtyPok = () => {
    const dispatch = useAppDispatch();
    const {qtyUpdate} = useTypesSelector(state => state.modal)

    const update = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(setQty(+qtyUpdate))
        // dispatch(setModal(false))
        dispatch({type: modalActions.SET_MODAL, payload: false})
    }

    return (
        <form onSubmit={update}>
            <MyInput
                value={qtyUpdate}
                // onChange={(e: { target: { value: React.SetStateAction<number>; }; }) =>
                //     dispatch(setQtyUpdate(e.target.value))}
                onChange={(e: { target: { value: number; }; }) =>
                    dispatch({type: modalActions.SET_QTY_UPDATE,
                    payload: e.target.value})}
                type="number"
                placeholder="Quantity pokemons?"
                min="0"
            />
            <MyButton
                id="modalInputKey"
                title="Input"
            />
        </form>
    )
};

export default FormQtyPok;