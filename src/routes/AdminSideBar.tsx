import AdminAnalytics from "@/pages/Admin/AdminAnalytics";
import type { ISidebarItem } from "@/types";
import ManageUsers from "@/pages/Admin/ManageUsers";
import ManageAgents from "@/pages/Admin/ManageAgents";
import Transactions from "@/pages/Admin/Transactions";
import Profile from "@/pages/Admin/Profile";


export const AdminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "analytics",
        component: AdminAnalytics,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "AllUsers",
        url: "users",
        component: ManageUsers,
      },
      {
        title: "AllAgents",
        url: "agents",
        component: ManageAgents,
      },
    ],
  },
  {
    title: "Transactions",
    items: [
      {
        title: "All Transactions",
        url: "transactions",
        component: Transactions,
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        title: "Profile",
        url: "profile",
        component: Profile,
      },
    ],
  },
];
