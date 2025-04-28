"use client";

import { deleteAccount, updatePassword } from "@/actions/account-actions";
import { logout } from "@/actions/auth-actions";
import FormError from "@/components/form/form-error";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { User } from "@/generated/prisma";
import {
  ChangePasswordSchema,
  ChangePasswordSchemaType,
} from "@/schemas/account/change-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Settings } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import DeleteAccountModal from "./modal/delete-account-modal";

export default function SettingsPage({ user }: { user: User | null }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [accountDeletingLoading, setaccountDeletingLoading] =
    useState<boolean>(false);
  const [accountDeletingError, setaccountDeletingError] = useState<
    string | null
  >(null);

  const form = useForm<ChangePasswordSchemaType>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ChangePasswordSchemaType) => {
    setLoading(true);
    setError(null);
    try {
      const result = ChangePasswordSchema.safeParse(data);
      if (!result.success) {
        setError(result.error.format()._errors[0]);
        return;
      }

      const { newPassword, confirmPassword, currentPassword } = result.data;
      if (currentPassword === newPassword) {
        setError("New password must be different from the current password.");
        return;
      }

      if (newPassword !== confirmPassword) {
        setError("New password and confirm password do not match.");
        return;
      }

      const passwordResult = await updatePassword(data, user?.id as string);

      if (!passwordResult.success) {
        setError(passwordResult.message as string);
        return;
      }

      // clear form
      form.reset();
      toast.success("Password updated successfully.");
    } catch (error) {
      console.log("Error occurs while updating password: ", error);
      setError(error as string);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    setaccountDeletingLoading(true);
    setaccountDeletingError(null);
    try {
      const result = await deleteAccount(user?.id as string);
      if (!result.success) {
        setError(result.message as string);
        return;
      }

      setIsOpenModal(false);
      toast.success("Account deleted successfully.");

      await logout();
    } catch (error) {
      console.log("Error occurs while deleting account: ", error);
      setError("Error occurs while deleting account.");
    } finally {
      setaccountDeletingLoading(false);
    }
  };
  const handleOpenChange = () => setIsOpenModal((isOpenModal) => !isOpenModal);

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
            <Form {...form}>
              <form
                className="space-y-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm dark:text-muted-foreground font-normal">
                        Current Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormLabel className="text-sm dark:text-muted-foreground font-normal">
                          New Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••"
                            className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormLabel className="text-sm dark:text-muted-foreground font-normal">
                          Confirm Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••"
                            className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {error && <FormError message={error} />}

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="w-full text-white min-h-11 sm:w-36 rounded-full"
                  >
                    {loading ? (
                      <Loader2 className="size-5 animate-spin" />
                    ) : (
                      "Update Password"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
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
                onClick={() => setIsOpenModal(true)}
              >
                Delete Account
              </Button>
            </div>
          </section>

          <DeleteAccountModal
            isOpen={isOpenModal}
            error={accountDeletingError}
            loading={accountDeletingLoading}
            handleDeleteAccount={handleDeleteAccount}
            handleOpenChange={handleOpenChange}
          />

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
                onClick={logout}
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
