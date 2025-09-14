
import { role } from "@/constant/role";
import { AdminSidebarItems } from "@/routes/AdminSideBar";
import { AgentSidebarItems } from "@/routes/AgentSideBar";
import { UserSidebarItems } from "@/routes/UserSideBar";
import type { TRole } from "@/types";
export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.agent:
      return [...AgentSidebarItems];
    case role.admin:
      return [...AdminSidebarItems];
    case role.user:
      return [...UserSidebarItems];
    default:
      return [];
  }
};