import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { updateLoginInput, addOptionToSurveyForm, removeOptionFromSurveyForm, resetSurveyForm, updateSurveyInput } from '../../actions/form';
import { UPDATE_LOGIN_INPUT, ADD_OPTION_TO_SURVEY_FORM, REMOVE_OPTION_FROM_SURVEY_FORM, RESET_SURVEY_FORM, UPDATE_SURVEY_INPUT } from '../../actions/types';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('Actions: [form]', () => {
    beforeEach(() => {
        store.clearActions();
    });

    describe('updateLoginInput actions', () => {
        it('dispatch the correct action and payload', () => {
            const value = 'A';
            const expectedActions = [
                {
                    type: UPDATE_LOGIN_INPUT,
                    payload: {
                        value
                    }
                },
            ];

            store.dispatch(updateLoginInput(value));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('addOptionToSurveyForm actions', () => {
        it('dispatch the correct action and payload', () => {
            const expectedActions = [
                {
                    type: ADD_OPTION_TO_SURVEY_FORM,
                },
            ];

            store.dispatch(addOptionToSurveyForm());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('removeOptionFromSurveyForm actions', () => {
        it('dispatch the correct action and payload', () => {
            const id = 'A';
            const expectedActions = [
                {
                    type: REMOVE_OPTION_FROM_SURVEY_FORM,
                    payload: {
                        id
                    }
                },
            ];

            store.dispatch(removeOptionFromSurveyForm(id));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('resetSurveyForm actions', () => {
        it('dispatch the correct action and payload', () => {
            const expectedActions = [
                {
                    type: RESET_SURVEY_FORM,
                },
            ];

            store.dispatch(resetSurveyForm());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('updateSurveyInput actions', () => {
        it('dispatch the correct action and payload', () => {
            const path = 'A';
            const value = 'A';
            const expectedActions = [
                {
                    type: UPDATE_SURVEY_INPUT,
                    payload: {
                        path,
                        value,
                    }
                },
            ];

            store.dispatch(updateSurveyInput(path, value));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});