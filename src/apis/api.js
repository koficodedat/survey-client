import ax from 'axios';
import get from 'lodash.get';

import { SAVE_PROFILE, SAVE_SURVEY, FETCH_SURVEYS, SAVE_ANSWER, UPDATE_ANSWER, FETCH_ANSWERS } from '../actions/types';
import { updateProfile } from '../actions/profile';
import { setSurveys } from '../actions/survey';
import { setAnswers } from '../actions/answer';
import { resetSurveyForm } from '../actions/form';

export const saveProfile = () => (dispatch, getState) => {
    const name = get(getState(), ['form', 'login', 'value'], null);

    if( name !== null ) {
        return ax.post(`/user/${name}`)
            .then(
                () => {
                    dispatch({ type: SAVE_PROFILE });
                    dispatch(updateProfile(name));
                }
            )
            .catch( error => console.error(error) )
    }
}

export const saveSurvey = () => (dispatch, getState) => {
    let survey = get(getState(), ['form', 'survey'], {});

    const options = survey.options.filter( option => option.value !== '' );

    if( 
        survey !== {} && 
        survey.question.value !== '' && 
        options.length !== 0 
    ) {
        survey = {
            ...survey,
            options
        };

        return ax.post(`/survey`, survey)
            .then(
                () => {
                    dispatch({ type: SAVE_SURVEY });
                    dispatch(resetSurveyForm());
                    dispatch(fetchSurveys());
                }
            )
            .catch( error => console.error(error) )
    }
}

export const fetchSurveys = () => dispatch => {
    return ax.get(`/survey`)
        .then(
            response => {
                dispatch({ type: FETCH_SURVEYS });
                dispatch(setSurveys(response.data));
            }
        )
        .catch( error => console.error(error) )
}

export const saveAnswer = (survey_id, option_id) => (dispatch, getState) => {
    let name = get(getState(), ['profile', 'name'], null);
    let answers = get(getState(), ['answer', 'items'], []);
    let answer_exists = answers.find( answer => `${answer.name}_${answer.survey_id}` === `${name}_${survey_id}` );

    if( name !== null ){
        if( answer_exists ){
            return ax.put(`/answer?ids=${name}_${survey_id}`, { name, survey_id, option_id })
                .then(
                    () => {
                        dispatch({ type: UPDATE_ANSWER });
                        dispatch(fetchAnswers());
                    }
                )
                .catch( error => console.error(error) )
        }
        else {
            return ax.post(`/answer`, { name, survey_id, option_id })
                .then(
                    () => {
                        dispatch({ type: SAVE_ANSWER });
                        dispatch(fetchAnswers());
                    }
                )
                .catch( error => console.error(error) )
        }
    }
}

export const fetchAnswers = () => dispatch => {
    return ax.get(`/answer`)
        .then(
            response => {
                dispatch({ type: FETCH_ANSWERS });
                dispatch(setAnswers(response.data));
            }
        )
        .catch( error => console.error(error) )
}