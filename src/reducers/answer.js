import clone from 'lodash.clonedeep';
import set from 'lodash.set';

import { SET_ANSWERS } from '../actions/types';

import init_state from '../store/state';

const answer = (state = init_state.answer, action) => {
    const cloned = clone(state);
    const { type, payload = {} } = action;
    const { answers } = payload;

    switch(type){
        case SET_ANSWERS:
                set(cloned, 'items', answers);
    
                return cloned;
        default:
            return cloned;
    }
}

export default answer;