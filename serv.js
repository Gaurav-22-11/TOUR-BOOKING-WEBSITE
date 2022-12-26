const fs= require('fs');
var http = require('http'); // Import Node.js core module
fs.readdir('./images',function(req,res){

})
var server = http.createServer(function (req, res) {   //create web server
    if (req.url == './') { //check the URL of the current request
        
        fs.readFile('project',function(req,data){
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write(data);
        
    })
    res.end();
}});


server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..');