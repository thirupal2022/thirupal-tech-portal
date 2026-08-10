import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ThemeProvider from "./providers/ThemeProvider";
import FullContent from "./components/fullContent/FullContent";


ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <ThemeProvider>
      <FullContent />
    </ThemeProvider>
  </React.StrictMode>
);