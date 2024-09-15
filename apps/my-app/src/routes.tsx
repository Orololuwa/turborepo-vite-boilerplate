import Home from "pages/home";
import { RouteObject } from "react-router-dom";
import myAppPackageRoute from "@repo/app-package/routes";

const routes: RouteObject[] = [
  {
    element: <Home />,
    path: "/",
  },
  ...myAppPackageRoute,
];

export default routes;
