import { StateSchema } from 'app/providers/store';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    it('should return error', () => {
        const error = 'error';
        const state: DeepPartial<StateSchema> = {
            profile: { error },
        };

        expect(getProfileError(state as StateSchema)).toEqual(error);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
