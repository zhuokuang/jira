module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "admin" && req.body.password === "123") {
      return res.status(200).json({
        user: {
          token: "CHENRAN",
        },
      });
    } else {
      return res.status(400).json({
        message: "Invalid username or password",
      });
    }
  }
  next();
};
