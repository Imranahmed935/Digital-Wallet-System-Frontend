
import TransactionHistory from "@/pages/User/TransactionHistory";
import UserAnalytics from "@/pages/User/UserAnalytics";
import UserProfile from "@/pages/User/UserProfile";


import type { ISidebarItem } from "@/types";

export const UserSidebarItems: ISidebarItem[] = [
  {
    title: "Analytics",
    items: [
      {
        title: "Analytics",
        url: "analytics",
        component: UserAnalytics,
      },
    ],
  },
  {
    title: "Transactions",
    items: [
      {
        title: "Transactions",
        url: "history",
        component: TransactionHistory,
      },
    ],
  },
  {
    title: "Setting",
    items: [
      {
        title: "Profile",
        url: "profile",
        component: UserProfile,
      },
    ],
  },
 
];

