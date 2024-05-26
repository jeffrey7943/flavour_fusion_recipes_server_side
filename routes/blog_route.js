const express = require("express");
const protect = require("../middlewares/auth_middleware");
const {
  get_blog,
  breakfast_blog,
  lunch_blog,
  dinner_blog,
  create_blog,
  single_blog,
  update_blog,
  delete_blog,
} = require("../controllers/blog_controller");

const router = express.Router();
router.route("/").get(get_blog);
router.route("/breakfast").get(breakfast_blog);
router.route("/lunch").get(lunch_blog);
router.route("/dinner").get(dinner_blog);
router.route("/create").post(protect, create_blog);
router
  .route("/:id")
  .get(single_blog)
  .put(protect, update_blog)
  .delete(protect, delete_blog);

module.exports = router;
