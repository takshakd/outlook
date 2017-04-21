var server = require("./server");
var router = require("./router");

var handle = {};
handle["/"] = home;

server.start(router.route, handle);

function home(response, request) {
    console.log(response);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello, Outlook!");
    response.end();
}
