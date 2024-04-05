const jwt = require("jsonwebtoken");

const generate_token = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generate_token;
