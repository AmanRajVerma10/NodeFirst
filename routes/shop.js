const express= require('express');

const router= express.Router();

router.get("/", (req, res, next) => {
    console.log("in mw2");
    res.send("<h1>Welcome</h1>");
  });

  module.exports= router