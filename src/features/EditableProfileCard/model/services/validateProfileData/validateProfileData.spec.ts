import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'features/EditableProfileCard';
import { validateProfileData } from './validateProfileData';

const data = {
    first: 'Vitaly',
    lastname: 'Litovkin',
    currency: Currency.USD,
    country: Country.Georgia,
    city: 'Tbilisi',
    username: 'admin',
    age: 26,
};

describe('validateProfileData', () => {
    it('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    it('should return NO_DATA error', async () => {
        const result = validateProfileData(undefined);

        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });

    it('should return INCORRECT_USER_DATA error', async () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    it('should return INCORRECT_AGE error', async () => {
        const result = validateProfileData({
            ...data,
            age: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    it('should return INCORRECT_CITY error', async () => {
        const result = validateProfileData({
            ...data,
            city: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });

    it('should return multiple errors', async () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
            age: undefined,
            city: '',
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CITY,
        ]);
    });
});
