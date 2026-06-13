import { useLoaderData, useNavigate } from "react-router";
import { TopSection, Border, LinkBox } from "klirond-ui-components";
import { useEffect, useState } from "react";

export default function ConfirmationPage() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const { status, redirectionPage, messageTitle, messageText } =
    useLoaderData();

  useEffect(() => {
    let redirect;
    if (status > 199 && status <= 299) {
      if (
        redirectionPage !== "logout-all" ||
        redirectionPage !== "delete-account"
      ) {
        redirect = setInterval(
          () => navigate(`/${redirectionPage ? redirectionPage : ""}`),
          2000,
        );
      }
    } else {
      setError(true);
    }

    return () => clearInterval(redirect);
  }, []);

  return (
    <>
      <TopSection title={messageTitle} text={messageText} />
      {error ? (
        <>
          <Border />
          <LinkBox
            message={"Click here to "}
            link={"Try again"}
            to={
              redirectionPage === "login"
                ? "/resend-verification"
                : redirectionPage === "reset"
                  ? "/resend-reset"
                  : "/logout-all-resend"
            }
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
