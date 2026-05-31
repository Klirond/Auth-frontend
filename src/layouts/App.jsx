import { RouterProvider } from "react-router"
import LoadingScreen from "../components/LoadingScreen";
import { StrictMode, useEffect, useState } from "react";

export default function App({ router }) {
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    const loading = setInterval(() => {
      const state = router.state.navigation.state;

      if (state === "idle") {
        setLoadingState(false);
        clearInterval(loading);
      }
    }, 100)
  }, [])

  return (
    <StrictMode>
      {!isLoading ? <RouterProvider router={router} /> : <LoadingScreen />}
    </StrictMode>
  )
}
