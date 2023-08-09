const http = require("http");
const server = http.createServer((request, response) => {
  console.log(request.url);
  response.write("<h1>Hello world 3</h1>");
  response.end();
});

server.listen(3000, () => {
  console.log("Server is running");
});
