import { redirect } from "react-router";

export default async function resendLogouAllCode() {
  const API_URL = import.meta.env.VITE_API_URL;

  const response = await fetch(`${API_URL}/auth/request/logout-all`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const json = await response.json();

  if (json.status > 399 && json.status <= 599) {
    return redirect("/error");
  }

  return redirect("/logout-all-sent");
}
