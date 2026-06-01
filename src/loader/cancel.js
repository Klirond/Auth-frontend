export default async function cancel() {
  const API_URL = import.meta.env.VITE_API_URL;

  return fetch(`${API_URL}/auth/cancel-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((response) => response.json())
    .then((result) => {
      const messageTitle =
        result.status > 399 && result.status <= 599
          ? "An error occured"
          : "You can close this page safely now";

      const messageText = result.message.token
        ? result.message.token[0]
        : result.message;

      return {
        messageTitle,
        messageText,
      };
    });
}
