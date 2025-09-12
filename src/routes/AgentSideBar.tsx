import AgentAnalytics from "@/pages/Agent/AgentAnalytics";
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
    ],
  },
];
