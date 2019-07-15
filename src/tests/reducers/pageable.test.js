import clone from 'lodash.clonedeep';

import pageableReducer from '../../reducers/pageable';
import { SET_PAGE_NUMBER, SET_PAGE_SIZE } from '../../actions/types';
import state from '../../store/state';


describe('Reducers: [pageable]', () => {
    describe('SET_PAGE_NUMBER reducer', () => {
        it('resolve to the correct state', () => {
            const number = 2;
            const action = {
                type: SET_PAGE_NUMBER,
                payload: {
                    number
                }
            };
            const expected = clone(state);
            expected.pageable.number = number;

            expect(pageableReducer(clone(state).pageable, action)).toEqual(expected.pageable);
        });
    });

    describe('SET_PAGE_SIZE reducer', () => {
        it('resolve to the correct state', () => {
            const size = 6;
            const action = {
                type: SET_PAGE_SIZE,
                payload: {
                    size
                }
            };
            const expected = clone(state);
            expected.pageable.size = size;

            expect(pageableReducer(clone(state).pageable, action)).toEqual(expected.pageable);
        });
    });
});