const path = require("path");
const rootDir = require("../util/path");

exports.contactForm = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
};

exports.successPage = (req, res, next) => {
  res.send("<h1>Form Successfully Filled</h1>");
};
