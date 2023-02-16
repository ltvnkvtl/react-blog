import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkType } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink type={AppLinkType.SECONDARY} to="/" className={cls.mainLink}>
                    {t('ROUTES.MAIN')}
                </AppLink>
                <AppLink type={AppLinkType.SECONDARY} to="/about">
                    {t('ROUTES.ABOUT')}
                </AppLink>
            </div>

        </div>
    );
};
