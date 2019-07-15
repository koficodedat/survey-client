import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { toggleSurveyForm, setSurveys, toggleSurvey } from '../../actions/survey';
import { TOGGLE_SURVEY_FORM, SET_SURVEYS, TOGGLE_SURVEY } from '../../actions/types';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('Actions: [survey]', () => {
    beforeEach(() => {
        store.clearActions();
    });

    describe('toggleSurveyForm actions', () => {
        it('dispatch the correct action and payload', () => {
            const expectedActions = [
                {
                    type: TOGGLE_SURVEY_FORM
                },
            ];

            store.dispatch(toggleSurveyForm());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('setSurveys actions', () => {
        it('dispatch the correct action and payload', () => {
            const surveys = ['A', 'B'];
            const expectedActions = [
                {
                    type: SET_SURVEYS,
                    payload: {
                        surveys
                    }
                },
            ];

            store.dispatch(setSurveys(surveys));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('toggleSurvey actions', () => {
        it('dispatch the correct action and payload', () => {
            const id = 'A';
            const expectedActions = [
                {
                    type: TOGGLE_SURVEY,
                    payload: {
                        id
                    }
                },
            ];

            store.dispatch(toggleSurvey(id));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});