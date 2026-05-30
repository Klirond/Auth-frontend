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

let router = createBrowserRouter([
  {
    Component: Root,
    children: [
      {
        path: "register",
        action: registration,
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
        loader: async ({ request }) => {
          const API_URL = import.meta.env.VITE_API_URL;

          const url = new URL(request.url);
          const searchParams = url.searchParams;
          const code = searchParams.get("code");

          if (!code || code.length < 6) {
            return {
              messageTitle: "An error occured",
              message: "Invalid verification link",
            };
          }

          const response = await fetch(`${API_URL}/auth/verify`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              code,
            }),
          });

          const json = await response.json();

          const messageTitle =
            json.status > 399 && json.status <= 599
              ? "An error occured"
              : "You are being redirected";

          const message = json.message;

          return { messageTitle, message };
        },
        Component: ConfirmationPage,
      },
    ],
  },
]);

export default router;
