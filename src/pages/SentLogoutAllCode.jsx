import { TopSection, Border, LinkBox } from "klirond-ui-components";

export default function SentLogoutAllLink() {
  return (
    <>
      <TopSection
        title={"Logout link sent"}
        text={`A logout link has been sent to your email.
          Please check your email and click on the link provided to logout from all your sessions.`}
      />
      <Border />
      <LinkBox
        message={"Didn’t get an email?"}
        link={"Resend link"}
        to={"/logout-all-resend"}
      />
    </>
  );
}
