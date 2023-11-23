import React from 'react';
import classes from "./MyModal.module.css";

import {useDispatch} from "react-redux"
import {setModal} from "../../../redux/modalWindow/actionsModal"
import {useTypesSelector} from '../../../hooks/useTypedSelector';

interface MyModalProps {
    children: React.ReactNode,
}

const MyModal = ({children}: MyModalProps) => {
    const dispatch = useDispatch();
    const {modal} = useTypesSelector(state => state.modal)

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