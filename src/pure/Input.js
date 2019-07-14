import React from 'react';

const Input = props => {
    const { css, id, type, name, checked, placeholder, disabled, onUpdate, min, max, value } = props;
    
    return (
        <input
            className={`${css} _input`}
            id={id}
            type={type} 
            name={name}
            checked={checked}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onUpdate}
            min={min}
            max={max}
            value={value}
        />
    )
}

export default Input;