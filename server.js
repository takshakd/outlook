var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathname;
        route(handle, pathName, request, response);
    }

    var port = 8000;
    http.createServer(onRequest).listen(port);
}

exports.start = start;
