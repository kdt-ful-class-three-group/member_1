//[ ] input 1개와 button[type="submit"] 1개 만듦
//[ ] server 생성
//[ ] button 누르면 json 파일 생성
//[ ] button 여러 번 누르면 데이터 json파일에 추가됨

function indexPage() {
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
        <h1>업데이트 테스트</h1>
        <form action='/update' method='POST'>
          <input type='text' name='word' placeholder='단어'>
          <button type='submit'>추가</button>
        </form>
      </div>
    </body>
    </html>
  `;
  return string;
}

const http = require("http");
const fs = require("fs");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  //GET
  if (req.method === "GET") {
    if (req.method === "/") {
    }
  }
  //POST
});

PORT = 3060;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
