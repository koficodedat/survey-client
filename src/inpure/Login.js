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

        return (
            <Card css='login'>
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