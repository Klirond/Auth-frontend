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
        Component: ResetPassword,
      },
      {
        path: "confirmation",
        Component: ConfirmationPage,
        loader: ({ request }) => {
          const API_URL = import.meta.env.VITE_API_URL;

          const url = new URL(request.url);
          const searchParams = url.searchParams;
          const code = searchParams.get("code");

          if (!code || code.length !== 6) {
            return {
              messageTitle: "An error occured",
              messageText: "Invalid verification link"
            }
          }

          return fetch(`${API_URL}/auth/verify`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              code,
            }),
          }).then(response => response.json()).then(result => {
            const messageTitle =
              result.status > 399 && result.status <= 599
                ? "An error occured"
                : "You are going to be redirected";

            const messageText = result.message;

            return {
              status: result.status,
              messageTitle,
              messageText
            }
          })

        },
      },
    ],
  },
]);

export default router;
