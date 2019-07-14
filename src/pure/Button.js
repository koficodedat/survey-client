import React from 'react';

const Button = props => {
    const { css, type, onClick } = props;
    return (
        <button 
            className={`${css} _button`}
            type={type}
            onClick={onClick}
        >
            { props.children }
        </button>
    )
}

export default Button;