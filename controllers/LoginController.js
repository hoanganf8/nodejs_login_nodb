module.exports = {
  showForm: (req, res) => {
    const errors = req.flash("errors")[0];

    const msg = req.flash("msg")[0];
    const msgType = req.flash("msg_type")[0];

    return res.render("auth/login", {
      errors,
      msg,
      msgType,
    });
  },

  login: (req, res) => {
    const { email, password } = req.body;
    const errors = {};
    if (!email) {
      errors.email = "Vui lòng nhập email";
    }

    if (!password) {
      errors.password = "Vui lòng nhập mật khẩu";
    }

    if (Object.keys(errors).length) {
      req.flash("errors", errors);
      req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
    } else {
      if (email === "admin@gmail.com" && password === "123456") {
        req.session.isAuth = true;
        req.session.user = {
          name: "Hoàng An",
          email: "hoangan.web@gmail.com",
        };
      } else {
        req.flash("msg", "Email hoặc mật khẩu không chính xác");
      }
    }

    return res.redirect("/dang-nhap");
  },

  logout: (req, res) => {
    delete req.session.isAuth;
    delete req.session.user;
    req.flash("msg", "Đăng xuất thành công");
    req.flash("msg_type", "success");
    res.redirect("/dang-nhap");
  },
};
