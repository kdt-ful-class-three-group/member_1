const http = require("http");
const fs = require("fs");
const qs = require("querystring");

//디버그 시작

const server = http.createServer((req, res) => {
  //GET
  console.log(req.method, " ", req.url);
  if (req.method === "GET") {
    if (req.url === "/") {
      let page = fs.readFileSync("index.html");
      res.writeHead(200, { "content-type": "utf-8;text/html" });
      res.write(page);
      //page = Buffer(3624) [60,33,...]
      res.end();
    }
    if (req.url === "/plus.html") {
      let page = fs.readFileSync("plus.html");
      //page = Buffer(2005) [60,33,...]
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
        let jsonData = JSON.stringify(dataObj);
        console.log(jsonData);
      });
      let page = fs.readFileSync("index.html");
      res.writeHead(200, { "content-location": "/" });
      res.write(page);
      res.end();
      //form을 작성하면 res응답 후 req로 가져온 데이터에 대한 과정 진행함
    }
  }
});

PORT = 3020;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
