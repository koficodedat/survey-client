import { SET_ANSWERS } from './types';

export const setAnswers = (answers) => dispatch => {
    dispatch({
        type: SET_ANSWERS,
        payload: {
            answers
        }
    })
}