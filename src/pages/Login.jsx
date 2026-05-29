import { Form } from "react-router";
import Border from "../components/Border";
import TopSection from "../components/TopSection";
import { Link } from "react-router";

export default function Login() {
  return (
    <>
      <TopSection
        title={"Welcome back"}
        text={"Quickly login to continue your journey."}
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
        <button type="submit">Login</button>
      </Form>
      <Border />
      <div className="flex gap-xs">
        <p className="label">New to Zetavex?</p>
        <Link to={"/login"} className="primary-link">
          Create an account
        </Link>
      </div>
    </>
  );
}
