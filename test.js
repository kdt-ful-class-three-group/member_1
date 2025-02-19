const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {});

PORT = 3030;
server.listen(200, () => {
  console.log(`http://localhost:${PORT}`);
});
