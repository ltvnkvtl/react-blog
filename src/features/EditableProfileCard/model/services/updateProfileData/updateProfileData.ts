import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { Profile } from 'entities/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const formData = getProfileForm(getState());

        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (e) {
            return rejectWithValue(`update profile error: ${e}`);
        }
    },
);
