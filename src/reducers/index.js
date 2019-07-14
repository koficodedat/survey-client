import { combineReducers } from 'redux';

import profile from './profile';
import form from './form';
import survey from './survey';
import answer from './answer';
import pageable from './pageable';

export default combineReducers({
    profile,
    form,
    survey,
    answer,
    pageable,
});