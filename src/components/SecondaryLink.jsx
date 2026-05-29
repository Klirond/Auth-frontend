import { Link } from "react-router";

export default function SecondaryLink({ value, to }) {
  return (
    <Link className="secondary-link" to={to}>
      {value}
    </Link>
  );
}
