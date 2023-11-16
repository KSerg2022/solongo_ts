import React from 'react';

interface PoNameProps {
    id: string,
    name: string
}

export const PolName = ({id, name}: PoNameProps) => {

    const nameTitle = () => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    return (
        <h5>{id}. {nameTitle()}</h5>
    );
};

export default PolName;