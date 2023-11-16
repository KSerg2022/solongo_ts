import React from 'react';
import classes from "./MyModal.module.css";

interface MyModalProps {
    children: React.ReactNode,
    visible: boolean,
    setVisible: () => void,
}

const MyModal = ({children, visible, setVisible}: MyModalProps) => {

    const rootClasses = [classes.myModal]
    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={setVisible}>
            <div className={classes.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;