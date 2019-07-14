import { TOGGLE_SURVEY_FORM, SET_SURVEYS, TOGGLE_SURVEY } from './types';

export const toggleSurveyForm = () => dispatch => {
    dispatch({
        type: TOGGLE_SURVEY_FORM
    })
}

export const setSurveys = (surveys) => dispatch => {
    dispatch({
        type: SET_SURVEYS,
        payload: {
            surveys
        }
    })
}

export const toggleSurvey = id => dispatch => {
    dispatch({
        type: TOGGLE_SURVEY,
        payload: {
            id
        }
    })
}