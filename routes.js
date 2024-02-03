const fs= require('fs');

const requestHandler=(req,res)=>{
    let url = req.url;
  let method = req.method;
  let msg = "Check";
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My Home Page</title></head>");
    res.write(`<h1>${fs.readFileSync('./message.txt')}</h1>`);
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Enter</button></input></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      msg=message;
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end();
      });
      
    });
  }
  if (url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Home Page</title></head>");
    res.write("<body><h1>" + msg + "</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Page</title></head>");
  res.write("<body><h1>Hello from Node Server</h1></body>");
  res.write("</html>");
  res.end();
}

module.exports=requestHandler;



/* Different ways to export 

module.exports={
    handler: requestHandler,
    someText: 'some random text'
};

module.exports.handler= requestHandler;


exports.handler=requestHandler;


*/