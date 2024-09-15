import { RouteObject } from "react-router-dom";
import App from "./App";
import Step1 from "./pages/step-1";
import Step2 from "./pages/step-2";

const routes: RouteObject[] = [
  {
    path: "/app-package",
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "step-1",
        element: <Step1 />,
      },
      {
        path: "step-2",
        element: <Step2 />,
      },
    ],
  },
];

export default routes;
