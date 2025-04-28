import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FilePen, Paintbrush2, Settings, User } from "lucide-react";
import Profile from "./_components/profile";
import SettingsPage from "./_components/settings";
import Appearance from "./_components/appearance";
import { getUserSession } from "@/lib/session";
import { getUserById } from "@/actions/user-actions";

export default async function Account() {
  const tabs = [
    {
      value: "profile",
      label: "Profile",
      icon: <User className="size-5" />,
    },
    {
      value: "appearance",
      label: "Appearance",
      icon: <Paintbrush2 className="size-5" />,
    },
    {
      value: "interview",
      label: "Interview Preferences",
      icon: <FilePen className="size-5" />,
    },
    {
      value: "settings",
      label: "Settings",
      icon: <Settings className="size-5" />,
    },
  ];
  const userId = (await getUserSession())?.id as string;
  const user = await getUserById(userId);

  return (
    <>
      <section>
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            <span className="text-primary">Umar Khan</span> Account Settings
          </h1>
        </div>
        <p className="text-muted-foreground">
          Manage your account information and preferences
        </p>
      </section>

      <section>
        <div>
          <Tabs
            defaultValue="profile"
            className="w-full gap-4 flex-row flex-wrap"
          >
            <TabsList className="w-full sm:w-auto flex flex-col h-fit items-start p-3">
              {/* Tabs Triggers */}
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="w-full flex items-center gap-2 justify-start min-h-10"
                >
                  {tab.icon}
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tabs Content */}
            <TabsContent value="profile">
              <Profile user={user} />
            </TabsContent>
            <TabsContent value="appearance">
              <Appearance />
            </TabsContent>
            <TabsContent value="interview">
              Make changes to your interview preferences here.
            </TabsContent>
            <TabsContent value="settings">
              <SettingsPage user={user} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
