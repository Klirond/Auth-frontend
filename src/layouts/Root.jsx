import Footer from "../components/Footer";
import "./layouts.css";

import { Outlet } from "react-router";

function Root() {
  return (
    <main id="root-layout">
      {window.innerWidth >= 768 ? (
        <div className="desktop-section">{<Outlet />}</div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </main>
  );
}

export default Root;
