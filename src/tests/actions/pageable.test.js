import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { setPageNumber, setPageSize } from '../../actions/pageable';
import { SET_PAGE_NUMBER, SET_PAGE_SIZE } from '../../actions/types';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('Actions: [pageable]', () => {
    beforeEach(() => {
        store.clearActions();
    });

    describe('setPageNumber actions', () => {
        it('dispatch the correct action and payload', () => {
            const number = 100;
            const expectedActions = [
                {
                    type: SET_PAGE_NUMBER,
                    payload: {
                        number
                    }
                },
            ];

            store.dispatch(setPageNumber(number));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('setPageSize actions', () => {
        it('dispatch the correct action and payload', () => {
            const size = 100;
            const expectedActions = [
                {
                    type: SET_PAGE_SIZE,
                    payload: {
                        size
                    }
                },
            ];

            store.dispatch(setPageSize(size));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});