export const authMiddleware = (to, from, next) => {
  const authenticate = !!localStorage.getItem("token");
  if (to.name !== "login" && !authenticate) {
    next({ name: "login" });
  }
  if (to.name === "login" && authenticate) {
    next({
      name: "home",
    });
  }

  next();
};
