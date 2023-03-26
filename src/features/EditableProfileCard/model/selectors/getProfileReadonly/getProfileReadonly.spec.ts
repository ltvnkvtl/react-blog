import { StateSchema } from 'app/providers/store';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
    it('should return profile readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { readonly: true },
        };

        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
