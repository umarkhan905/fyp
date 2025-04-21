import NextAuth from "next-auth";
import { authOptions } from "@/utils/auth-options";
import {
  INTERVIEWEE_ROUTES,
  INTERVIEWER_ROUTES,
  PUBLIC_ROUTES,
} from "@/constants/routes/routes";
import { NextResponse } from "next/server";
import { matchRoute } from "@/utils/router-matcher";

const { auth } = NextAuth(authOptions);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  const isPublicRoute = matchRoute(nextUrl.pathname, PUBLIC_ROUTES);
  const isIntervieweeRoute = matchRoute(nextUrl.pathname, INTERVIEWEE_ROUTES);
  const isInterviewerRoute = matchRoute(nextUrl.pathname, INTERVIEWER_ROUTES);

  const role = req.auth?.user?.role;
  const isInterviewee = role === "INTERVIEWEE";
  const isInterviewer = role === "INTERVIEWER";

  const isAdmin = role === "ADMIN";
  const isAdminRoute = nextUrl.pathname.startsWith("/admin");

  if (isLoggedIn && isPublicRoute) {
    // If the user is logged in and tries to access a public route, redirect them to the dashboard
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!isLoggedIn && !isPublicRoute) {
    // If the user is not logged in and tries to access a protected route, redirect them to the sign-in page
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  if (isLoggedIn && isInterviewee && !isIntervieweeRoute) {
    // If the user is logged in as an interviewee and tries to access a non-interviewee route, redirect them to the interviewee dashboard
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (isLoggedIn && isInterviewer && !isInterviewerRoute) {
    // If the user is logged in as an interviewer and tries to access a non-interviewer route, redirect them to the interviewer dashboard
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (isLoggedIn && isAdmin && !isAdminRoute) {
    // If the user is logged in as an admin and tries to access a non-admin route, redirect them to the admin dashboard
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return undefined;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
