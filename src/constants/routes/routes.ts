const PUBLIC_ROUTES = [
  "/",
  "/sign-in",
  "/sign-up/interviewer",
  "/sign-up/interviewee",
  "/forgot-password",
  "//reset-password/:id",
  "/verify-email/:id",
];

const INTERVIEWER_ROUTES = ["/dashboard", "/dashboard/create-interview"];

const INTERVIEWEE_ROUTES = [
  "/dashboard",
  "/interviews/:id",
  "/interviews/:id/join",
  "/interviews/:id/feedback/:feedbackId",
];

export { PUBLIC_ROUTES, INTERVIEWER_ROUTES, INTERVIEWEE_ROUTES };
