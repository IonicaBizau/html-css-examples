var http = require("http");
var static = require('node-static');

// Node static: public_html folder
var file = new(static.Server)('./public');

// Create server
var srv = http.createServer(function(req, res){
    file.serve(req, res);
});

srv.listen(8080);
