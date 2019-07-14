import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash.get';

import Card from '../pure/Card';
import Button from '../pure/Button';

import { setProfile, unsetProfile } from '../actions/profile';
import { toggleSurveyForm } from '../actions/survey';

class AppBar extends Component {
    
    componentDidMount(){
        this.props.actions.setProfile();
    }

    render(){
        return (
            <Card css='app_bar' elevate>
                <span className='app_bar_name'>Survey App</span>
                {
                    this.props.hasUser ?
                    <section>
                        <Button css='app_bar_button' onClick={this.props.actions.toggleSurveyForm}>Add Survey</Button>
                        <Button css='app_bar_button' onClick={() => this.props.actions.unsetProfile(this.props.history)}>
                            <span className='profile_name'>{this.props.name}</span> - Logout
                        </Button>
                    </section> :
                    ''
                }
            </Card>
        )
    }
}

const mapStateToProps = state => {
	return {
        name: get(state, ['profile', 'name'], ''),
        hasUser: get(state, ['profile', 'hasUser'], false),
        inCreate: get(state, ['survey', 'inCreate'], false),
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        actions: bindActionCreators({ setProfile, toggleSurveyForm, unsetProfile }, dispatch) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);