const http = require("http");

let server = http.createServer((req, res) => {
  console.log("aman");
});

server.listen(4000);
