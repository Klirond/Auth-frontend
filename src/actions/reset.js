import * as z from "zod";
import { redirect } from "react-router";

export default async function reset({ request }) {
  const passwordValidation = z.object({
    password: z
      .string()
      .min(6, "A password should contain 6 characters or more"),
  });

  const data = await request.formData();

  const result = passwordValidation.safeParse({
    password: data.get("password"),
  });

  if (!result.success) {
    const error = z.flattenError(result.error).fieldErrors;

    document.getElementById("passwd-err").innerHTML = error.password
      ? error.password
      : "";

    return;
  }

  document.getElementById("passwd-err").innerHTML = "";

  if (
    document.getElementById("password").value !==
    document.getElementById("confirm-password").value
  ) {
    document.getElementById("passwd-conf-err").innerHTML =
      "Passwords don't match. Please retype password.";

    return;
  }

  document.getElementById("passwd-conf-err").innerHTML = "";

  const { password } = result.data;

  const API_URL = import.meta.env.VITE_API_URL;

  const response = await fetch(`${API_URL}/auth/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
    }),
    credentials: "include",
  });

  const json = await response.json();

  console.log(json);

  if (json.status > 399 && json.status <= 599) {
    if (!json.message) {
      document.getElementById("passwd-conf-err").innerHTML =
        "An error occured. Please try again";

      return;
    }

    document.getElementById("passwd-conf-err").innerHTML = json.message.token
      ? json.message.token[0]
      : json.message;
    return;
  } else {
    return redirect("/success");
  }
}
