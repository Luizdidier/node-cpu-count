const http = require('http');
const numCPUs = require('os').cpus().length;

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Server is running ... \nCPU Number: ${numCPUs}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/\nCPU Number: ${numCPUs}`);
});