const http = require("http");
const routes= require('./routes')

let server = http.createServer(routes);

server.listen(4000);
