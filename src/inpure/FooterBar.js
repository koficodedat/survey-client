import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash.get';

import Card from '../pure/Card';
import Label from '../pure/Label';
import Input from '../pure/Input';

import { setPageSize, setPageNumber } from '../actions/pageable';

class FooterBar extends Component {
    
    componentDidMount(){
    }

    render(){
        const { actions, total = 0, size, number } = this.props;

        const quotient = Math.floor( total / size );
        const remainder = total % size;
        const total_pages = quotient + (remainder > 0 ? 1 : 0);

        return (
            <Card css='footer_bar' elevate>
                <section className='page_size page_item'>
                    <Label css='page_size_label'>Size</Label>
                    <Input css='page_size_input' type='number' min={5} value={size} onUpdate={(event) => actions.setPageSize(event.target.value)}/>
                </section>
                <section className='page_number page_item'>
                    <Label css='page_number_label'>Page</Label>
                    <Input css='page_number_input' type='number' min={1} max={total_pages} value={number} onUpdate={(event) => actions.setPageNumber(event.target.value)}/>
                    <Label css='page_total_number_label'>of {total_pages}</Label>
                </section>
            </Card>
        )
    }
}

const mapStateToProps = state => {
	return { 
        number: get(state, ['pageable', 'number'], 1),
        size: get(state, ['pageable', 'size'], 5),
        total: get(state, ['survey', 'items'], []).length,
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        actions: bindActionCreators({ setPageSize, setPageNumber }, dispatch) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterBar);