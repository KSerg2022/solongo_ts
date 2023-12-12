import React from 'react';
import classes from "./MyModal.module.css";

import {useDispatch} from "react-redux"
import {allActions, setModal} from "../../../redux/actions"
import {useTypesSelector} from '../../../hooks/useTypedSelector';
import { useStateContext } from '../../../redux/store';

interface MyModalProps {
    children: React.ReactNode,
}

const MyModal = ({children}: MyModalProps) => {
    // const dispatch = useDispatch();
    // const {modal} = useTypesSelector(state => state.pokemons)

    const {
        dispatch,
        state: {modal},
    } = useStateContext();

    const rootClasses = [classes.myModal]
    if (modal) {
        rootClasses.push(classes.active);
    }

    return (
        // <div className={rootClasses.join(' ')} onClick={() => dispatch(setModal(false))}>
        <div className={rootClasses.join(' ')}
             onClick={() => dispatch({type: allActions.SET_MODAL, payload: false})}>
            <div className={classes.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;