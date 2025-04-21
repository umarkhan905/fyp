import { match } from "path-to-regexp";

export const matchRoute = (path: string, routes: string[]) => {
  return routes.some((pattern) =>
    match(pattern, { decode: decodeURIComponent })(path)
  );
};
