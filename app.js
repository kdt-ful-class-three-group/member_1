const http = require("http");
const fs = require("fs");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  //GET
  console.log(req.method, " ", req.url);
  if (req.method === "GET") {
    if (req.url === "/") {
      let page = fs.readFileSync("index.html");
      res.writeHead(200, { "content-type": "utf-8;text/html" });
      res.write(page);
      res.end();
    }
    if (req.url === "/plus.html") {
      let page = fs.readFileSync("plus.html");
      res.writeHead(200, { "content-type": "utf-8;text/html" });
      res.write(page);
      res.end();
    }
  }
  //POST
  if (req.method === "POST") {
    if (req.url === "/add") {
      req.on("data", (data) => {
        console.log(data.toString());
        let dataObj = qs.parse(data.toString());
        console.log(dataObj);
        console.log(dataObj.brand);
      });
      let page = fs.readFileSync("index.html");
      res.writeHead(200, { "content-location": "/" });
      res.write(page);
      res.end();
    }
  }
});

PORT = 3020;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
