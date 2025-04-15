"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  ResetPasswordSchema,
  ResetPasswordSchemaType,
} from "@/schemas/reset-passwor-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import FormError from "@/components/form/form-error";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import axios, { AxiosError } from "axios";
import { ApiResponse, ErrorAPiResponse } from "@/types";

interface ResetPasswordFormProps {
  token: string;
}

export function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: ResetPasswordSchemaType) {
    setLoading(true);
    setError("");
    try {
      if (values.password !== values.confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      const res = await axios.patch<ApiResponse<null>>("/api/reset-password", {
        ...values,
        token,
      });
      const data = res.data;
      if (data.success) {
        toast(data.message);
        router.push("/sign-in");
      }
    } catch (error) {
      console.log("Error Reset Password:", error);
      const axiosError = error as AxiosError<ErrorAPiResponse>;
      setError(axiosError.response?.data.message || "Internal server error");
    } finally {
      setLoading(false);
    }
  }

  const handleShowPassword = () => {
    setIsShowPassword((isShowPassword) => !isShowPassword);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    type={isShowPassword ? "text" : "password"}
                    className="min-h-11 rounded-full"
                    placeholder="••••••••"
                  />
                  {isShowPassword ? (
                    <EyeOff
                      className="size-5 absolute top-1/2 -translate-1/2 right-0.5 text-muted-foreground"
                      onClick={handleShowPassword}
                    />
                  ) : (
                    <Eye
                      className="size-5 absolute top-1/2 -translate-1/2 right-0.5 text-muted-foreground"
                      onClick={handleShowPassword}
                    />
                  )}
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    type={isShowPassword ? "text" : "password"}
                    className="min-h-11 rounded-full"
                    placeholder="••••••••"
                  />
                  {isShowPassword ? (
                    <EyeOff
                      className="size-5 absolute top-1/2 -translate-1/2 right-0.5 text-muted-foreground"
                      onClick={handleShowPassword}
                    />
                  ) : (
                    <Eye
                      className="size-5 absolute top-1/2 -translate-1/2 right-0.5 text-muted-foreground"
                      onClick={handleShowPassword}
                    />
                  )}
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {error && <FormError message={error} />}

        <Button
          type="submit"
          className="rounded-full w-full min-h-11 text-foreground"
        >
          {loading ? (
            <Loader2 className="animate-spin size-6" />
          ) : (
            "Reset Password"
          )}
        </Button>
      </form>
    </Form>
  );
}
