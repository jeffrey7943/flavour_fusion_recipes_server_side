const express = require("express");
require("dotenv").config();
const connect = require("./config/db");

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

connect();
app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.listen(PORT);
