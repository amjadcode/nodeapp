var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    let grabpage = req.url;
    function handling(status, filename) {
      fs.readFile(filename, function (err, data) {
        res.writeHead(status, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    }

    if (grabpage == "/") {
      handling(200, "about.html");
    } else if (grabpage == "/contact") {
      handling(200, "contact.html");
    } else if (grabpage == "/login") {
      handling(200, "login.html");
    } else if (grabpage == "/about") {
      handling(200, "about.html");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2> page is not found</h2>");
    }
  })
  .listen(process.env.PORT);
