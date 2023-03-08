import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkType } from 'shared/ui/AppLink/AppLink';
import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        item,
        collapsed,
    } = props;
    const { t } = useTranslation();

    return (
        <AppLink
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            type={AppLinkType.INVERTED}
            to={item.path}
        >
            <item.Icon className={cls.item__icon} />
            <span className={cls.item__link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
