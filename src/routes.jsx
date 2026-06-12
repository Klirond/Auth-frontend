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
import SentLogoutAllLink from "./pages/SentLogoutAllCode";
import resendLogouAllCode from "./loader/resendLogoutAllCode";

let router = createBrowserRouter([
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        index: true,
        loader: () => {
          const params = new URLSearchParams(document.location.search);
          const redirectionPage = params.get("redirectionPage");

          if (redirectionPage) {
            localStorage.setItem("redirect", redirectionPage);
          }

          return redirect("register/");
        },
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
        path: "logout-all-sent",
        Component: SentLogoutAllLink,
      },
      {
        path: "logout-all-resend",
        loader: resendLogouAllCode,
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
