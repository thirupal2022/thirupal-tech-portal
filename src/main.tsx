import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes/AppRoutes";
import "./index.css";
import ThemeProvider from "./providers/ThemeProvider";
import FullContent from "./components/fullContent/FullContent";

const queryClient = new QueryClient();

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <ThemeProvider>
      <FullContent />
    </ThemeProvider>
  </React.StrictMode>
);