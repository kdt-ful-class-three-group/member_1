const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {});

PORT = 3020;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
