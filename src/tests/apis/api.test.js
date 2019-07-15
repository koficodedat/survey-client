import ax from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import clone from 'lodash.clonedeep';

import state from '../../store/state';
import { saveProfile, saveSurvey, fetchSurveys, saveAnswer, fetchAnswers } from '../../apis/api';
import { SAVE_PROFILE, UPDATE_PROFILE, RESET_SURVEY_FORM, SAVE_SURVEY, FETCH_SURVEYS, SET_SURVEYS, SAVE_ANSWER, FETCH_ANSWERS, SET_ANSWERS } from '../../actions/types';

const mockStore = configureStore([thunk]);
let store = mockStore(state);

jest.mock('axios');

describe('APIs', () => {
    beforeEach(() => {
        ax.get.mockImplementation( () => Promise.resolve({ data: ['Some Data'] }) );
        ax.post.mockImplementation( () => Promise.resolve({}) );
        ax.put.mockImplementation( () => Promise.resolve({}) );
        store.clearActions();
    });

    describe('saveProfile actions', () => {
        it('dispatch the correct action and payload', () => {
            let cloned = clone(state);
            cloned.form.login.value = 'Kofi'

            store = mockStore(cloned);

            const expectedActions = [
                {
                    type: SAVE_PROFILE
                },
                {
                    type: UPDATE_PROFILE,
                    payload: {
                        name: 'Kofi'
                    }
                }
            ];

            store.dispatch(saveProfile())
                .then( () => expect(store.getActions()).toEqual(expectedActions) );
        });
    });

    describe('saveSurvey actions', () => {
        it('dispatch the correct action and payload', () => {
            let cloned = clone(state);
            cloned.form.survey.question = { value: 'A' }
            cloned.form.survey.options[0].value = 'A'

            store = mockStore(cloned);

            const expectedActions = [
                {
                    type: SAVE_SURVEY
                },
                {
                    type: RESET_SURVEY_FORM
                },
                {
                    type: FETCH_SURVEYS,
                },
                {
                    type: SET_SURVEYS,
                    payload: {
                        surveys: ['Some Data']
                    }
                }
            ];

            store.dispatch(saveSurvey())
                .then( () => expect(store.getActions()).toEqual(expectedActions) );
        });
    });

    describe('fetchSurveys actions', () => {
        it('dispatch the correct action and payload', () => {
            const expectedActions = [
                {
                    type: FETCH_SURVEYS,
                },
                {
                    type: SET_SURVEYS,
                    payload: {
                        surveys: ['Some Data']
                    }
                }
            ];

            store.dispatch(fetchSurveys())
                .then( () => expect(store.getActions()).toEqual(expectedActions) );
        });
    });

    describe('saveAnswer actions', () => {
        it('dispatch the correct action and payload', () => {
            let cloned = clone(state);
            cloned.profile.name = 'A';
            cloned.answer.items = [];
            
            store = mockStore(cloned);

            const survey_id = 'A';
            const option_id = 'A';
            const expectedActions = [
                {
                    type: SAVE_ANSWER
                },
                {
                    type: FETCH_ANSWERS
                },
                {
                    type: SET_ANSWERS,
                    payload: {
                        answers: ['Some Data']
                    }
                }
            ];

            store.dispatch(saveAnswer(survey_id, option_id))
                .then( () => expect(store.getActions()).toEqual(expectedActions) );
        });
    });

    describe('fetchAnswers actions', () => {
        it('dispatch the correct action and payload', () => {
            const expectedActions = [
                {
                    type: FETCH_ANSWERS
                },
                {
                    type: SET_ANSWERS,
                    payload: {
                        answers: ['Some Data']
                    }
                }
            ];

            store.dispatch(fetchAnswers())
                .then( () => expect(store.getActions()).toEqual(expectedActions) );
        });
    });
});