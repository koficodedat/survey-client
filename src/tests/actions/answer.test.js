import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { setAnswers } from '../../actions/answer';
import { SET_ANSWERS } from '../../actions/types';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('Actions: [answer]', () => {
    beforeEach(() => {
        store.clearActions();
    });

    describe('setAnswers actions', () => {
        it('dispatch the correct action and payload', () => {
            const answers = ['A', 'B'];
            const expectedActions = [
                {
                    type: SET_ANSWERS,
                    payload: {
                        answers
                    }
                },
            ];

            store.dispatch(setAnswers(answers));
            expect(store.getActions()).toEqual(expectedActions);
        });
    })
});