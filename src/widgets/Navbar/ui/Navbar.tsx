import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkType } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink type={AppLinkType.SECONDARY} to="/" className={cls.mainLink}>Главная</AppLink>
            <AppLink type={AppLinkType.SECONDARY} to="/about">О сайте</AppLink>
        </div>

    </div>
);
