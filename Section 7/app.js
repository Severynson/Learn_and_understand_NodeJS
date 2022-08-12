// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "text/html",
//   });
//   let html = fs.readFileSync(__dirname + "/index.htm", "utf-8");
//   const message =
//     "Hello world from Severyn! (NodeJS) P.S. - placeholder replaced by JS now";
//   html = html.replace("{Message}", message);
//   res.end(html);
// });

// server.listen(1337, "127.0.0.1");

//////////////////////////////////////////////////

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   const html = fs.createReadStream(`${__dirname}/index.htm`);
//   html.pipe(res);
// });

// server.listen(1337, "127.0.0.1");

//////////////////////////////////////////////////

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/": {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(`${__dirname}/index.htm`).pipe(res);
      break;
    }
    case "/api": {
      res.writeHead(200, { "Content-Type": "application/json" });

      var obj = {
        firstname: "John",
        lastname: "Doe",
      };
      res.end(JSON.stringify(obj));
      break;
    }
    default: {
      res.writeHead(404);
      res.end();
    }
  }
});

server.listen(1337, "127.0.0.1");
