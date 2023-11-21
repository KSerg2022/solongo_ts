import React, {useState} from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";

import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import {getPokemons, getQty, getQtyUpdate} from "../redux/selectors"
import {setQtyUpdate, setQty, setModal} from "../redux/actions"
import {useEffect} from "react";


interface FormQtyPokProps {
    qty: number,
    setQty: (qtyUpdate: number) => void,
    setModal: (b: boolean) => void
}

const FormQtyPok = () => {

    const dispatch = useDispatch();
    const qty = useSelector(getQty)
    const qtyUpdate = useSelector(getQtyUpdate)

    // useEffect(() => {
    //     dispatch(setQtyUpdate(+qty))
    // }, [])


    const update = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('setQtyUpdate-1--', qty, qtyUpdate)

        dispatch(setQty(+qtyUpdate))
        // dispatch(setQtyUpdate(qty))
        dispatch(setModal(false))

        console.log('setQtyUpdate-2--', qty, qtyUpdate)
    }

    return (
        <form onSubmit={update}>
            <MyInput
                value={qtyUpdate}

                onChange={(e: { target: { value: React.SetStateAction<number>; }; }) =>
                    dispatch(setQtyUpdate(e.target.value))
            }

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