import * as React from "react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "@/assets/icon/Logo";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { getSidebarItems } from "@/utils/getSideBarItems";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useUserInfoQuery(undefined);
  const navItems = getSidebarItems(userData?.data?.role);

  return (
    <Sidebar {...props}>
      {/* Header with Logo and Dashboard */}
      <SidebarHeader className="flex items-center">
        <Logo />
        <h1 className="text-lg font-semibold text-gray-800 dark:text-foreground">Dashboard</h1>
      </SidebarHeader>

      {/* Sidebar menu */}
      <SidebarContent id="dashboard-stats">
        {/* Top menu items */}
        <div className="flex flex-col">
          {navItems.map((section) => (
            <SidebarGroup key={section.title}>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink to={item.url}>{item.title}</NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </div>

        {/* Bottom Home link */}
        <div className=" ml-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink to="/">Home</NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
