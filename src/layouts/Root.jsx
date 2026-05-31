import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import "./layouts.css";

import { Outlet } from "react-router";
import { useNavigation } from "react-router";

function Root() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <>
      {isNavigating && <LoadingScreen />}
      <main id="root-layout">
        {window.innerWidth >= 768 ? (
          <div className="desktop-section">
            <Outlet />
          </div>
        ) : (
          <Outlet />
        )}
        <Footer />
      </main>
    </>
  );
}

export default Root;
