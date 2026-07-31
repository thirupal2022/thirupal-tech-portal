import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "blogs",
        element: <BlogPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      }
    ]
  }
]);