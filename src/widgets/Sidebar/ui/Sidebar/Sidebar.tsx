import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonType } from 'shared/ui/Button/Button';
import { AppLink, AppLinkType } from 'shared/ui/AppLink/AppLink';
import { routePath } from 'shared/models/route';
import AboutIcon from 'shared/assets/icons/ic-list-badged.svg';
import MainIcon from 'shared/assets/icons/ic-home.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                buttonType={ButtonType.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
                onClick={onToggle}
                className={cls.collapseButton}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.routes}>
                <AppLink
                    className={cls.route}
                    type={AppLinkType.INVERTED}
                    to={routePath.main}
                >
                    <MainIcon className={cls.route__icon} />
                    <span className={cls.route__link}>
                        {t('ROUTES.MAIN')}
                    </span>
                </AppLink>
                <AppLink
                    className={cls.route}
                    type={AppLinkType.INVERTED}
                    to={routePath.about}
                >
                    <AboutIcon className={cls.route__icon} />
                    <span className={cls.route__link}>
                        {t('ROUTES.ABOUT')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
