export const BASE_ADDRESS =
  process.env.NODE_ENV === "production"
    ? "https://mock-byte.vercel.app"
    : "http://localhost:3000";
