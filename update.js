//[x] input 1개와 button[type="submit"] 1개 만듦
//[x] server 생성
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
        <h1>테스트</h1>
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
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "utf-8; text/html" });
      res.write(indexPage());
      res.end();
    }
  }
  //POST
  if (req.method === "POST") {
    if (req.url === "/update") {
      //data입력 받을 때
      let body = [];
      req.on("data", (data) => {
        console.log(data);
        body.push(data);
      });
      //data 입력받은 후
      req.on('end',()=>{
        console.log(body.toString())
        if(!fs.existsSync('word.js')){
          fs.writeFileSync('word.js',[])
        }
        let originData = fs.readFileSync('word.js')
      })
    }
  }
});

PORT = 3060;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
