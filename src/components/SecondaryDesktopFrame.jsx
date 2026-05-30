import { NavLink } from "react-router";

export default function SecondaryDesktopFrame({ side }) {
  return (
    <section className={"desktop-frame " + side}>
      <div>
        <h1>Already have an account?</h1>
        <p>Quickly login to continue your journey.</p>
      </div>
      <NavLink
        to={location.pathname === "/login" ? "/register" : "/login"}
        className="button second-frame-button"
      >
        {side === "right" ? "Login" : "Register"}
      </NavLink>
    </section>
  );
}
