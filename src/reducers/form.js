import clone from 'lodash.clonedeep';
import get from 'lodash.get';
import set from 'lodash.set';

import { uniqid } from '../utils/util';
import { UPDATE_LOGIN_INPUT, ADD_OPTION_TO_SURVEY_FORM, REMOVE_OPTION_FROM_SURVEY_FORM, UPDATE_SURVEY_INPUT, RESET_SURVEY_FORM } from '../actions/types';

import init_state from '../store/state';

const form = (state = init_state.forms, action) => {
    const cloned = clone(state);
    const { type, payload = {} } = action;
    const { id, path, value } = payload;

    let survey_options = [];

    switch(type){
        case UPDATE_LOGIN_INPUT:
            set(cloned, 'login.value', value);

            return cloned;
        case ADD_OPTION_TO_SURVEY_FORM:
            survey_options = get(cloned.survey, 'options', []);
            survey_options.push({
                _id: uniqid(),
                value: '',
            });

            return cloned;
        case REMOVE_OPTION_FROM_SURVEY_FORM:
                survey_options = get(cloned.survey, 'options', []);
                survey_options = survey_options.filter( option => option._id !== id );
    
                set(cloned.survey, 'options', survey_options);
    
                return cloned;
        case RESET_SURVEY_FORM:
            set(cloned, 'survey', {
                question: {
                    value: '',
                },
                options: [
                    {
                        _id: uniqid(),
                        value: '',
                    }
                ]
            });
            
            return cloned;
        case UPDATE_SURVEY_INPUT:
            set(cloned.survey, path, value);

            return cloned;
        default:
            return cloned;
    }
}

export default form;