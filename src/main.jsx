import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Root from "./layouts/Root";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
