import React from 'react';
import noop from 'lodash.noop';

import Label from './Label';
import Input from './Input';
import Button from './Button';

const BuildInput = props => {
    const { formId, _id, type, label, placeholder, options, onUpdate } = props;
    switch(type){
        case 'text':
            return (
                <Input 
                    css=''
                    type={type} 
                    name={label.toLowerCase()}
                    placeholder={placeholder}
                    onUpdate={(event) => onUpdate(formId, _id, event.target.value)}
                />
            );
        case 'radio':
            return (
                options.map(
                    (option, index) => (
                        <section key={`${_id}-${index}`}>
                            <Input 
                                css=''
                                type={type} 
                                name={`${_id}-${index}`}
                                placeholder={placeholder}
                                onUpdate={(event) => onUpdate(formId, _id, event.target.value)}
                            />
                            <Label htmlFor={`${_id}-${index}`}>{option}</Label>
                        </section>
                    )
                )
            );
        default:
            return ('');
    }
}

const Form = props => {
    const { formId, inputs, buttons, onUpdate = noop } = props;

    return (
        <form className='_form'>
            <section className='_form_input_group'>
            {
                inputs.map(
                    input => (
                        <section className='_form_item' key={input._id}>
                            <Label htmlFor={input.label.toLowerCase()}>{input.label}</Label>
                            <BuildInput {
                                ...{ 
                                    formId, 
                                    _id: input._id,
                                    type: input.type,
                                    label: input.label,
                                    placeholder: input.placeholder,
                                    options: input.options,
                                    onUpdate,
                                }
                            }/>
                        </section>
                    )
                )
            }
            </section>
            <section className='_form_button_group'>
            {
                buttons.map(
                    button => (
                        <Button 
                            css={`_form_item _form_item_button ${button.css}`}
                            key={button._id}
                            type={button.type} 
                            onClick={button.action}
                            textcolor={button.textcolor}
                            backgroundcolor={button.backgroundcolor}
                            border={button.border}
                        >
                            {button.value}
                        </Button>
                    )
                )
            }
            </section>
        </form>
    )
}

export default Form;