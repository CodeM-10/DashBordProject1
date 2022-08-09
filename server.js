var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './dest',            // required, the root of the server file tree
  port: 1994,               // required, the port to listen

});

server.start(function () {
  console.log("http://localhost:1994/");
});