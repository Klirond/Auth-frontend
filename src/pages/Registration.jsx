import { Form } from "react-router";
import Border from "../components/Border";
import TopSection from "../components/TopSection";

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
          <input placeholder="username" name="username" />
        </div>
        <div>
          <p className="label">Email</p>
          <input placeholder="example@domain.com" name="email" />
        </div>
        <div>
          <p className="label">Password</p>
          <input placeholder="password" name="password" />
        </div>
        <div>
          <p className="label">Confirm password</p>
          <input placeholder="password" />
        </div>
      </Form>
    </>
  );
}
