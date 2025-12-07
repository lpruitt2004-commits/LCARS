import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import SoundManager from "./components/SoundManager";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SoundManager>
      <App />
    </SoundManager>
  </React.StrictMode>
);
