import "./components.css";
import SecondaryLink from "./SecondaryLink";

export default function Footer() {
  return (
    <footer>
      <div className="copyright-section">
        <h2 className="font-logo">Zetavex</h2>
        <p>© 2026 | All rights reserved.</p>
      </div>
      <div className="footer-links-section">
        <SecondaryLink value={"Legal"} to={"/"} />
        <SecondaryLink value={"Support"} to={"/"} />
      </div>
    </footer>
  );
}
