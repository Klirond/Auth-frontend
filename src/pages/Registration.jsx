import { Form } from "react-router";
import Border from "../components/Border";
import TopSection from "../components/TopSection";
import LinkBox from "../components/LinkBox";

export default function Registration() {
  return (
    <>
      <TopSection
        title={"Welcome"}
        text={"Start you journey here by creating a new account."}
      />
      <Border />
      <Form method="post" className="form">
        <div>
          <p className="label">Username</p>
          <input type="text" placeholder="username" name="username" />
          <p className="error-msg" id="username-err"></p>
        </div>
        <div>
          <p className="label">Email</p>
          <input type="email" placeholder="example@domain.com" name="email" />
          <p className="error-msg" id="email-err"></p>
        </div>
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
        <button type="submit">Register</button>
      </Form>
      <Border />
      <LinkBox
        message={"Already have an account?"}
        link={"Login"}
        to={"/login"}
      />
    </>
  );
}
