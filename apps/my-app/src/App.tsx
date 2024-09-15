import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "routes";

export default function App() {
  const routesHere = useRoutes(routes);

  return <Suspense fallback={<div>loading...</div>}>{routesHere}</Suspense>;
}
