import React from 'react';


interface MySelectProps {
    className: string
    defaultValue: string
    value: number | string
    onChange: (value: number) => void
    options: any
}

export const MySelect = ({className, options, defaultValue, value, onChange}: MySelectProps) => {
    return (
        <select
            className={className}
        value={value}
        onChange={event => onChange(+event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map((option: any) =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};
