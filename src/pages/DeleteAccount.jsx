import { Form, useActionData } from "react-router";
import { TopSection, LinkBox } from "klirond-ui-components";

export default function DeleteAccount() {
  const data = useActionData();

  if (data?.success) {
    window.location.href = data?.redirectionPage
      ? data.redirectionPage
      : "/success";
  }

  return (
    <>
      <TopSection
        title={"Delete your account"}
        text={
          "Enter your email and password to delete your account. ALL your data will be removed, and you will not be able to undo this operation."
        }
      />
      <Form method="post" className="form">
        <div>
          <p className="label">Email</p>
          <input type="email" placeholder="example@domain.com" name="email" />
          <p className="error-msg" id="email-err"></p>
        </div>
        <div>
          <p className="label">Password</p>
          <input type="password" placeholder="password" name="password" />
          <p className="error-msg" id="passwd-err"></p>
        </div>
        <LinkBox
          message={"Forgot your login password?"}
          link={"Reset password"}
          to={"/forgot-password"}
        />
        <button type="submit" className="full-btn red-btn">
          Delete account
        </button>
      </Form>
    </>
  );
}
