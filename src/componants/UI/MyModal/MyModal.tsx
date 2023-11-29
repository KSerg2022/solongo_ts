import React from 'react';
import classes from "./MyModal.module.css";
// import {setModal} from "../../../redux/modalWindow/actionsModal"
import {modalActions} from "../../../redux/modalWindow/typesModal"
import {useTypesSelector} from '../../../hooks/useTypedSelector';
import {useAppDispatch} from '../../../hooks/useAppDispatch';

interface MyModalProps {
    children: React.ReactNode,
}

const MyModal = ({children}: MyModalProps) => {
    const dispatch = useAppDispatch();
    const {modal} = useTypesSelector(state => state.modal)

    const rootClasses = [classes.myModal]
    if (modal) {
        rootClasses.push(classes.active);
    }

    return (
        // <div className={rootClasses.join(' ')} onClick={() => dispatch(setModal(false))}>
        <div className={rootClasses.join(' ')}
             onClick={() => dispatch({type: modalActions.SET_MODAL,
                 payload: false})}>
            <div className={classes.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;