import clone from 'lodash.clonedeep';

import profileReducer from '../../reducers/profile';
import { VALIDATE_PROFILE, UPDATE_PROFILE, SET_PROFILE, UNSET_PROFILE } from '../../actions/types';
import state from '../../store/state';


describe('Reducers: [pageable]', () => {
    beforeEach(() => {
        window.localStorage.removeItem('_name');
    });

    describe('VALIDATE_PROFILE reducer', () => {
        it('resolve to the correct state', () => {
            const action = {
                type: VALIDATE_PROFILE,
            };
            const expected = clone(state);
            expected.profile.hasUser = false;

            expect(profileReducer(clone(state).profile, action)).toEqual(expected.profile);
        });
    });

    describe('UPDATE_PROFILE reducer', () => {
        it('resolve to the correct state', () => {
            const name = 'A';
            const action = {
                type: UPDATE_PROFILE,
                payload: {
                    name
                }
            };
            const expected = clone(state);
            expected.profile.name = name;
            expected.profile.hasUser = true;

            expect(profileReducer(clone(state).profile, action)).toEqual(expected.profile);
        });
    });

    describe('SET_PROFILE reducer', () => {
        it('resolve to the correct state', () => {
            const action = {
                type: SET_PROFILE
            };
            const expected = clone(state);

            expect(profileReducer(clone(state).profile, action)).toEqual(expected.profile);
        });
    });

    describe('UNSET_PROFILE reducer', () => {
        it('resolve to the correct state', () => {
            const action = {
                type: UNSET_PROFILE
            };
            const expected = clone(state);

            expect(profileReducer(clone(state).profile, action)).toEqual(expected.profile);
        });
    });
});