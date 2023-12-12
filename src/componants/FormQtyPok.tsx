import React from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";

import {useDispatch} from "react-redux"
import {allActions, setModal, setQty, setQtyUpdate} from "../redux/actions"
import {useTypesSelector} from '../hooks/useTypedSelector';
import { useStateContext } from '../redux/store';


const FormQtyPok = () => {
    // const dispatch = useDispatch();
    // const {qtyUpdate} = useTypesSelector(state => state.pokemons)

    const {
        dispatch,
        state: {qtyUpdate},
    } = useStateContext();

    const update = (e: React.FormEvent) => {
        e.preventDefault()
        // dispatch(setQty(+qtyUpdate))
        dispatch({type: allActions.SET_QTY, payload: +qtyUpdate})
        // dispatch(setModal(false))
        dispatch({type: allActions.SET_MODAL, payload: false})
    }

    return (
        <form onSubmit={update}>
            <MyInput
                value={qtyUpdate}
                onChange={(e: { target: { value: React.SetStateAction<number>; }; }) =>
                    // dispatch(setQtyUpdate(e.target.value))}
                    dispatch({type: allActions.SET_QTY_UPDATE, payload: +e.target.value})}
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