import App from "@/App";
import { Login } from "@/components/Authentication/Login";
import { Register } from "@/components/Authentication/Register";
import DashboardLayout from "@/components/Layouts/DashboardLayout";

import About from "@/pages/About/About";
import Contact from "@/pages/Contact/Contact";
import Feature from "@/pages/Features/Feature";
import HomePage from "@/pages/Home/HomePage";
import Pricing from "@/pages/Pricing/Pricing";

import type { TRole } from "@/types";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router";
import { AdminSidebarItems } from "./AdminSideBar";
import { UserSidebarItems } from "./UserSideBar";
import { AgentSidebarItems } from "./AgentSideBar";

import Policy from "@/pages/Policy/Policy";
import { role } from "@/constant/role";


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
        Component: Policy,
        path: "policy",
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
  Component: withAuth(DashboardLayout, role.user as TRole),
  path: "/user",
  children: [
    { index: true, element: <Navigate to="analytics" /> }, 
    ...generateRoutes(UserSidebarItems),
  ],
},
{
  Component: withAuth(DashboardLayout, role.agent as TRole),
  path: "/agent",
  children: [
    { index: true, element: <Navigate to="analytics" /> }, 
    ...generateRoutes(AgentSidebarItems),
  ],
},
{
  Component: withAuth(DashboardLayout, role.admin as TRole),
  path: "/admin",
  children: [
    { index: true, element: <Navigate to="analytics" /> }, 
    ...generateRoutes(AdminSidebarItems),
  ],
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
