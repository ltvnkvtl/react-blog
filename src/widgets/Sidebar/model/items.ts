import React from 'react';
import { routePath } from 'shared/models/route';
import AboutIcon from 'shared/assets/icons/ic-list-badged.svg';
import MainIcon from 'shared/assets/icons/ic-home.svg';
import ProfileIcon from 'shared/assets/icons/ic-profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: Array<SidebarItemType> = [
    { path: routePath.main, Icon: MainIcon, text: 'ROUTES.MAIN' },
    { path: routePath.about, Icon: AboutIcon, text: 'ROUTES.ABOUT' },
    {
        path: routePath.profile, Icon: ProfileIcon, text: 'ROUTES.PROFILE', authOnly: true,
    },
];
