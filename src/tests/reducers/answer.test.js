import clone from 'lodash.clonedeep';

import answerReducer from '../../reducers/answer';
import { SET_ANSWERS } from '../../actions/types';
import state from '../../store/state';


describe('Reducers: [answer]', () => {
    describe('SET_ANSWERS reducer', () => {
        it('resolve to the correct state', () => {
            const answers = ['A', 'B'];
            const action = {
                type: SET_ANSWERS,
                payload: {
                    answers
                }
            };
            const expected = clone(state);
            expected.answer.items = answers;

            expect(answerReducer(clone(state).answer, action)).toEqual(expected.answer);
        });
    })
});