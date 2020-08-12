import React from 'react'

const Field = ({
    label,  
    id,
    type,
    name,
    placeholder,
    required,
    value,
    onChange
}) => (
    <div className='FormRow'>
        <label className='FormRowLabel' htmlFor={id}>
            {label}
        </label>
        <input
            className='FormRowInput'
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
        />
    </div>
);

export default Field