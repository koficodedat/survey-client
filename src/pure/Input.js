import React from 'react';

const Input = props => {
    const { css, id, type, name, checked, placeholder, disabled, onUpdate, value } = props;
    
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
            value={value}
        />
    )
}

export default Input;