import React from 'react';
import classes from "./MyModal.module.css";

import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import {getModal} from "../../../redux/selectors"
import {setModal} from "../../../redux/actions"
import { useTypesSelector } from '../../../hooks/useTypedSelector';

interface MyModalProps {
    children: React.ReactNode,
    // visible: boolean,
    // setVisible: () => void,
}

// const MyModal = ({children, visible, setVisible}: MyModalProps) => {
const MyModal = ({children}: MyModalProps) => {
    const dispatch = useDispatch();
    const {modal} = useTypesSelector(state => state.pokemons)
    // const modal = useSelector(getModal)

    const rootClasses = [classes.myModal]
    if (modal) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => dispatch(setModal(false))}>
            <div className={classes.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;