import clone from 'lodash.clonedeep';
import set from 'lodash.set';

import { SET_PAGE_NUMBER, SET_PAGE_SIZE } from '../actions/types';

import init_state from '../store/state';

const pageable = (state = init_state.pageable, action) => {
    const cloned = clone(state);
    const { type, payload = {} } = action;
    const { size, number } = payload;

    switch(type){
        case SET_PAGE_NUMBER:
                set(cloned, 'number', number);
    
            return cloned;
        case SET_PAGE_SIZE:
            set(cloned, 'size', size);

            return cloned;
        default:
            return cloned;
    }
}

export default pageable;