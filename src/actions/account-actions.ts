"use server";

import { ExperienceIn } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import {
  PhoneNumberSchema,
  ProfileSchema,
  ProfileSchemaType,
  URLSchema,
} from "@/schemas/account/profile-schema";
import { comparePassword } from "@/utils/compare-password";
import { hashPassword } from "@/utils/hash-password";
import { revalidatePath } from "next/cache";

const updateProfile = async (
  formData: ProfileSchemaType,
  userId: string,
  pathToRevalidate?: string
) => {
  const result = ProfileSchema.safeParse(formData);

  if (!result.success) {
    return {
      success: false,
      message: result?.error.format()._errors[0],
    };
  }
  const { mobile, linkedIn, github } = result.data;

  //   validate mobile
  if (mobile) {
    const mobileResult = PhoneNumberSchema.safeParse({ mobile });

    if (!mobileResult.success) {
      return {
        success: false,
        message: mobileResult.error?.format().mobile?._errors[0],
      };
    }
  }

  //   validate linkedIn
  if (linkedIn) {
    const linkedInResult = URLSchema.safeParse({ url: linkedIn });
    if (!linkedInResult.success) {
      return {
        success: false,
        message: "Invalid linkedIn URL format",
      };
    }
  }

  //   validate github
  if (github) {
    const githubResult = URLSchema.safeParse({ url: github });
    if (!githubResult.success) {
      return {
        success: false,
        message: "Invalid github URL format",
      };
    }
  }

  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      firstName: result.data.firstName,
      lastName: result.data.lastName,
      email: result.data.email,
      mobile: result.data.mobile,
      location: result.data.location,
      companyName: result.data.companyName,
      position: result.data.position,
      experience: parseInt(result.data.experience),
      experienceIn: result.data.experienceIn as ExperienceIn,
      gitHub: result.data.github,
      linkedIn: result.data.linkedIn,
      bio: result.data.bio,
    },
  });

  if (!user) {
    return {
      success: false,
      message: "User not found to update profile",
    };
  }

  if (pathToRevalidate) {
    revalidatePath(pathToRevalidate);
  }

  return {
    success: true,
    message: "Profile updated successfully",
  };
};

const updatePassword = async (
  formData: { currentPassword: string; newPassword: string },
  userId: string
) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return {
      success: false,
      message: "User not found to update password",
    };
  }

  const isCurrentPasswordCorrect = await comparePassword(
    formData.currentPassword,
    user.password as string
  );

  if (!isCurrentPasswordCorrect) {
    return {
      success: false,
      message: "Current password is incorrect",
    };
  }

  //   hash new password
  const hashedPassword = await hashPassword(formData.newPassword);

  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: hashedPassword,
    },
  });

  if (!updatedUser) {
    return {
      success: false,
      message: "User not found to update password",
    };
  }

  return {
    success: true,
    message: "Password updated successfully",
  };
};

const deleteAccount = async (userId: string) => {
  const user = await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return {
      success: false,
      message: "User not found to delete account",
    };
  }

  return {
    success: true,
    message: "Account deleted successfully",
  };
};

const updateProfileImage = async (userId: string, cloudinaryPath: string) => {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      image: cloudinaryPath,
    },
  });
  if (!user) {
    return {
      success: false,
      message: "User not found to update profile image",
    };
  }

  return {
    success: true,
    message: "Profile image updated successfully",
  };
};

export { updateProfile, updatePassword, deleteAccount, updateProfileImage };
