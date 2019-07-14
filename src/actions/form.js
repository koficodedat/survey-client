import { UPDATE_LOGIN_INPUT, ADD_OPTION_TO_SURVEY_FORM, REMOVE_OPTION_FROM_SURVEY_FORM, UPDATE_SURVEY_INPUT, RESET_SURVEY_FORM } from './types';

export const updateLoginInput = (value) => dispatch => {
    dispatch({
        type: UPDATE_LOGIN_INPUT,
        payload: {
            value,
        }
    })
}

export const addOptionToSurveyForm = () => dispatch => {
    dispatch({
        type: ADD_OPTION_TO_SURVEY_FORM
    })
}

export const removeOptionFromSurveyForm = (id) => dispatch => {
    dispatch({
        type: REMOVE_OPTION_FROM_SURVEY_FORM,
        payload: {
            id
        }
    })
}

export const resetSurveyForm = () => dispatch => {
    dispatch({
        type: RESET_SURVEY_FORM
    })
}

export const updateSurveyInput = (path, value) => dispatch => {
    dispatch({
        type: UPDATE_SURVEY_INPUT,
        payload: {
            path,
            value,
        }
    })
}