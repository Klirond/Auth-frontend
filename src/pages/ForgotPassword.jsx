import { Form } from "react-router";
import { TopSection } from "zetavex-ui-components";

export default function ForgotPasswd() {
  return (
    <>
      <TopSection
        title={"Forgot my password"}
        text={
          "Enter your recovery email so that we will send you a reset link to change your password."
        }
      />
      <Form method="post" className="form">
        <div>
          <p className="label">Email</p>
          <input type="email" placeholder="example@domain.com" name="email" />
          <p className="error-msg" id="email-err"></p>
        </div>
        <button type="submit">Reset</button>
      </Form>
    </>
  );
}
