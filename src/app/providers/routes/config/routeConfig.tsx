import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {AppRoutes, routePath} from "shared/models/route";

export const routeConfig: Array<RouteProps> = [
  { path: routePath[AppRoutes.MAIN], element: <MainPage/> },
  { path: routePath[AppRoutes.ABOUT], element: <AboutPage/> },
];
