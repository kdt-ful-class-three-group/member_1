const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //GET
  console.log(req.url);
  if (req.method === "GET") {
    if (req.url === "/") {
      let page = fs.readFileSync("index.html");
      res.writeHead(200, { "content-type": "utf-8;text/html" });
      res.write(page);
      res.end();
    }
  }
});

PORT = 3020;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
