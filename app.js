const http = require("http");
const fs = require("fs");
const qs = require("querystring");

function readPage(res, file, type) {
  let page = fs.readFileSync(file);
  res.writeHead(200, { "content-type": type });
  res.write(page);
  res.end();

  return page;
}

const server = http.createServer((req, res) => {
  //GET
  console.log(req.method, " ", req.url);
  if (req.method === "GET") {
    if (req.url === "/") {
      readPage(res, "index.html", "utf-8;text/html");
    }
    if (req.url === "/plus.html") {
      readPage(res, "plus.html", "utf-8;text/html");
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
    }
  }
});

PORT = 3020;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
