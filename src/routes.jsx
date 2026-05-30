import { createBrowserRouter } from "react-router";
import Root from "./layouts/Root";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ForgotPasswd from "./pages/ForgotPassword";
import SentVerificationLink from "./pages/SentVerificationLink";
import SentResetLink from "./pages/SentResetLink";
import ResetPassword from "./pages/ResetPassword";
import ConfirmationPage from "./pages/Confirmation";

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
      {
        path: "reset-sent",
        Component: SentResetLink,
      },
      {
        path: "reset",
        Component: ResetPassword,
      },
      {
        path: "confirmation",
        Component: ConfirmationPage,
      },
    ],
  },
]);

export default router;
