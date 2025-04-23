"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
  CompanyDetailsSchema,
  CompanyDetailsSchemaType,
} from "@/schemas/interviews/company-details";
import {
  deleteFileFromCloudinary,
  uploadFileToCloudinary,
} from "@/utils/cloudinary-methods";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Plus, Trash } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { UploadApiResponse } from "cloudinary";
import { toast } from "sonner";

interface CompanyDetailsProps {
  onFinish: (data: { companyName: string; companyLogo: string }) => void;
  onStepChange: (step: number) => void;
  loading: boolean;
}

export default function CompanyDetails({
  onFinish,
  onStepChange,
  loading,
}: CompanyDetailsProps) {
  const [image, setImage] = useState<string | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isUploadingFile, setIsUploadingFile] = useState<boolean>(false);
  const [uploadingError, setUploadingError] = useState<string | null>(null);

  const handleFileInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setIsUploadingFile(true);
      setUploadingError(null);
      try {
        const result = (await uploadFileToCloudinary(
          file
        )) as UploadApiResponse;

        toast.success("File uploaded successfully.");
        setImage(result.secure_url);
        localStorage.setItem("companyLogo", result.secure_url);
      } catch (error) {
        console.log("Error occurs while uploading file: ", error);
        setUploadingError(error as string);
      } finally {
        setIsUploadingFile(false);
      }
    }
  };

  const form = useForm<CompanyDetailsSchemaType>({
    resolver: zodResolver(CompanyDetailsSchema),
    defaultValues: {
      companyName: "",
    },
  });

  const onSubmit = (data: CompanyDetailsSchemaType) => {
    onFinish({ companyName: data.companyName, companyLogo: image as string });
  };

  const handleImageDelete = async () => {
    setIsUploadingFile(true);
    setUploadingError(null);
    try {
      const result = (await deleteFileFromCloudinary(image as string)) as {
        result: string;
      };

      if (result.result !== "ok") {
        setUploadingError(result.result);
        return;
      }

      toast.success("File deleted successfully.");
      localStorage.removeItem("companyLogo");
      setImage(undefined);
    } catch (error) {
      console.log("Error occurs while deleting file: ", error);
      setUploadingError(error as string);
    } finally {
      setIsUploadingFile(false);
    }
  };

  useEffect(() => {
    const companyLogo = localStorage.getItem("companyLogo");
    if (companyLogo) setImage(companyLogo);
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <Avatar className="size-16 mx-auto relative group border-2">
          <AvatarImage src={image} alt="Company Logo" />
          <AvatarFallback>MB</AvatarFallback>

          {/* avatar overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/80 text-white items-center justify-center hidden group-hover:flex">
            {isUploadingFile ? (
              <Loader2 className="size-5 animate-spin" />
            ) : image ? (
              <button className="cursor-pointer" onClick={handleImageDelete}>
                <Trash className="size-5" />
              </button>
            ) : (
              <button
                className="cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <Plus className="size-5" />
              </button>
            )}
          </div>

          {/* file input */}
          <input
            type="file"
            accept="image/*"
            hidden
            ref={fileInputRef}
            onChange={handleFileInputChange}
            max={1}
          />
        </Avatar>
        {uploadingError && (
          <p className="text-xs text-red-500 text-center">{uploadingError}</p>
        )}
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is your company name?</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Mock Byte"
                      className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full rounded-full min-h-11 text-background">
              {loading ? (
                <Loader2 className="size-6 animate-spin" />
              ) : (
                "Create Interview Link & Finish"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
