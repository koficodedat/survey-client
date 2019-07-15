import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { validateProfile, updateProfile, setProfile, unsetProfile } from '../../actions/profile';
import { VALIDATE_PROFILE, UPDATE_PROFILE, SET_PROFILE, UNSET_PROFILE } from '../../actions/types';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('Actions: [profile]', () => {
    beforeEach(() => {
        store.clearActions();
    });

    describe('validateProfile actions', () => {
        it('dispatch the correct action and payload', () => {
            const expectedActions = [
                {
                    type: VALIDATE_PROFILE
                },
            ];

            store.dispatch(validateProfile());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('updateProfile actions', () => {
        it('dispatch the correct action and payload', () => {
            const name = 'A';
            const expectedActions = [
                {
                    type: UPDATE_PROFILE,
                    payload: {
                        name
                    }
                },
            ];

            store.dispatch(updateProfile(name));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('setProfile actions', () => {
        it('dispatch the correct action and payload', () => {
            const expectedActions = [
                {
                    type: SET_PROFILE
                },
            ];

            store.dispatch(setProfile());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('unsetProfile actions', () => {
        it('dispatch the correct action and payload', () => {
            const history = {
                push: () => {}
            };
            const expectedActions = [
                {
                    type: UNSET_PROFILE
                },
            ];

            store.dispatch(unsetProfile(history));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});