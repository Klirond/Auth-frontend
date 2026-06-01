import { createBrowserRouter } from "react-router";
import Root from "./layouts/Root";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ForgotPasswd from "./pages/ForgotPassword";
import SentVerificationLink from "./pages/SentVerificationLink";
import SentResetLink from "./pages/SentResetLink";
import ResetPassword from "./pages/ResetPassword";
import ConfirmationPage from "./pages/Confirmation";
import registration from "./actions/registration";
import login from "./actions/login";
import forgotPassword from "./actions/forgotPassword";
import reset from "./actions/reset";
import cancel from "./actions/cancel";
import confirmation from "./loader/confirmation";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "register",
        action: registration,
        Component: Registration,
      },
      {
        path: "login",
        action: login,
        Component: Login,
      },
      {
        path: "forgot-password",
        action: forgotPassword,
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
        action: reset,
        Component: ResetPassword,
      },
      {
        path: "cancel",
        loader: cancel,
        Component: (
          <TopSection
            title={"Operation canceled"}
            text={
              "Operation to change your password has been canceled. You can close this page safely now."
            }
          />
        ),
      },
      {
        path: "confirmation",
        Component: ConfirmationPage,
        loader: confirmation,
      },
    ],
  },
]);

export default router;
