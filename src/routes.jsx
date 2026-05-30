import { createBrowserRouter } from "react-router";
import Root from "./layouts/Root";
import Registration from "./pages/Registration";

let router = createBrowserRouter([
  {
    Component: Root,
    children: [
      {
        path: "register",
        Component: Registration,
      },
    ],
  },
]);

export default router;
