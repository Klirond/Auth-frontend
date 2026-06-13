import * as z from "zod";

export default async function deleteAccountRequest({ request }) {
  const accountValidation = z.object({
    email: z.email("Invalid email"),
    password: z.string(),
  });

  const data = await request.formData();

  const result = accountValidation.safeParse({
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

  const response = await fetch(`${API_URL}/auth/delete-account-request`, {
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

      return { success: false };
    }

    if (json.message.includes("email")) {
      document.getElementById("email-err").innerHTML = json.message;
    } else {
      document.getElementById("passwd-err").innerHTML = json.message;
    }

    return { success: false };
  } else {
    return {
      success: true,
      redirectionPage: "/delete-account-sent",
    };
  }
}
