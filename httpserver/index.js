const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`, "utf-8");
  console.log(data);
  const objData = JSON.parse(data);

  // console.log(req.url);
  if (req.url == "/") {
    res.end("hello from the other sides");
  } else if (req.url == "/about") {
    res.end("hello from the about sides");
  } else if (req.url == "/contact") {
    res.end("hello from the contact sides");
  } else if (req.url == "/userapi") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(objData);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 error page</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server is ready");
});
