import React from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";

import {useDispatch, useSelector} from "react-redux"
import {getQtyUpdate} from "../redux/selectors"
import {setModal, setQty, setQtyUpdate} from "../redux/actions"


const FormQtyPok = () => {

    const dispatch = useDispatch();
    const qtyUpdate = useSelector(getQtyUpdate)

    const update = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(setQty(+qtyUpdate))
        dispatch(setModal(false))
    }

    return (
        <form onSubmit={update}>
            <MyInput
                value={qtyUpdate}
                onChange={(e: { target: { value: React.SetStateAction<number>; }; }) =>
                    dispatch(setQtyUpdate(e.target.value))}
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