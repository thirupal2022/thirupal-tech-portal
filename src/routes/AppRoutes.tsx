import { createHashRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import CommunityPage from "../pages/CommunityPage";
import MissionPage from "../pages/MissionPage";
import InitiativesPage from "../pages/InitiativesPage";
import TechHubPage from "../pages/TechHubPage";
import FuturePage from "../pages/FuturePage";

export const router = createHashRouter([
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
        path: "community",
        element: <CommunityPage />
      },
      {
        path: "mission",
        element: <MissionPage />
      },
      {
        path: "initiatives",
        element: <InitiativesPage />
      },
      {
        path: "techhub",
        element: <TechHubPage />
      },
      {
        path: "future",
        element: <FuturePage />
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