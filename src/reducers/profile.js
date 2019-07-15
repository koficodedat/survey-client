import clone from 'lodash.clonedeep';
import set from 'lodash.set';

import { VALIDATE_PROFILE, UPDATE_PROFILE, SET_PROFILE, UNSET_PROFILE } from '../actions/types';

import init_state from '../store/state';

const profile = (state = init_state.profile, action) => {
    const cloned = clone(state);
    const { type, payload = {} } = action;
    const { name } = payload;

    switch(type){
        case VALIDATE_PROFILE:
            const value = window.localStorage.getItem('_name');
            set(cloned, 'hasUser', value !== null);

            return cloned;
        case UPDATE_PROFILE:
            window.localStorage.setItem('_name', name);

            set(cloned, 'name', name);
            set(cloned, 'hasUser', name !== null);
            
            return cloned;
        case SET_PROFILE:
            set(cloned, 'name', window.localStorage.getItem('_name'));
            set(cloned, 'hasUser', window.localStorage.getItem('_name') !== null);
            
            return cloned;
        case UNSET_PROFILE:
            window.localStorage.removeItem('_name');
            set(cloned, 'name', window.localStorage.getItem('_name'));
            set(cloned, 'hasUser', window.localStorage.getItem('_name') !== null);
            
            return cloned;
        default:
            return cloned;
    }
}

export default profile;