import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextType } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Profile } from '../../model/types/Profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    type={TextType.ERROR}
                    title={t('PROFILE.ERRORS.FAILED_TO_DOWNLOAD')}
                    text={t('PROFILE.ERRORS.RELOAD_PAGE')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <Input
                className={cls.input}
                value={data?.first}
                placeholder={t('PROFILE.YOUR_NAME')}
                readonly={readonly}
                onChange={onChangeFirstname}
            />
            <Input
                className={cls.input}
                value={data?.lastname}
                placeholder={t('PROFILE.YOUR_SURNAME')}
                readonly={readonly}
                onChange={onChangeLastname}
            />
            <Input
                className={cls.input}
                value={data?.age}
                placeholder={t('PROFILE.YOUR_AGE')}
                type="number"
                readonly={readonly}
                onChange={onChangeAge}
            />
            <Input
                className={cls.input}
                value={data?.city}
                placeholder={t('PROFILE.CITY')}
                readonly={readonly}
                onChange={onChangeCity}
            />
        </div>
    );
};
