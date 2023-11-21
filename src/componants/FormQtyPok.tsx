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

// const FormQtyPok = ({qty, setQty, setModal}: FormQtyPokProps) => {
// const FormQtyPok = ({qty}: FormQtyPokProps) => {
const FormQtyPok = () => {
    // const [qtyUpdate, setQtyUpdate] = useState<number>(qty)

    const dispatch = useDispatch();
    const qty = useSelector(getQty)
    const qtyUpdate = useSelector(getQtyUpdate)

    useEffect(() => {
        dispatch(setQtyUpdate(qty))
    }, [])


    const update = (e: React.FormEvent) => {
        e.preventDefault()
        // setQty(qtyUpdate)
        // setModal(false)
        dispatch(setQty(qtyUpdate))
        dispatch(setModal(false))
    }

    return (
        <form onSubmit={update}>
            <MyInput
                value={qtyUpdate}
                // onChange={(e: { target: { value: React.SetStateAction<number>; }; }) => setQtyUpdate(e.target.value)}
                onChange={(e: { target: { value: React.SetStateAction<number>; }; }) => dispatch(setQtyUpdate(+e.target.value))}
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