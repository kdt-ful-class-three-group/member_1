const http = require("http");
const fs = require("fs");
const qs = require("querystring");

// '/' 에대한 readfile : read
// post에서 writefile(/move.html), json파일 : write
// move.html 안에 수정하기 버튼 -> writefile : update
// move.html 안에 삭제하기 버튼 -> unlink

const server = http.createServer((req, res) => {
  console.log(`${req.method}  ${req.url}`);
  if (req.method === "GET") {
    if (req.url === "/") {
      let page = fs.readFileSync("test.html");
      res.writeHead(200, { "content-type": "utf-8; text/html" });
      res.write(page);
      res.end();
    }
  }
  if (req.method === "POST") {
    if (req.url === "/as") {
      let body = "";
      req.on("data", (data) => {
        body += data;
        //바뀐 aTag에 해당하는 페이지 생성
        //가져온 데이터를 JSON으로 저장
      });
      req.on("end", () => {
        console.log(qs.parse(body));
        //write
      });
    }
  }
});

PORT = 3030;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
