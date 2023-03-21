import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import {
    EditableProfileCard,
    fetchProfileData,
    getProfileValidateErrors,
    profileReducer, ValidateProfileError,
} from 'features/EditableProfileCard';
import { useSelector } from 'react-redux';
import { Text, TextType } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from '../ui/ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const validateErrors = useSelector(getProfileValidateErrors);
    const validateErrorTranslates = {
        [ValidateProfileError.NO_DATA]: t('PROFILE.ERRORS.NO_DATA'),
        [ValidateProfileError.SERVER_ERROR]: t('PROFILE.ERRORS.SERVER_ERROR'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('PROFILE.ERRORS.INCORRECT_USER_DATA'),
        [ValidateProfileError.INCORRECT_AGE]: t('PROFILE.ERRORS.INCORRECT_AGE'),
        [ValidateProfileError.INCORRECT_CITY]: t('PROFILE.ERRORS.INCORRECT_CITY'),
    };

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text
                        type={TextType.ERROR}
                        text={validateErrorTranslates[err]}
                        key={err}
                    />
                ))}
                <EditableProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
