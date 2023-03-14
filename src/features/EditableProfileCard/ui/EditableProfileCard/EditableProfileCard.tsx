import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ProfileCard } from 'entities/Profile';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import cls from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
  className?: string;
}

export const EditableProfileCard = (props: EditableProfileCardProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.EditableProfileCard, {}, [className])}>
            <ProfileCard data={data} isLoading={isLoading} error={error} />
        </div>
    );
};
