module.exports = (req, res, next) => {
  if (!req.session.isAuth || req.path === "/dang-xuat") {
    next();
  }

  res.redirect("/");
};
