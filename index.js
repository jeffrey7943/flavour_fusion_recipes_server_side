// load environment variables from .env file
require("dotenv").config();
// import and execute database connection setup
require("./db/db");
// import express framework
const express = require("express");
const app = express();
// import user-related routes
const user_route = require("./routes/user_route");

// enable json request body parsing
app.use(express.json());

// get port number from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// define a route for the root url
app.get("/", (req, res) => {
  res.send("HELLO, WORLD!"); // send response to client
});

// use user routes for authentication-related endpoints
app.use("/api/auth", user_route);

// start the server and listen on the specified port
app.listen(PORT, (err) => {
  if (err) {
    console.error("error starting server:", err); // log error if server fails to start
  } else {
    console.log(`app listening on port ${PORT}`); // log success message
  }
});
