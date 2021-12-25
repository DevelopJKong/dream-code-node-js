const http = require("http");
const fs = require("fs");
const ejs = require("ejs");
const name = "jeong";
const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JS" },
  { name: "NODE" },
];

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    ejs.renderFile("./template/index.ejs", { name }).then((data) => {
      res.end(data);
    });
  } else if (url === "/course") {
    ejs.renderFile("./template/courses.ejs", { courses }).then((data) => {
        res.end(data);
      });
  } else {
    ejs.renderFile("./template/404.ejs").then((data) => {
        res.end(data);
      });
  }

});
server.listen(4030);
