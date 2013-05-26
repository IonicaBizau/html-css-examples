var http = require("http");
var static = require('node-static');

// Conversation history array
var messages = [];

// Node static: public_html folder
var file = new(static.Server)('./public');

// Create server
var srv = http.createServer(function(req, res){
    file.serve(req, res);
    
    if(req.url === "/fetchMessages") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        if(req.method === "GET"){
            for(var i in messages){
                res.write(messages[i] + "\n");
            }
            res.end();
        }
        if(req.method === "POST"){
            req.on("data", function(data){
                messages.push(data);
                if(messages.length > 10) {
                    messages.splice(0, 1);
                }
                
            });
            req.on("end", function(){
                res.end("Message posted.");
            });
        }
    }
});

srv.listen(8080);
