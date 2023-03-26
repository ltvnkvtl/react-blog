import { StateSchema } from 'app/providers/store';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    it('should return profile form', () => {
        const form = {
            first: 'Vitaly',
            lastname: 'Litovkin',
            currency: Currency.USD,
            country: Country.Georgia,
            city: 'Tbilisi',
            username: 'admin',
            age: 26,
        };
        const state: DeepPartial<StateSchema> = {
            profile: { form },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
