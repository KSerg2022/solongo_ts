import React, {useState} from 'react';
import MyButton from "./UI/MyButton/MyButton";

import MyModal from "./UI/MyModal/MyModal";
import FormQtyPok from "./FormQtyPok";
import {MySelect} from "./UI/MySelect/MySelect";

interface HeaderProps {
    title: string,
    qty: number,
    setQty: (qtyUpdate: number) => void
    limit: number
    updateLimit: (value: React.SetStateAction<number>) => void
}

const Header = ({title, qty, setQty, limit, updateLimit}: HeaderProps) => {
    const [modal, setModal] = useState<boolean>(false)


    return (
        <div className="header row justify-content-md-center">

            <MySelect
                className="col col-lg-3"
                value={[10, 25, 50].includes(limit) ? limit : -1}
                onChange={updateLimit}
                defaultValue="Quantity posts on page"
                options={[
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: 50, name: '50'},
                    {value: -1, name: 'All'}
                ]}
            />

            <h1 className="col col-lg-4">
                {title}{qty}
            </h1>
            <MyModal visible={modal} setVisible={() => setModal(false)}>
                <FormQtyPok qty={qty} setQty={setQty} setModal={setModal}/>
            </MyModal>
            <MyButton
                // @ts-ignore
                type="button"
                title="Input quantity pokemons..."
                className="col-lg-3"
                onClick={() => setModal(true)}
            />
        </div>
    );
};

export default Header;

