import React from 'react';
import MyButton from "./UI/MyButton/MyButton";

import MyModal from "./UI/MyModal/MyModal";
import FormQtyPok from "./FormQtyPok";
import {MySelect} from "./UI/MySelect/MySelect";

import {useDispatch} from "react-redux"
import {setLimit} from "../redux/pokemons/actionsPokemons"
import {setModal} from "../redux/modalWindow/actionsModal"
import {useTypesSelector} from '../hooks/useTypedSelector';


interface HeaderProps {
    title: string,
}

const Header = ({title}: HeaderProps) => {
    const dispatch = useDispatch();
    const {pokemons, limit, qty} = useTypesSelector(state => state.pokemons)

    const updateLimit = (value: React.SetStateAction<number>) => {
        if (value === -1) {
            dispatch(setLimit(pokemons.length))
        } else {
            dispatch(setLimit(+value))
        }
    }

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
            <MyModal>
                <FormQtyPok />
            </MyModal>
            <MyButton
                // @ts-ignore
                type="button"
                title="Input quantity pokemons..."
                className="col-lg-3"
                onClick={() =>  dispatch(setModal(true))}
            />
        </div>
    );
};

export default Header;

