const guestMiddleware = (req, res, next) => {
  if (req.session && req.session.user) {
    return res.redirect("/app/dashboard");
  }

  return next();
};

module.exports = guestMiddleware;
