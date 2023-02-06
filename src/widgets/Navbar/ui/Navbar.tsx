import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {AppLink, AppLinkType} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink type={AppLinkType.SECONDARY} to={'/'} className={cls.mainLink}>Главная</AppLink>
        <AppLink type={AppLinkType.SECONDARY} to={'/about'}>О сайте</AppLink>
      </div>

    </div>
  );
};
