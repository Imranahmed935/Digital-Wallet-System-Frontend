import App from "@/App";
import { Login } from "@/components/Authentication/Login";
import { Register } from "@/components/Authentication/Register";
import DashboardLayout from "@/components/Layouts/DashboardLayout";

import About from "@/pages/About/About";
import AdminAnalytics from "@/pages/Admin/AdminAnalytics";
import AgentAnalytics from "@/pages/Agent/AgentAnalytics";
import Contact from "@/pages/Contact/Contact";
import Faq from "@/pages/FAQ/Faq";
import Feature from "@/pages/Features/Feature";
import HomePage from "@/pages/Home/HomePage";
import Pricing from "@/pages/Pricing/Pricing";
import UserAnalytics from "@/pages/User/UserAnalytics";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: HomePage,
        index: true,
      },
      {
        Component: Pricing,
        path: "pricing",
      },
      {
        Component: About,
        path: "About",
      },
      {
        Component: Faq,
        path: "Faq",
      },
      {
        Component: Contact,
        path: "Contact",
      },
      {
        Component: Feature,
        path: "Feature",
      },
    ],
  },

  {
    Component: DashboardLayout,
    path: "/admin",
    children:[
      {
        Component:AdminAnalytics,
        path:"adminAnalytics"
      }
    ]
  },
  {
    Component: DashboardLayout,
    path: "/agent",
    children:[
      {
        Component:AgentAnalytics,
        path:"AgentAnalytics"
      }
    ]
  },
  {
    Component: DashboardLayout,
    path: "/user",
    children:[
      {
        Component:UserAnalytics,
        path:"UserAnalytics"
      }
    ]
  },
  {
    Component: Login,
    path: "Login",
  },
  {
    Component: Register,
    path: "register",
  },
]);
