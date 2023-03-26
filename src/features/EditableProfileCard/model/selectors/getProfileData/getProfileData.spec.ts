import { StateSchema } from 'app/providers/store';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    it('should return profile data', () => {
        const data = {
            first: 'Vitaly',
            lastname: 'Litovkin',
            currency: Currency.USD,
            country: Country.Georgia,
            city: 'Tbilisi',
            username: 'admin',
            age: 26,
        };
        const state: DeepPartial<StateSchema> = {
            profile: { data },
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
