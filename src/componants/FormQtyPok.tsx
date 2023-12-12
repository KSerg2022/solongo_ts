import React from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import {allActions} from "../redux/actions"
import {useStateContext} from '../redux/store';


const FormQtyPok = () => {
      const {
        dispatch,
        state: {qtyUpdate},
    } = useStateContext();

    const update = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch({type: allActions.SET_QTY, payload: +qtyUpdate})
        dispatch({type: allActions.SET_MODAL, payload: false})
    }

    return (
        <form onSubmit={update}>
            <MyInput
                value={qtyUpdate}
                onChange={(e: { target: { value: React.SetStateAction<number>; }; }) =>
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