"use client";

import { updateProfile, updateProfileImage } from "@/actions/account-actions";
import FormError from "@/components/form/form-error";
import { Avatar } from "@/components/ui/avatar";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { User as UserType } from "@/generated/prisma";
import {
  ProfileSchema,
  ProfileSchemaType,
} from "@/schemas/account/profile-schema";
import {
  deleteFileFromCloudinary,
  uploadFileToCloudinary,
} from "@/utils/cloudinary-methods";
import { zodResolver } from "@hookform/resolvers/zod";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { UploadApiResponse } from "cloudinary";
import { Camera, Loader2, Save, Trash, User } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ProfileProps {
  user: UserType | null;
}

export default function Profile({ user }: ProfileProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingImage, setloadingImage] = useState<boolean>(false);
  const [uploadingImageError, setuploadingImageError] = useState<string | null>(
    null
  );
  const [image, setImage] = useState<string | undefined>(undefined);

  const imageRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setloadingImage(true);
    setuploadingImageError(null);
    try {
      const result = (await uploadFileToCloudinary(file)) as UploadApiResponse;
      if (result && result?.secure_url) {
        setImage(result.secure_url);

        const res = await updateProfileImage(
          user?.id as string,
          result.secure_url,
          "/dashboard/account"
        );

        if (!res.success) {
          setuploadingImageError(res.message);
          setImage(undefined);
          return;
        }

        toast.success(res.message);
        return;
      }

      setuploadingImageError("Something went wrong while uploading image.");
    } catch (error) {
      console.log("Error while uploading image: ", error);
      setuploadingImageError(
        (error as string) || "Something went wrong while uploading image."
      );
    } finally {
      setloadingImage(false);
    }
  };

  const handleImageDelete = async () => {
    setloadingImage(true);
    setuploadingImageError(null);
    try {
      const result = (await deleteFileFromCloudinary(image as string)) as {
        result: string;
      };

      if (result.result !== "ok") {
        setuploadingImageError(result.result);
        return;
      }

      const res = await updateProfileImage(
        user?.id as string,
        "",
        "/dashboard/account"
      );
      if (!res.success) {
        setuploadingImageError(res.message);
        return;
      }

      toast.success("Image deleted successfully");
      setImage(undefined);
    } catch (error) {
      console.log("Error occurs while deleting file: ", error);
      setuploadingImageError(error as string);
    } finally {
      setloadingImage(false);
    }
  };

  const form = useForm<ProfileSchemaType>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      mobile: user?.mobile || "",
      companyName: user?.companyName || "",
      position: user?.position || "",
      experience: user?.experience?.toString() || "",
      experienceIn: user?.experienceIn || "",
      github: user?.gitHub || "",
      linkedIn: user?.linkedIn || "",
      location: user?.location || "",
      bio: user?.bio || "",
    },
  });

  const onSubmit = async (data: ProfileSchemaType) => {
    setLoading(true);
    setError(null);
    try {
      const result = await updateProfile(
        { ...data, mobile: data.mobile.replace("-", "") },
        user?.id as string,
        "/dashboard/account"
      );
      if (!result.success) {
        setError(result.message as string);
        return;
      }

      toast.success("Profile updated successfully.");
    } catch (error) {
      console.log("Error occurs while updating profile: ", error);
      setError(error as string);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && user.image) {
      setImage(user.image);
    }
  }, [user]);

  console.log("user", user);

  return (
    <Card className="group">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="size-11 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/30 transition-all duration-300">
            <User className="size-5" />
          </div>
          <span className="text-lg">Profile Information</span>
        </CardTitle>
        <CardDescription>Update your profile information</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Profile Image*/}
        <div className="size-fit mx-auto relative flex items-center justify-center z-0 group/avatar">
          <Avatar className="size-20 items-center justify-center border-2 border-primary/20">
            <AvatarImage src={image} />
            <AvatarFallback className="size-full bg-primary/20 text-primary flex items-center justify-center">
              {user?.firstName?.charAt(0) || "MB"}
            </AvatarFallback>
          </Avatar>

          {/* Avatar overly */}
          {!loadingImage && image && !uploadingImageError && (
            <div className="absolute top-0 left-0 size-0 rounded-full bg-black/80 z-10 flex items-center justify-center group-hover/avatar:size-full">
              <Trash
                className="size-5 text-white/80 cursor-pointer"
                onClick={handleImageDelete}
              />
            </div>
          )}

          {loadingImage && (
            <div className="absolute top-0 left-0 size-0 rounded-full bg-black/80 z-10 flex items-center justify-center group-hover/avatar:size-full">
              <Loader2 className="size-5 text-white/80 animate-spin" />
            </div>
          )}
          {/* Camera Icon */}
          <div
            className="absolute -bottom-0 -right-0  rounded-full bg-black p-1 z-50"
            onClick={() => imageRef.current?.click()}
          >
            <Camera className="size-4 text-muted-foreground cursor-pointer" />
          </div>
          <input
            hidden
            ref={imageRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {uploadingImageError && (
          <p className="text-sm text-destructive text-center">
            {uploadingImageError}
          </p>
        )}

        {/* Profile Form */}
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full md:w-1/2">
                    <FormLabel className="text-sm dark:text-muted-foreground font-normal">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John"
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
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full md:w-1/2">
                    <FormLabel className="text-sm dark:text-muted-foreground font-normal">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Doe"
                        className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm dark:text-muted-foreground font-normal">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="johndoe@mockbyte.com"
                      className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
                      disabled
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm dark:text-muted-foreground font-normal">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="03xxxxxxxxx"
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
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm dark:text-muted-foreground font-normal">
                    Company Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Google"
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
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm dark:text-muted-foreground font-normal">
                    Position
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Software Engineer"
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
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm dark:text-muted-foreground font-normal">
                    Experience
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="1"
                      type="number"
                      min={0}
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
              name="experienceIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm dark:text-muted-foreground font-normal">
                    ExperienceIn
                  </FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full placeholder:text-muted-foreground text-sm rounded-full min-h-11">
                        <SelectValue placeholder="Experience In" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="YEARS">Years</SelectItem>
                        <SelectItem value="MONTHS">Months</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="github"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm dark:text-muted-foreground font-normal">
                    Github Profile
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://github.com/mockbyte"
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
              name="linkedIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm dark:text-muted-foreground font-normal">
                    LinkedIn Profile
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://linkedin.com/in/mockbyte"
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
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm dark:text-muted-foreground font-normal">
                    Location
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="New York, USA"
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
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm dark:text-muted-foreground font-normal">
                    Bio
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="My bio"
                      className="placeholder:text-muted-foreground text-sm  min-h-24 resize-none"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {error && <FormError message={error} />}

            <div className="w-full flex justify-end">
              <Button
                type="submit"
                className="w-full text-white min-h-11 sm:w-40 rounded-full"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="size-5 animate-spin" />
                ) : (
                  <>
                    <Save className="size-5" />
                    Save Changes
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
