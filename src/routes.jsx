import { createBrowserRouter, redirect, useLoaderData } from "react-router-dom";
import AuthLayout from "./layouts/Root";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ForgotPasswd from "./pages/ForgotPassword";
import SentVerificationLink from "./pages/SentVerificationLink";
import SentResetLink from "./pages/SentResetLink";
import ResetPassword from "./pages/ResetPassword";
import ConfirmationPage from "./pages/Confirmation";
import { TopSection } from "klirond-ui-components";
import registration from "./actions/registration";
import login from "./actions/login";
import forgotPassword from "./actions/forgotPassword";
import reset from "./actions/reset";
import confirmation from "./loader/confirmation";
import cancel from "./loader/cancel";
import resendVerification from "./loader/resendVerification";
import resendReset from "./loader/resendReset";

let router = createBrowserRouter([
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        index: true,
        loader: () => redirect("register/"),
      },
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
        path: "resend-verification",
        loader: resendVerification,
      },
      {
        path: "reset-sent",
        Component: SentResetLink,
      },
      {
        path: "resend-reset",
        loader: resendReset,
      },
      {
        path: "reset",
        action: reset,
        Component: ResetPassword,
      },
      {
        path: "cancel",
        Component: () => {
          const { messageTitle, messageText } = useLoaderData();

          return <TopSection title={messageTitle} text={messageText} />;
        },
        loader: cancel,
      },
      {
        path: "confirmation",
        Component: ConfirmationPage,
        loader: confirmation,
      },
      {
        path: "error",
        Component: () => (
          <TopSection
            title={"An unexpected error occured"}
            text={
              "Please go back and try again. If error persists, try logging out or cancel and redo the operation."
            }
          />
        ),
      },
      {
        path: "*",
        Component: () => <TopSection title={"Page not found"} text={""} />,
      },
    ],
  },
]);

export default router;
