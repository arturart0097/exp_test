import { RouteProps } from "react-router-dom";
import { MainPage } from "../../../pages/MainPage";
import { NotFoundPage } from "../../../pages/NotFoundPage";
import { InfoPage } from "../../../pages/InfoPage";

export enum AppRouter {
  MAIN = "main",
  INFO = "info",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRouter, string> = {
  [AppRouter.MAIN]: "/",
  [AppRouter.INFO]: "/info/:id",
  [AppRouter.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRouter, RouteProps> = {
  [AppRouter.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRouter.INFO]: {
    path: RoutePath.info,
    element: <InfoPage />,
  },
  [AppRouter.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
