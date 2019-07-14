import clone from 'lodash.clonedeep';
import get from 'lodash.get';
import set from 'lodash.set';

import { TOGGLE_SURVEY_FORM, SET_SURVEYS, TOGGLE_SURVEY } from '../actions/types';

import init_state from '../store/state';

const survey = (state = init_state.survey, action) => {
    const cloned = clone(state);
    const { type, payload = {} } = action;
    const { surveys, id } = payload;

    switch(type){
        case TOGGLE_SURVEY_FORM:
            set(cloned, 'inCreate', !get(cloned, 'inCreate', false));

            return cloned;
        case SET_SURVEYS:
                set(cloned, 'inCreate', false);
                set(cloned, 'items', surveys);
    
            return cloned;
        case TOGGLE_SURVEY:
            const show = get(cloned, `items.${id}.show`, false);

            set(cloned, `items.${id}.show`, !show);
    
            return cloned;
        default:
            return cloned;
    }
}

export default survey;