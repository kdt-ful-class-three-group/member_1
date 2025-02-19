//[ ] input 1개와 button[type="submit"] 1개 만듦
//[ ] server 생성
//[ ] button 누르면 json 파일 생성
//[ ] button 여러 번 누르면 데이터 json파일에 추가됨

const http = require("http");
const fs = require("fs");
const qs = require("querystring");

const server = http.createServer((req, res) => {});

PORT = 3060;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
