import { TopSection, LinkBox, Border } from "klirond-ui-components";

export default function SentResetLink() {
  return (
    <>
      <TopSection
        title={"Reset link sent"}
        text={`A reset link has been sent to your email.
          Please check your email and click on the link provided to reset your password.`}
      />
      <Border />
      <LinkBox
        message={"Didn’t get an email?"}
        link={"Resend link"}
        to={"/resend-reset"}
      />
    </>
  );
}
