const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //GET
  console.log(req.url);
  if (req.method === "GET") {
    if (req.url === "/") {
    }
  }
});

PORT = 3020;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
