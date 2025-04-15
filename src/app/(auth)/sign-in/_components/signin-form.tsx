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
import { type SignInSchemaType, SignInSchema } from "@/schemas/sign-in";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import FormError from "@/components/form/form-error";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import axios, { AxiosError } from "axios";
import { ApiResponse, ErrorAPiResponse } from "@/types";
import Link from "next/link";

export function SignInForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: SignInSchemaType) {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post<ApiResponse<null>>("/api/sign-in", values);
      const data = res.data;
      if (data.success) {
        toast(data.message);
        router.push("/dashboard");
      }
    } catch (error) {
      console.log("Error Signin user:", error);
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="johndoe@gmail.com"
                  {...field}
                  className="min-h-11 rounded-full"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Password</FormLabel>
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
        <div className="flex justify-end">
          <Link
            href={"/forgot-password"}
            className="text-sm underline text-primary"
          >
            Forgot Password?
          </Link>
        </div>
        {error && <FormError message={error} />}

        <Button
          type="submit"
          className="rounded-full w-full min-h-11 text-foreground"
        >
          {loading ? <Loader2 className="animate-spin size-6" /> : "Sign In"}
        </Button>
      </form>
    </Form>
  );
}
