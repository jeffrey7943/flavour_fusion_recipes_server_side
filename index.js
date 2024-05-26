const express = require("express");
require("dotenv").config();
const connect = require("./config/db");
const user_route = require("./routes/user_route");
const blog_route = require("./routes/blog_route");

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

connect();
app.use("/api/users/", user_route);
app.use("/api/blogs/", blog_route);

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.listen(PORT);
