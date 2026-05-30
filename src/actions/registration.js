import * as z from "zod";

export default async function registration({ request }) {
  const registrationValidation = z.object({
    username: z
      .string()
      .min(4, "A username should contain 4 or more characters"),
    email: z.email("Invalid email"),
    password: z.string().min(6, "A password should be 6 characters or more"),
  });

  const data = await request.formData();

  const result = registrationValidation.safeParse({
    username: data.get("username"),
    email: data.get("email"),
    password: data.get("password"),
  });

  if (!result.success) {
    const error = z.flattenError(result.error).fieldErrors;

    document.getElementById("username-err").innerHTML = error.username
      ? error.username
      : "";
    document.getElementById("email-err").innerHTML = error.email
      ? error.email
      : "";
    document.getElementById("passwd-err").innerHTML = error.password
      ? error.password
      : "";

    return;
  }

  document.getElementById("username-err").innerHTML = "";
  document.getElementById("email-err").innerHTML = "";
  document.getElementById("passwd-err").innerHTML = "";

  if (
    document.getElementById("password").value !==
    document.getElementById("confirm-password").value
  ) {
    document.getElementById("passwd-conf-err").innerHTML =
      "Passwords don't match. Please retype password.";
  }

  document.getElementById("passwd-conf-err").innerHTML = "";

  const { username, email, password } = result.data;

  const API_URL = import.meta.env.VITE_API_URL;

  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  const json = await response.json();
  console.log("working");
  console.log(json.status);

  if (json.status > 399 && json.status <= 599) {
    if (!json.message) {
      document.getElementById("passwd-conf-err").innerHTML =
        "An error occured. Please try again";

      return;
    }

    if (json.message.includes("email")) {
      document.getElementById("email-err").innerHTML = json.message;
    } else if (json.message.includes("username")) {
      document.getElementById("username-err").innerHTML = json.message;
    } else {
      document.getElementById("passwd-conf-err").innerHTML = json.message;
    }

    return;
  } else {
    location.pathname = "/verification-sent";
  }
}
