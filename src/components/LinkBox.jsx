import { Link } from "react-router";

export default function LinkBox({ message, link, to }) {
  return (
    <div className="redirection">
      <p className="label">{message}</p>
      <Link to={to} className="primary-link">
        {link}
      </Link>
    </div>
  );
}
