import { useLoaderData, useNavigate } from "react-router";
import TopSection from "../components/TopSection";
import { useEffect } from "react";

export default function ConfirmationPage() {
  const navigate = useNavigate();
  const { status, messageTitle, messageText } = useLoaderData();

  useEffect(() => {
    let redirect;
    if (status > 199 && status <= 299) {
      redirect = setInterval(() => navigate("/login"), 2000);
    }

    return () => clearInterval(redirect)
  }, [])

  return <TopSection title={messageTitle} text={messageText} />;
}
