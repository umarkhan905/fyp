"use server";

import cloudinary from "@/lib/cloudinary";

const uploadFileToCloudinary = async (file: File) => {
  if (!file) throw new Error("No file selected");

  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "mock-byte-uploads",
            resource_type: "image",
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        )
        .end(buffer);
    });

    return result;
  } catch (error) {
    console.log("Something went wrong while uploading file: ", error);
    throw error;
  }
};

const deleteFileFromCloudinary = async (url: string) => {
  // https://res.cloudinary.com/drmqq4yi5/image/upload/v1745380087/mock-byte-uploads/rt9velxzt4eus0zmurur.webp
  try {
    const publicId = url.split("/").pop()?.split(".")[0] as string;
    const result = await cloudinary.uploader.destroy(
      `mock-byte-uploads/${publicId}`
    );
    return result;
  } catch (error) {
    console.log("Something went wrong while deleting file: ", error);
    throw error;
  }
};

export { uploadFileToCloudinary, deleteFileFromCloudinary };
