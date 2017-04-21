var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(req, res) {
        var pathName = url.parse(req.url).pathname;
        route(handle, pathName, res, req);
    }

    var port = 8000;
    http.createServer(onRequest).listen(port);
}

exports.start = start;
