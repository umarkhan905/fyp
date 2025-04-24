const PUBLIC_ROUTES = [
  "/",
  "/sign-in",
  "/sign-up/interviewer",
  "/sign-up/interviewee",
  "/forgot-password",
  "//reset-password/:id",
  "/verify-email/:id",
];

const COMMON_ROUTES = ["/dashboard", "/dashboard/create-interview"];

const INTERVIEWER_ROUTES = [""];

const INTERVIEWEE_ROUTES = [
  "/interview/:id",
  "/interview/:id/join",
  "/interview/:id/feedback/:feedbackId",
];

export { PUBLIC_ROUTES, INTERVIEWER_ROUTES, INTERVIEWEE_ROUTES, COMMON_ROUTES };
