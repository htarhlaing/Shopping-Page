const http = require('http');
const url = require('url')
const fs = require('fs')
http.createServer(function (req, res) {

    var pathname = req.url
    if (pathname != "/favicon.ico") {
        console.log(pathname);
        fs.readFile(pathname, (err, data) => {
            if (err) {
                res.write(404, { 'Content-Type': 'text/html;charset="utf-8"' })
                console.log("404 not found");
            }
            res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
            res.end("hello")


        })

    }


}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');