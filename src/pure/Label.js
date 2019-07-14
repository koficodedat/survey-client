import React from 'react';

const Label = props => {
    const { css, htmlFor } = props;

    return (
        <label
            className={`${css} _label`}
            htmlFor={htmlFor}
        >
            {props.children}
        </label>
    )
}

export default Label;