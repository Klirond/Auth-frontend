import Footer from "../components/Footer";
import "./layouts.css";

import { Outlet } from "react-router";

function Root() {
  return (
    <main id="root-layout">
      <Outlet />
      <Footer />
    </main>
  );
}

export default Root;
