import React from 'react';
import classes from "./MyModal.module.css";
import {allActions} from "../../../redux/actions"
import {useStateContext} from '../../../redux/store';

interface MyModalProps {
    children: React.ReactNode,
}

const MyModal = ({children}: MyModalProps) => {
    const {
        dispatch,
        state: {modal},
    } = useStateContext();

    const rootClasses = [classes.myModal]
    if (modal) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')}
             onClick={() => dispatch({type: allActions.SET_MODAL, payload: false})}>
            <div className={classes.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;