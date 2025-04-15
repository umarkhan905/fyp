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
  ForgotPasswordSchemaType,
  ForgotPasswordSchema,
} from "@/schemas/forgot-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import FormError from "@/components/form/form-error";
import { Loader2 } from "lucide-react";
import axios, { AxiosError } from "axios";
import { ApiResponse, ErrorAPiResponse } from "@/types";

interface ForgotPasswordFormProps {
  onLinkSent: (value: boolean) => void;
}

export function ForgotPasswordForm({ onLinkSent }: ForgotPasswordFormProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const form = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: ForgotPasswordSchemaType) {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post<ApiResponse<null>>(
        "/api/forgot-password",
        values
      );
      const data = res.data;
      if (data.success) {
        toast(data.message);
        onLinkSent(true);
      }
    } catch (error) {
      console.log("Error Signin user:", error);
      const axiosError = error as AxiosError<ErrorAPiResponse>;
      setError(axiosError.response?.data.message || "Internal server error");
    } finally {
      setLoading(false);
    }
  }

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

        {error && <FormError message={error} />}

        <Button
          type="submit"
          className="rounded-full w-full min-h-11 text-foreground"
        >
          {loading ? <Loader2 className="animate-spin size-6" /> : "Send Link"}
        </Button>
      </form>
    </Form>
  );
}
