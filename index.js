const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connect = require("./config/db");
const user_route = require("./routes/user_route");
const blog_route = require("./routes/blog_route");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: [`${process.env.DEVELOPMENT}`],
    credentials: true,
  })
);
app.use((req, res, next) => {
  const allowedOrigins = [`${process.env.DEVELOPMENT}`];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

const PORT = process.env.PORT;

connect();
app.use("/api/users/", user_route);
app.use("/api/blogs/", blog_route);

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.listen(PORT);
