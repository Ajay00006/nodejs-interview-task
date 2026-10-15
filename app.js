
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });

  res.end(`
    <h1>Hello Ajay!</h1>
    <h2>My First Node.js Application</h2>
    <p>Successfully running on localhost!</p>
  `);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://localhost:3000");
});
