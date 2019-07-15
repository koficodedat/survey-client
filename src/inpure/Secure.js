import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import get from 'lodash.get';

import AppBar from './AppBar';
import FooterBar from './FooterBar';

import { validateProfile } from '../actions/profile';

class Secure extends Component {
    componentDidMount(){
        this.props.actions.validateProfile();
        if( !this.props.hasUser ) this.props.history.push('/login');
    }

    componentDidUpdate(){
        if( this.props.hasUser ) this.props.history.push('/');
    }

    render(){
        const { hasUser, hasSurveys } = this.props;
        return (
            <React.Fragment>
                <AppBar history={this.props.history}/>
                <section className='root_section'>
                    {this.props.children}
                </section>
                { (hasUser && hasSurveys ) && <FooterBar/> }
            </React.Fragment> 
        );
    }
}

Secure.propTypes = {
    children: PropTypes.node.isRequired
}

const mapStateToProps = state => {
	return {
        hasUser: get(state, ['profile', 'hasUser'], false),
        hasSurveys: get(state, ['survey', 'items'], []).length > 0,
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        actions: bindActionCreators({ validateProfile }, dispatch) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Secure);