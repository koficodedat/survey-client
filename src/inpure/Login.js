import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import get from 'lodash.get';

import Card from '../pure/Card';
import Label from '../pure/Label';
import Input from '../pure/Input';
import Button from '../pure/Button';

import { updateLoginInput } from '../actions/form';
import { saveProfile } from '../apis/api';


class Login extends Component {
    render(){
        const { label, type, placeholder, value } = this.props.form;
        const css = '';

        return (
            <Card css={`${css} login`}>
                <Label css='login_label' htmlFor='login_name'>{label}</Label>
                <Input 
                    css='login_input' 
                    type={type}
                    placeholder={placeholder}
                    name='login_name'
                    value={value}
                    onUpdate={(event) => this.props.actions.updateLoginInput(event.target.value)}
                />
                <section className='login_button_section'>
                    <Button css='primary_button login_button' onClick={this.props.actions.saveProfile}> Sign In </Button>
                </section>
            </Card>
            // <Card 
            //     css='login_card'
            // >
            //     <Form 
            //         formId='login'
            //         inputs={this.props.form.inputs}
            //         buttons={[
            //             {
            //                 _id: 0,
            //                 css: 'primary_button',
            //                 value: 'Sign In',
            //                 type: 'button',
            //                 action: () => this.props.actions.saveProfile()
            //             }
            //         ]}
            //         onUpdate={this.props.actions.updateInput}
            //     />
            // </Card>
        )
    }
}

const mapStateToProps = state => {
	return {
        form: get(state, ['form', 'login'], {})
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        actions: bindActionCreators({ updateLoginInput, saveProfile }, dispatch) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);