import Border from "../components/Border";
import LinkBox from "../components/LinkBox";
import TopSection from "../components/TopSection";

export default function SentVerificationLink() {
  return (
    <>
      <TopSection
        title={"Verification link sent"}
        text={`A verification link has been sent to your email.
          Please check your email and click on the link provided to verify your account.`}
      />
      <Border />
      <LinkBox
        message={"Didn’t get an email?"}
        link={"Resend link"}
        to={"/resend"}
      />
    </>
  );
}
