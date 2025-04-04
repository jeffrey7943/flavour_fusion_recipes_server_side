// import express framework and bcrypt for password hashing
const express = require("express");
const bcrypt = require("bcrypt");
// import database instance
const { db } = require("../db/db");

const router = express.Router();

// define salt rounds for bcrypt hashing
const salt_rounds = 10;
// generate salt for password hashing
const salt = bcrypt.genSalt(salt_rounds);

// user registration route
router.post("/register", async (req, res) => {
  // extract user details for request body
  const { first_name, last_name, email, password } = req.body;

  // check if any required field is missing
  if (!first_name || !last_name || !email || !password) {
    return res.status(400).json({ message: "all fields are required" });
  }

  try {
    // get reference to the user collection
    const collection = await db.collection("users");
    // check if a user with the same email already exists
    const existing_user = await collection.findOne({ email });
    if (existing_user) {
      return res.status(409).json({ message: "user already exists" });
    }

    // hash the password using bcrypt and generated salt
    const hashed_password = await bcrypt.hash(password, parseInt(salt));

    // create a new user document
    const new_document = {
      profile_picture:
        "https://res.cloudinary.com/de74jeqj6/image/upload/v1743752085/kyand9e5iwpdqzlgp4sa.webp",
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: hashed_password,
      admin: false,
    };

    // insert the new user document into the collection
    const result = await collection.insertOne(new_document);
    // respond with success message and user id
    res.status(201).json({
      message: "user registered successfully",
      user_id: result.insertedId,
    });
  } catch (error) {
    // log any server error and send a 500 response
    console.error(error);
    res.status(500).send("internal server error");
  }
});

// export the router for use in other modules
module.exports = router;
