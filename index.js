const http = require('http');
const post = 3000;
//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //response to the client
  res.end(); //end the response
}).listen(port); //the server listens on port 3000
console.log(`Server is running at port ${port}`);