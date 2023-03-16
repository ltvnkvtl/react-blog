import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonType } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'features/EditableProfileCard';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text className={cls.title} title={t('PROFILE.TITLE')} />

            { readonly ? (
                <Button
                    className={cls.editBtn}
                    buttonType={ButtonType.OUTLINE}
                    onClick={onEdit}
                >
                    {t('PROFILE.EDIT')}
                </Button>
            ) : (
                <>
                    <Button
                        className={cls.editBtn}
                        buttonType={ButtonType.OUTLINE_DANGEROUS}
                        onClick={onCancelEdit}
                    >
                        {t('PROFILE.CANCEL_EDIT')}
                    </Button>
                    <Button
                        className={cls.editBtn}
                        buttonType={ButtonType.OUTLINE}
                        onClick={onSave}
                    >
                        {t('PROFILE.SAVE')}
                    </Button>
                </>
            )}
        </div>
    );
};
