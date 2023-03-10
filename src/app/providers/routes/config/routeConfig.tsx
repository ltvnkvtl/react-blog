import { RouteProps } from 'react-router-dom';
import { AppRoutes, routePath } from 'shared/models/route';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFountPage';
import { ProfilePage } from 'pages/ProfilePage';

export const routeConfig: Array<RouteProps> = [
    { path: routePath[AppRoutes.MAIN], element: <MainPage /> },
    { path: routePath[AppRoutes.ABOUT], element: <AboutPage /> },
    { path: routePath[AppRoutes.PROFILE], element: <ProfilePage /> },
    { path: routePath[AppRoutes.NOT_FOUND], element: <NotFoundPage /> },
];
