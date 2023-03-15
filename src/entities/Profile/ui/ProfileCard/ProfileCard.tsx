import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextType } from 'shared/ui/Text/Text';
import { Button, ButtonType } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Profile } from '../../model/types/Profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
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
            />
            <Input
                className={cls.input}
                value={data?.lastname}
                placeholder={t('PROFILE.YOUR_SURNAME')}
            />
        </div>
    );
};
