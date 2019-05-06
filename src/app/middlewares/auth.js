module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    // res.locals e uma informação disponivel para todas as minhas views, então consigo usar as informações do cara logado em qualquer template
    res.locals.user = req.session.user;

    return next();
  }

  return res.redirect("/");
};
