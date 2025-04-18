import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Logo from "@/components/branding/logo";
import { NavUser } from "./nav-user";
import NavMain from "./nav-main";
import {
  LayoutDashboard,
  PlayCircle,
  History,
  BarChart2,
  Activity,
  CreditCard,
  HelpCircle,
} from "lucide-react";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Create Interview",
      url: "/dashboard/create-interview",
      icon: PlayCircle,
    },
    {
      title: "Interview History",
      url: "/dashboard/history",
      icon: History,
    },
    {
      title: "Feedback & Reports",
      url: "/dashboard/feedback",
      icon: BarChart2,
    },
    {
      title: "Progress & Activity",
      url: "/dashboard/activity",
      icon: Activity,
    },
    {
      title: "Manage Subscription",
      url: "/dashboard/subscription",
      icon: CreditCard,
    },
    {
      title: "Help Center & Support",
      url: "/dashboard/help-and-support",
      icon: HelpCircle,
    },
  ],
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
};

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  {/* <GalleryVerticalEnd className="size-4" /> */}
                  <Logo className="h-full w-auto" variant="logo-primary" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">MockByte</span>
                  <span className="">AI Interview Simulator</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
