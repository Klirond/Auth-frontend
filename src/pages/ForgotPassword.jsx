import { Form } from "react-router";
import Border from "../components/Border";
import TopSection from "../components/TopSection";

export default function ForgotPasswd() {
  return (
    <>
      <TopSection
        title={"Forgot my password"}
        text={
          "Enter your recovery email so that we will send you a reset link to change your password."
        }
      />
      <Border />
      <Form method="post" className="form">
        <div>
          <p className="label">Email</p>
          <input type="email" placeholder="example@domain.com" name="email" />
        </div>
        <button type="submit">Reset</button>
      </Form>
    </>
  );
}
