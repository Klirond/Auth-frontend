import { createBrowserRouter } from "react-router";
import Root from "./layouts/Root";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ForgotPasswd from "./pages/ForgotPassword";
import SentVerificationLink from "./pages/SentVerificationLink";

let router = createBrowserRouter([
  {
    Component: Root,
    children: [
      {
        path: "register",
        Component: Registration,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "forgot-password",
        Component: ForgotPasswd,
      },
      {
        path: "verification-sent",
        Component: SentVerificationLink,
      },
    ],
  },
]);

export default router;
