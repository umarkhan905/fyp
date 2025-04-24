import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Settings } from "lucide-react";
import React from "react";

export default function SettingsPage() {
  return (
    <Card className="group">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="size-11 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/30 transition-all duration-300">
            <Settings className="size-5" />
          </div>
          <span className="text-lg">Account Settings</span>
        </CardTitle>
        <CardDescription>Manage your account settings</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Security Settings */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Security Settings</h2>

          {/* Change Password */}
          <section className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold">Change Password</h3>
              <p className="text-sm text-muted-foreground">
                Update your password for added security.
              </p>
            </div>

            {/* Chnage Password Form */}
            <form className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm dark:text-muted-foreground font-normal">
                  Current Password
                </Label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="space-y-2 w-full md:w-1/2">
                  <Label className="text-sm dark:text-muted-foreground font-normal">
                    New Password
                  </Label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
                  />
                </div>
                <div className="space-y-2 w-full md:w-1/2">
                  <Label className="text-sm dark:text-muted-foreground font-normal">
                    Confirm Password
                  </Label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="w-full text-white min-h-11 sm:w-auto rounded-full"
                >
                  Update Password
                </Button>
              </div>
            </form>
          </section>

          <Separator className="my-4 md:my-6 max-w-md w-full mx-auto" />

          {/* Two Factor Authentication */}
          <section className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold">
                Two-Factor Authentication
              </h3>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account with two-factor
                authentication.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={"outline"}
                type="submit"
                className="w-full min-h-11 sm:w-xs rounded-full"
              >
                Enable 2FA
              </Button>
            </div>
          </section>

          <Separator className="my-4 md:my-6 max-w-md w-full mx-auto" />

          {/* Delete Account */}
          <section className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold">Delete Account</h3>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all of your data.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={"destructive"}
                type="submit"
                className="w-full min-h-11 sm:w-xs rounded-full"
              >
                Delete Account
              </Button>
            </div>
          </section>

          <Separator className="my-4 md:my-6 max-w-md w-full mx-auto" />

          {/* Logout */}
          <section className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold">Logout</h3>
              <p className="text-sm text-muted-foreground">
                Sign out of your account.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={"outline"}
                type="submit"
                className="w-full min-h-11 sm:w-xs rounded-full"
              >
                Logout
              </Button>
            </div>
          </section>

          {/* TODO: Add Settings in Accordian form */}
        </section>
      </CardContent>
    </Card>
  );
}
