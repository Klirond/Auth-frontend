import { redirect } from "react-router";
import * as z from "zod";

export default async function forgotPassword({ request }) {
  const emailValidation = z.object({
    email: z.email("Invalid email"),
  });

  const data = await request.formData();

  const result = emailValidation.safeParse({
    email: data.get("email"),
  });

  if (!result.success) {
    const error = z.flattenError(result.error).fieldErrors;

    document.getElementById("email-err").innerHTML = error.email
      ? error.email
      : "";

    return;
  }

  document.getElementById("email-err").innerHTML = "";

  const { email } = result.data;

  const API_URL = import.meta.env.VITE_API_URL;

  const response = await fetch(`${API_URL}/auth/forgot-password`, {
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
    if (!json.message) {
      document.getElementById("email-err").innerHTML =
        "An error occured. Please try again";

      return;
    }

    document.getElementById("email-err").innerHTML = json.message;

    return;
  } else {
    return redirect("/reset-sent");
  }
}
