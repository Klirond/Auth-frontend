import { useEffect } from "react";
import TopSection from "../components/TopSection";
import { useSearchParams } from "react-router";
import { useState } from "react";

export default function ConfirmationPage() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const [messageTitle, setMessageTitle] = useState("");
  const [message, setMessage] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(
    () => async () => {
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

      setMessageTitle(
        json.status > 399 && json.status <= 599
          ? "An error occured"
          : "You are being redirected",
      );
      setMessage(json.message);
    },
    [API_URL, code],
  );

  return (
    <>
      <TopSection title={messageTitle} text={message} />
    </>
  );
}
