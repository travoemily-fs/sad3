require("dotenv").config("./.env")

console.log(process.env.NODE_ENV)

const http = require("http");
const hostname = "127.0.0.1"
const port = 3000;

const server = http.createServer((req, res) => {

    const fs = require("fs")
    let directory_name = "./"
    let filenames = fs.readdirSync(directory_name);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain")

    f = ""
    filenames.forEach((file)= {
        f : f +file+" \n"
    })
res.end(f)
});

server.listen(port, hostname, () => {
    
})