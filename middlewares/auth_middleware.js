const jwt = require("jsonwebtoken");
const User = require("../models/user_model");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      if (req.user.admin) {
        next();
      } else {
        res.status(401);
        res.send("ADMINS ONLY");
      }
    } catch (error) {
      res.status(401);
      res.send("NOT AUTHORISED, TOKEN FAILED");
    }
  }

  if (!token) {
    res.status(401);
    res.send("NOT AUTHORISED, NO TOKEN");
  }
};

module.exports = protect;
