import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice', () => {
    it('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'username' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('123123123'),
        )).toEqual({ username: '123123123' });
    });
    it('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'password' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123123123'),
        )).toEqual({ password: '123123123' });
    });
});
