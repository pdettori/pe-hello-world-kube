const http = require('http');
const port = process.env.PORT || 8080

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello World! My name is pe-service-kube and my owner is pdettori');
}

const server = http.createServer(requestListener);
server.listen(port);