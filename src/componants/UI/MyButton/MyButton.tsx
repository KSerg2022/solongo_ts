import React from 'react';
import classes from "./MyButton.module.css";

interface MyButtonProps {
    id?: string,
    title: string,
    className?: string,
    props?: any
}

const MyButton = ({title, className, ...props}: MyButtonProps) => {

    const rootClasses: string[] = [classes.myBtn]
    if (className) {
        rootClasses.push(className);
    }

    return (
        <button className={rootClasses.join(' ')} {...props}>
            {title}
        </button>
    );
};

export default MyButton;