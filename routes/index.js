var express = require("express");
var router = express.Router();

const LoginController = require("../controllers/LoginController");
const HomeController = require("../controllers/HomeController");
const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");

/* GET home page. */
// router.use(authMiddleware);
router.get("/", authMiddleware, HomeController.index);

router.get("/test", (req, res) => {
  res.send(req.path);
});

router.use(guestMiddleware);
router.get("/dang-nhap", LoginController.showForm);
router.post("/dang-nhap", LoginController.login);
router.get("/dang-xuat", LoginController.logout);

module.exports = router;
