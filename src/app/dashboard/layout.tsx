import React from "react";
import { AppSidebar } from "./_components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import HeaderBreadCrumb from "./_components/header-breadcrumb";
import { FaCoins } from "react-icons/fa";
import { ModeToggle } from "@/components/theme/mode-toggler";
import { getUserSession } from "@/lib/session";

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const user = await getUserSession();
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b justify-between sticky top-0 bg-background z-50">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <HeaderBreadCrumb user={user} />
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ModeToggle />

            {/* Coins */}
            <div className="flex items-center gap-2 p-1 px-3 bg-muted rounded-full">
              <FaCoins className="size-5" />
              <span className="text-base font-medium text-foreground">100</span>
            </div>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
