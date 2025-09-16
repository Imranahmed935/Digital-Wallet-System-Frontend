import AgentAnalytics from "@/pages/Agent/AgentAnalytics";
import AgentProfile from "@/pages/Agent/AgentProfile";
import AllTransactions from "@/pages/Agent/AllTransactions";
import type { ISidebarItem } from "@/types";

export const AgentSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "analytics",   
        component: AgentAnalytics,
      },
      {
        title: "All Transactions",
        url: "Transactions",   
        component: AllTransactions,
      },
      {
        title: "Profile",
        url: "Profile",   
        component: AgentProfile,
      },
    ],
  },
];
