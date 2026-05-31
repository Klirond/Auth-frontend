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
        path: "confirmation",
        Component: ConfirmationPage,
        loader: ({ request }) => {
          const API_URL = import.meta.env.VITE_API_URL;

          const url = new URL(request.url);
          const searchParams = url.searchParams;

          const redirectionPage = searchParams.get("redirect");
          const code = searchParams.get("code");

          console.log(code, redirectionPage);

          if (
            !redirectionPage ||
            !code ||
            code.length !== 6 ||
            (redirectionPage !== "login" && redirectionPage !== "reset")
          ) {
            return {
              messageTitle: "An error occured",
              messageText: "Invalid verification link",
            };
          }

          let API_LINK =
            redirectionPage === "login" ? "verify" : "reset-password-token";

          return fetch(`${API_URL}/auth/${API_LINK}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              code,
            }),
          })
            .then((response) => response.json())
            .then((result) => {
              const messageTitle =
                result.status > 399 && result.status <= 599
                  ? "An error occured"
                  : "You are going to be redirected";

              const messageText = result.message;

              return {
                status: result.status,
                redirectionPage,
                messageTitle,
                messageText,
              };
            });
        },
      },
    ],
  },
]);

export default router;
