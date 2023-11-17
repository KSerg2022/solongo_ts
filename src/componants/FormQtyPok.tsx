import React, {useState} from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";

interface FormQtyPokProps {
    qty: number,
    setQty: (qtyUpdate: number) => void,
    setModal: (b: boolean) => void
}

const FormQtyPok = ({qty, setQty, setModal}: FormQtyPokProps) => {
    const [qtyUpdate, setQtyUpdate] = useState<number>(qty)

    const update = (e: React.FormEvent) => {
        e.preventDefault()
        setQty(qtyUpdate)
        setModal(false)
    }

    return (
        <form onSubmit={update}>
            <MyInput
                value={qtyUpdate}
                onChange={(e: { target: { value: React.SetStateAction<number>; }; }) => setQtyUpdate(e.target.value)}
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