import { useLoaderData, useNavigate } from "react-router";
import { TopSection } from "klirond-ui-components";
import { useEffect } from "react";

export default function ConfirmationPage() {
  const navigate = useNavigate();
  const { status, redirectionPage, messageTitle, messageText } =
    useLoaderData();

  useEffect(() => {
    let redirect;
    if (status > 199 && status <= 299) {
      redirect = setInterval(
        () => navigate(`/${redirectionPage ? redirectionPage : ""}`),
        2000,
      );
    }

    return () => clearInterval(redirect);
  }, []);

  return <TopSection title={messageTitle} text={messageText} />;
}
