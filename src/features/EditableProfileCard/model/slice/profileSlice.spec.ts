import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData, ValidateProfileError } from 'features/EditableProfileCard';
import { ProfileSchema } from '../types/ProfileSchema';
import { profileActions, profileReducer } from '../slice/profileSlice';

const data = {
    first: 'Vitaly',
    lastname: 'Litovkin',
    currency: Currency.USD,
    country: Country.Georgia,
    city: 'Tbilisi',
    username: 'admin',
    age: 26,
};

describe('profileSlice', () => {
    it('test set username', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    it('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
            readonly: false,
            validateErrors: [],
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    it('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    it('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            data: { username: '123' },
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            data,
            form: data,
        });
    });
});
