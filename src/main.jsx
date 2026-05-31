import { createRoot } from "react-dom/client";
import "./index.css";

import router from "./routes";
import App from "./layouts/App";

createRoot(document.getElementById("root")).render(<App router={router} />);
