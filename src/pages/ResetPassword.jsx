import { Form } from "react-router";
import { TopSection, LinkBox, Border } from "zetavex-ui-components";

export default function ResetPassword() {
  return (
    <>
      <TopSection
        title={"Reset your password"}
        text={"Enter a new password."}
      />
      <Form method="post" className="form">
        <div>
          <p className="label">Password</p>
          <input
            type="password"
            placeholder="password"
            name="password"
            id="password"
          />
          <p className="error-msg" id="passwd-err"></p>
        </div>
        <div>
          <p className="label">Confirm password</p>
          <input type="password" placeholder="password" id="confirm-password" />
          <p className="error-msg" id="passwd-conf-err"></p>
        </div>
        <button type="submit">Change</button>
      </Form>
      <LinkBox
        message={"Don't want to change your password?"}
        link={"Cancel"}
        to={"/cancel"}
      />
    </>
  );
}
