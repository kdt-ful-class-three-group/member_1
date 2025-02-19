const http = require("http");
const fs = require("fs");
const qs = require("querystring");

// '/' 에대한 readfile : read
// post에서 writefile(/move.html), json파일 : write
// move.html 안에 수정하기 버튼 -> writefile : update
// move.html 안에 삭제하기 버튼 -> unlink

function movePage(obj) {
  let string = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root">
      <h1>오늘 아아</h1>
      <section>
        <h3>브랜드</h3>
        <p>${obj.brand}</p>
        <h3>샷</h3>
        <p>${obj.shot}</p>
        <h3>가격</h3>
        <p>${obj.price}</p>
      </section>
      <section>
        <a href='/delete'>삭제</a>
      </section>
    </div>
  </body>
</html>
  `;

  return string;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method}  ${req.url}`);
  if (req.method === "GET") {
    if (req.url === "/" || req.url === "/test.html") {
      let page = fs.readFileSync("test.html");
      res.writeHead(200, { "content-type": "utf-8; text/html" });
      res.write(page);
      res.end();
    }
    //read
    if (req.url === "/move.html") {
      let page = fs.readFileSync("move.html");
      res.writeHead(200, { "content-type": "utf-8;text/html" });
      res.write(page);
      res.end();
    }
    //delete
    if (req.url === "/delete") {
      fs.unlinkSync("move.html");
      fs.writeFileSync("coffee.json", "");
      let page = fs.readFileSync("test.html");
      res.writeHead(302, { location: "/test.html" });
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
        let valueData = qs.parse(body);
        console.log(valueData);
        //write
        fs.writeFileSync("coffee.json", JSON.stringify(valueData));
        fs.writeFileSync("move.html", movePage(valueData));
      });
    }
  }
});

PORT = 3030;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
