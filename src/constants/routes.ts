export const ROUTES = {
  HOME: "/home",
  TODO_DETAIL: (id = ":id") => `/${id}`,
  TODO_CREATE: "/create",
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
  },
};
