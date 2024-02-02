const http = require("http");
const fs= require("fs");

let server = http.createServer((req, res) => {
  let url=req.url;
  let method=req.method;
  if(url==='/'){
    res.write('<html>');
    res.write('<head><title>My Home Page</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Enter</button></input></form></body>')    
    res.write('</html>');
    return res.end();
  }
  if(url==='/message' && method==='POST'){
    fs.writeFileSync('message.txt','Dummy');
    res.statusCode=302;
    res.setHeader('location','/');
    return res.end();

  }
  if(url==='/home'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My Home Page</title></head>');
    res.write('<body><h1>Welcome Home</h1></body>')
    res.write('</html>');
    return res.end();

  }
  if(url==='/node'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My Node Page</title></head>');
    res.write('<body><h1>Welcome to my nodeJs project</h1></body>')
    res.write('</html>');
    return res.end();


  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>My first Page</title></head>');
  res.write('<body><h1>Hello from Node Server</h1></body>')
  res.write('</html>');
  res.end();
});

server.listen(4000);
