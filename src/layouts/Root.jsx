import { useEffect } from "react";
import { LoadingScreen, Footer } from "zetavex-ui-components";

import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { useState } from "react";

function AuthLayout() {
  const navigation = useNavigation();
  const [isNavigating, setIsNavigating] = useState(
    navigation.state === "loading" || navigation.state === "submitting",
  );
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    setIsNavigating(
      navigation.state === "loading" || navigation.state === "submitting",
    );
  }, [navigation.state]);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 768);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isNavigating && <LoadingScreen />}
      <main id="auth-layout">
        {isDesktop ? (
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

export default AuthLayout;
