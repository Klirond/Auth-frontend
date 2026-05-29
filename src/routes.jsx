import { createBrowserRouter } from "react-router";
import Root from "./layouts/Root";

let router = createBrowserRouter([
  {
    Component: Root,
    children: [
      {
        path: "register",
        Component: () => <p>Hello this is registration</p>,
      },
    ],
  },
]);

export default router;
