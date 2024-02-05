const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in mw1");
  next();
});

app.use((req, res, next) => {
  console.log("in mw2");
  res.send('<h1>Welcome</h1>')
});

app.listen(3000);
