import { TopSection, Border, LinkBox } from "klirond-ui-components";

export default function SentDeleteAccountLink() {
  return (
    <>
      <TopSection
        title={"Delete account link sent"}
        text={`A link has been sent to your email.
          Please check your email and click on the link provided to delete your account.`}
      />
      <Border />
      <LinkBox
        message={"Didn’t get an email?"}
        link={"Resend link"}
        to={"/delete-account-resend"}
      />
    </>
  );
}
