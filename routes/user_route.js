const express = require("express");
const {
  get_user,
  register_user,
  login_user,
} = require("../controllers/user_controller");

const router = express.Router();
router.route("/").get(get_user);
router.route("/register").post(register_user);
router.route("/login").post(login_user);

module.exports = router;
