require("dotenv").config("./.env");

// hard-coded secret
const API_KEY = "super secret key 1234";

console.log(process.env.NODE_ENV);

const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const fs = require("fs");
  let directory_name = "./";
  let filenames = fs.readdirSync(directory_name);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  let f = "";
  filenames.forEach((file) => {
    f += file + "\n";
  });

  res.end(f + "my secret key is: " + API_KEY);
});

server.listen(port, hostname, () => {
  console.log(`server is running on ${port}!`);
});
