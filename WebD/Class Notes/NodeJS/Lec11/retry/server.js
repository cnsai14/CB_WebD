var express = require('express');
var server = express();
server.get('/', function(req, res){
   server.use('/',express.static('public'))
   app.get()
    {

    }
    res.send("Hello");
});
server.listen(5000, console.log("Server Started"));