var server = require("./server_en");
var router = require("./router_en");
var requestHandlers = require("./requestHandlers_en");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);
