import { StateSchema } from 'app/providers/store';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    it('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'password',
            },
        };

        expect(getLoginPassword(state as StateSchema)).toEqual('password');
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
