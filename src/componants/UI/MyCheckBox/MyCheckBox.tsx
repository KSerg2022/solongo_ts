import React from 'react';
import classes from "./MyCheckBox.module.css";

interface MyCheckBoxProps {
    status: boolean
    key: number
    type: string
    id: string
    name: string
    onChange: (e: { target: { name: string }; }) => void
}


export const MyCheckBox = (props: MyCheckBoxProps) => {
    return (
        <label className="col" htmlFor={props.id}>
            <input
                {...props}
                className={classes.myCheckBoxInput}
                checked={props.status}
            />
            {props.name}
        </label>
    );
};

export default MyCheckBox;