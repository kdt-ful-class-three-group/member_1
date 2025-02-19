const http = require("http");
const fs = require("fs");

//[ ] 페이지를 js에서 만들면
//+로 링크 이동 -> button누르면 데이터 가져옴
//가져온 데이터로 a태그의 href바뀜 -> innerText 변경

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
      req.on("data", (data) => {
        let cfData = data.toString();
        console.log(cfData);
        //바뀐 aTag에 해당하는 페이지 생성
        //가져온 데이터를 JSON으로 저장
      });
    }
  }
});

PORT = 3030;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
