import { redirect } from "react-router";

export default async function resendVerification() {
  const email = sessionStorage.getItem("temp-session-user-email");

  const API_URL = import.meta.env.VITE_API_URL;

  const response = await fetch(`${API_URL}/auth/resend`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  });

  const json = await response.json();

  if (json.status > 399 && json.status <= 599) {
    return redirect("/error");
  }

  return redirect("/verification-sent");
}
