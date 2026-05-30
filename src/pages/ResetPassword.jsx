import { Form } from "react-router";
import Border from "../components/Border";
import TopSection from "../components/TopSection";
import LinkBox from "../components/LinkBox";

export default function ResetPassword() {
  return (
    <>
      <TopSection
        title={"Reset your password"}
        text={"Enter a new password."}
      />
      <Border />
      <Form method="post" className="form">
        <div>
          <p className="label">Email</p>
          <input type="email" placeholder="example@domain.com" name="email" />
        </div>
        <div>
          <p className="label">Password</p>
          <input type="password" placeholder="password" name="password" />
        </div>
        <div>
          <p className="label">Confirm password</p>
          <input type="password" placeholder="password" />
        </div>
        <button type="submit">Change</button>
      </Form>
      <Border />
      <LinkBox
        message={"Don't want to change your password?"}
        link={"Cancel"}
        to={"/cancel"}
      />
    </>
  );
}
