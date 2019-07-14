import React from 'react';

const Card = props => {
    const { elevate } = props;
    const _class = `${ elevate ? `elevate ${props.css}`: props.css }`;

    return (<div className={`${_class} _card`}>{ props.children }</div>)
}

export default Card;