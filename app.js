const http = require("http");

let server = http.createServer((req, res) => {
  let url=req.url;
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
