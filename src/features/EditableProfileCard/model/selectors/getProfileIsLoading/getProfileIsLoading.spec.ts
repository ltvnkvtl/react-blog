import { StateSchema } from 'app/providers/store';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileError', () => {
    it('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { isLoading: true },
        };

        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
    });
});
