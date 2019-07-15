import clone from 'lodash.clonedeep';

import surveyReducer from '../../reducers/survey';
import { TOGGLE_SURVEY_FORM, SET_SURVEYS, TOGGLE_SURVEY } from '../../actions/types';
import state from '../../store/state';


describe('Reducers: [answer]', () => {
    describe('TOGGLE_SURVEY_FORM reducer', () => {
        it('resolve to the correct state', () => {
            const action = {
                type: TOGGLE_SURVEY_FORM
            };
            const expected = clone(state);
            expected.survey.inCreate = true;

            expect(surveyReducer(clone(state).survey, action)).toEqual(expected.survey);
        });
    });

    describe('SET_SURVEYS reducer', () => {
        it('resolve to the correct state', () => {
            const surveys = ['A', 'B'];
            const action = {
                type: SET_SURVEYS,
                payload: {
                    surveys
                }
            };
            const expected = clone(state);
            expected.survey.items = surveys;

            expect(surveyReducer(clone(state).survey, action)).toEqual(expected.survey);
        });
    });

    describe('TOGGLE_SURVEY reducer', () => {
        it('resolve to the correct state', () => {
            const surveys = [{ _id: 'id' }];
            let expected = clone(state);
            expected.survey.items = surveys;
            expected.survey.items[0].show = true;
            const id = 0;

            const setSurveysAction = {
                type: SET_SURVEYS,
                payload: {
                    surveys: [{ _id: 'id' }]
                }
            };

            let cloned = clone(state);

            cloned.survey = surveyReducer(cloned.survey, setSurveysAction)

            const action = {
                type: TOGGLE_SURVEY,
                payload: {
                    id
                }
            };

            expect(surveyReducer(cloned.survey, action)).toEqual(expected.survey);
        });
    });
});