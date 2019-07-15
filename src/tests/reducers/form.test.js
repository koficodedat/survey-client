import clone from 'lodash.clonedeep';

import formReducer from '../../reducers/form';
import { UPDATE_LOGIN_INPUT, ADD_OPTION_TO_SURVEY_FORM, REMOVE_OPTION_FROM_SURVEY_FORM, RESET_SURVEY_FORM, UPDATE_SURVEY_INPUT } from '../../actions/types';
import state from '../../store/state';


describe('Reducers: [form]', () => {
    describe('UPDATE_LOGIN_INPUT reducer', () => {
        it('resolve to the correct state', () => {
            const value = 'A';
            const action = {
                type: UPDATE_LOGIN_INPUT,
                payload: {
                    value
                }
            };
            const expected = clone(state);
            expected.form.login.value = value;

            expect(formReducer(clone(state).form, action)).toEqual(expected.form);
        });
    });

    describe('ADD_OPTION_TO_SURVEY_FORM reducer', () => {
        it('resolve to the correct state', () => {
            const action = {
                type: ADD_OPTION_TO_SURVEY_FORM
            };
            let expected = clone(state);

            expected.form = formReducer(expected.form, action);

            expect(expected.form.survey.options.length).toEqual(2);
        });
    });

    describe('REMOVE_OPTION_FROM_SURVEY_FORM reducer', () => {
        it('resolve to the correct state', () => {
            let expected = clone(state);
            const id = expected.form.survey.options[0]._id;

            const action = {
                type: REMOVE_OPTION_FROM_SURVEY_FORM,
                payload: {
                    id
                }
            };

            expected.form = formReducer(expected.form, action);

            expect(expected.form.survey.options.length).toEqual(0);
        });
    });

    describe('RESET_SURVEY_FORM reducer', () => {
        it('resolve to the correct state', () => {
            let expected = clone(state);
            const id = expected.form.survey.options[0]._id;

            const action = {
                type: RESET_SURVEY_FORM
            };

            expected.form = formReducer(expected.form, action);

            expect(expected.form.survey.options.length).toEqual(1);
            expect(expected.form.survey.options[0]._d).not.toEqual(id);
        });

        describe('UPDATE_SURVEY_INPUT reducer', () => {
            it('resolve to the correct state', () => {
                const path = 'question';
                const value = 'A';
                const action = {
                    type: UPDATE_SURVEY_INPUT,
                    payload: {
                        path,
                        value
                    }
                };
                const expected = clone(state);
                expected.form.survey.question = value;
    
                expect(formReducer(clone(state).form, action)).toEqual(expected.form);
            });
        });
    });
});