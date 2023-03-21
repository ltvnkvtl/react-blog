import { Profile } from 'entities/Profile';
import { ValidateProfileError } from './ValidateProfileError';

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    error?: string;
    validateErrors?: ValidateProfileError[];
    isLoading: boolean;
    readonly: boolean;
}
