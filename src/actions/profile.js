import { VALIDATE_PROFILE, UPDATE_PROFILE, SET_PROFILE, UNSET_PROFILE } from './types';

export const validateProfile = () => dispatch => {
    dispatch({
        type: VALIDATE_PROFILE
    })
}

export const updateProfile = name => dispatch => {
    dispatch({
        type: UPDATE_PROFILE,
        payload: {
            name
        }
    })
}

export const setProfile = () => dispatch => {
    dispatch({ type: SET_PROFILE })
}

export const unsetProfile = (history) => dispatch => {
    dispatch({ type: UNSET_PROFILE });
    history.push('/login');
}