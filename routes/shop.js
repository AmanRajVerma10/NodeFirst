const express = require("express");
const path= require('path')

const rootDir= require('../util/path')

const router = express.Router();

router.get("/",(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','shop.html'));
})

// router.get("/", (req, res, next) => {
//   fs.readFile("messages.txt", (err, data) => {
//     if (err) {
//       data = "No Messages Found";
//     }
//     res.send(`${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
//     <input id="chat" type="text" name="msg" placeholder="Message"></input>
//     <input id="username" type="hidden" name="usr"></input>
//     <button type="submit">Send</button></form>`);
//   });
// });

// router.post("/", (req, res, next) => {
//   console.log(req.body);
//   fs.writeFile(
//     "messages.txt",
//     `${req.body.usr}:${req.body.msg}`,
//     { flag: "a" },
//     (err) => {
//       err ? console.log(err) : res.redirect("/");
//     }
//   );
// });

module.exports = router;
