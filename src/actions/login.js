import { redirect } from "react-router";
import * as z from "zod";

export default async function login({ request }) {
  const loginValidation = z.object({
    email: z.email("Inalid email"),
    password: z.string(),
  });

  const data = await request.formData();

  const result = loginValidation.safeParse({
    email: data.get("email"),
    password: data.get("password"),
  });

  if (!result.success) {
    const error = z.flattenError(result.error).fieldErrors;

    document.getElementById("email-err").innerHTML = error.email
      ? error.email
      : "";
    document.getElementById("passwd-err").innerHTML = error.password
      ? error.password
      : "";

    return;
  }

  document.getElementById("email-err").innerHTML = "";
  document.getElementById("passwd-err").innerHTML = "";

  const { email, password } = result.data;

  const API_URL = import.meta.env.VITE_API_URL;

  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
    credentials: "include",
  });

  const json = await response.json();

  if (json.status > 399 && json.status <= 599) {
    if (!json.message) {
      document.getElementById("passwd-err").innerHTML =
        "An error occured. Please try again";

      return;
    }

    if (json.message.includes("email")) {
      document.getElementById("email-err").innerHTML = json.message;
    } else {
      document.getElementById("passwd-err").innerHTML = json.message;
    }

    return;
  } else {
    const redirectionPage = sessionStorage.getItem("redirect");
    if (redirectionPage) {
      return redirect(redirectionPage);
    }

    return redirect("/sucess");
  }
}
