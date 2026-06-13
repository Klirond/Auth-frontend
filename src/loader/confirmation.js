export default function confirmation({ request }) {
  const API_URL = import.meta.env.VITE_API_URL;

  const url = new URL(request.url);
  const searchParams = url.searchParams;

  const redirectionPage = searchParams.get("redirect");
  const code = searchParams.get("code");

  if (
    !redirectionPage ||
    !code ||
    code.length !== 6 ||
    (redirectionPage !== "login" &&
      redirectionPage !== "reset" &&
      redirectionPage !== "logout-all" &&
      redirectionPage !== "delete-account")
  ) {
    return {
      messageTitle: "An error occured",
      messageText: "Invalid verification link",
    };
  }

  let API_LINK;

  if (redirectionPage === "login") {
    API_LINK = "verify";
  } else if (redirectionPage === "reset") {
    API_LINK = "reset-password-token";
  } else if (redirectionPage === "delete-account") {
    API_LINK = "delete-account";
  } else {
    API_LINK = "logout-all";
  }

  return fetch(`${API_URL}/auth/${API_LINK}`, {
    method: redirectionPage === "delete-account" ? "DELETE" : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
    }),
    credentials: "include",
  })
    .then((response) => response.json())
    .then((result) => {
      const messageTitle =
        result.status > 399 && result.status <= 599
          ? "An error occured"
          : API_LINK === "logout-all" || API_LINK === "delete-account"
            ? "You can close this tab now"
            : "You are going to be redirected";

      const messageText = result.message;

      return {
        status: result.status,
        redirectionPage,
        messageTitle,
        messageText,
      };
    });
}
