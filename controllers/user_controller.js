const token = require("../config/token");
const User = require("../models/user_model");

const get_user = async (req, res) => {
  try {
    const user = await User.find();
    return res.json(user);
  } catch (error) {
    return res.status(404).json("ERROR OCCURED");
  }
};

const register_user = async (req, res) => {
  const { email, firstname, lastname, password } = req.body;
  if (email.length === 0) {
    return res.status(400).json("EMAIL FIELD CANNOT BE EMPYT");
  }
  if (firstname.length === 0 || lastname.length === 0) {
    return res.status(400).json("NAME FIELD CANNOT BE EMPTY");
  }
  if (password.length < 7) {
    return res.status(400).json("PASSWORD LESS THAN 7 CHARACTERS");
  }

  try {
    const exists = await User.findOne({ email });
    if (exists) {
      res.status(400);
      return res.json("USER ALREADY EXISTS");
    }
  } catch (error) {
    return res.status(404).json("ERROR OCCURED");
  }

  try {
    const user = await User.create({
      email,
      firstname,
      lastname,
      password,
    });
    if (user) {
      res.status(201).json({
        _id: user.id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        admin: user.admin,
        token: token(user._id),
      });
    } else {
      return res.status(400).json("ERROR OCCURED");
    }
  } catch (error) {
    return res.status(404).json("ERROR OCCURED");
  }
};

const login_user = async (req, res) => {
  const { email, password } = req.body;

  if (email.length === 0) {
    return res.status(400).json("EMAIL FIELD CANNOT BE EMPTY");
  }
  if (password.length === 0) {
    return res.status(400).json("PASSWORD FIELD CANNOT BE EMPTY");
  }

  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user.id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        admin: user.admin,
        token: token(user._id),
      });
    } else {
      return res.status(400).json("INVALID EMAIL OR PASSWORD");
    }
  } catch (error) {
    return res.status(404).json("ERROR OCCURED");
  }
};

module.exports = { get_user, register_user, login_user };
